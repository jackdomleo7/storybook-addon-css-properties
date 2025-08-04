import type { Renderer, DecoratorFunction } from "storybook/internal/types";
import { useChannel } from "storybook/preview-api";
import { EVENTS } from "./constants";

// Store styles per story instance
let storyStyles: Map<string, Record<string, string>> = new Map();
let currentContext: any = null;
let observer: MutationObserver | null = null;

export const withRoundTrip: DecoratorFunction<Renderer> = (storyFn, context) => {
  currentContext = context;
  const storyId = context.id;
  
  // Clean up previous observer when switching stories
  cleanupObserver();
  
  // Get the story function result
  const storyResult = storyFn();
  
  // Only set up CSS vars if this specific story has them configured
  const storyHasCssVars = context?.parameters?.cssVars && 
    Object.values(context.parameters.cssVars).some((config: any) => 
      config && typeof config === 'object' && config.value !== undefined
    );
  
  if (storyHasCssVars) {
    // Initialize styles for this story
    storyStyles.set(storyId, {});
    
    // Apply initial values from story parameters
    applyInitialValues(storyId);
    
    useChannel({
      [EVENTS.REQUEST]: (styles: Record<string, string>) => {
        // Store styles for this specific story
        const currentStoryStyles = storyStyles.get(storyId) || {};
        const updatedStyles = { ...currentStoryStyles, ...styles };
        storyStyles.set(storyId, updatedStyles);
        
        // Apply styles only to this story's elements
        applyStylesToStory(storyId, updatedStyles);
        
        // Set up observer to watch for DOM changes if not already set up
        if (!observer) {
          setupMutationObserver();
        }
      }
    });
  }

  return storyResult;
};

function setupDocsModeMutationObserver() {
  // For docs mode, observe the entire document for changes
  const docsObserver = new MutationObserver((mutations) => {
    let hasRelevantChanges = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if any added nodes contain story components
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            // Check if the added node is or contains story content
            if (element.matches?.('[data-docs-story], .sb-story') || 
                element.querySelector?.('[data-docs-story], .sb-story')) {
              hasRelevantChanges = true;
              break;
            }
          }
        }
      }
    });
    
    if (hasRelevantChanges) {
      // Reapply styles for all stories that have them
      storyStyles.forEach((styles, storyId) => {
        applyStylesToStory(storyId, styles);
      });
    }
  });

  docsObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function applyInitialValues(storyId: string): void {
  // Get CSS vars configuration from story parameters
  const cssVarsConfig = currentContext?.parameters?.cssVars;
  if (!cssVarsConfig) {
    return;
  }
  
  // Extract only values that are explicitly set (not defaults)
  const initialStyles: Record<string, string> = {};
  Object.entries(cssVarsConfig).forEach(([key, config]: [string, any]) => {
    if (config && typeof config === 'object' && config.value !== undefined) {
      initialStyles[key] = config.value;
    }
  });
  
  // Only proceed if this story actually has custom values
  if (Object.keys(initialStyles).length === 0) {
    return;
  }
  
  // Store initial styles for this story
  const currentStoryStyles = storyStyles.get(storyId) || {};
  storyStyles.set(storyId, { ...currentStoryStyles, ...initialStyles });
  
  // Apply styles immediately to this story
  applyStylesToStory(storyId, storyStyles.get(storyId)!);
  
  // For docs mode, also retry after delays since MDX components render asynchronously
  if (currentContext?.viewMode === 'docs') {
    setTimeout(() => applyStylesToStory(storyId, storyStyles.get(storyId)!), 100);
    setTimeout(() => applyStylesToStory(storyId, storyStyles.get(storyId)!), 300);
  }
  
  // Set up observers for DOM changes
  if (!observer) {
    setupMutationObserver();
  }
  if (currentContext?.viewMode === 'docs') {
    setupDocsModeMutationObserver();
  }
}

function applyStylesToStory(storyId: string, styles: Record<string, string>): void {
  const isDocsMode = currentContext?.viewMode === 'docs';
  const targetSelector = currentContext?.parameters?.cssVarsTarget;
  
  // Only proceed if we actually have styles to apply
  if (Object.keys(styles).length === 0) {
    return;
  }
  
  let elements: HTMLElement[] = [];
  
  if (isDocsMode) {
    // In docs mode, find story containers that match this specific story
    // Look for containers that might contain this story's components
    if (targetSelector) {
      // User specified a custom target
      const storyContainers = document.querySelectorAll(`[data-docs-story="${storyId}"], [id="story--${storyId}"]`);
      if (storyContainers.length === 0) {
        // If we can't find specific containers, be very conservative
        // Only apply to elements that actually need these specific CSS variables
        const allContainers = document.querySelectorAll('[data-docs-story], .sb-story');
        allContainers.forEach(container => {
          const targetElements = container.querySelectorAll<HTMLElement>(targetSelector);
          targetElements.forEach(el => {
            // Only add elements that already use the specific CSS variables we're setting
            const computedStyle = window.getComputedStyle(el);
            const usesOurVars = Object.keys(styles).some(cssVar => 
              computedStyle.getPropertyValue(cssVar) || 
              ['background', 'backgroundColor', 'color'].some(style => 
                computedStyle.getPropertyValue(style).includes(`var(${cssVar})`))
            );
            if (usesOurVars) {
              elements.push(el);
            }
          });
        });
      } else {
        storyContainers.forEach(container => {
          const targetElements = container.querySelectorAll<HTMLElement>(targetSelector);
          elements.push(...Array.from(targetElements));
        });
      }
    } else {
      // Use smart detection
      const storyContainers = document.querySelectorAll(`[data-docs-story="${storyId}"], [id="story--${storyId}"]`);
      if (storyContainers.length === 0) {
        // If we can't find specific containers, be very conservative
        // Only apply to elements that actually need these specific CSS variables
        const allContainers = document.querySelectorAll('[data-docs-story], .sb-story');
        allContainers.forEach(container => {
          const smartElement = findComponentInContainer(container as HTMLElement);
          if (smartElement) {
            const computedStyle = window.getComputedStyle(smartElement);
            // Only add elements that use the specific CSS variables we're setting
            const usesOurVars = Object.keys(styles).some(cssVar => 
              computedStyle.getPropertyValue(cssVar) || 
              ['background', 'backgroundColor', 'color'].some(style => 
                computedStyle.getPropertyValue(style).includes(`var(${cssVar})`))
            );
            if (usesOurVars) {
              elements.push(smartElement);
            }
          }
        });
      } else {
        storyContainers.forEach(container => {
          const smartElement = findComponentInContainer(container as HTMLElement);
          if (smartElement) elements.push(smartElement);
        });
      }
    }
  } else {
    // For regular story mode
    if (targetSelector) {
      const element = document.querySelector<HTMLElement>(`#storybook-root ${targetSelector}`);
      if (element) elements = [element];
    } else {
      // Use smart component detection
      const smartElement = findComponentInStoryRoot();
      if (smartElement) elements = [smartElement];
    }
  }
  
  // Apply styles to all found elements immediately
  elements.forEach(element => {
    Object.entries(styles).forEach(([property, value]) => {
      if (value) {
        element.style.setProperty(property, value, isDocsMode ? 'important' : '');
      } else {
        element.style.removeProperty(property);
      }
    });
  });
}

function setupMutationObserver() {
  const root = document.getElementById('storybook-root');
  if (!root) return;

  observer = new MutationObserver((mutations) => {
    let hasRelevantChanges = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Check if any added nodes are elements (not just text nodes)
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            hasRelevantChanges = true;
            break;
          }
        }
      }
    });
    
    if (hasRelevantChanges) {
      // Reapply styles for all stories that have them
      storyStyles.forEach((styles, storyId) => {
        applyStylesToStory(storyId, styles);
      });
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true
  });
}

function cleanupObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

// Smart component detection for regular story mode
function findComponentInStoryRoot(): HTMLElement | null {
  const root = document.getElementById('storybook-root');
  if (!root) return null;

  // Strategy 1: Look for elements that use CSS variables (most reliable)
  const elementWithCssVars = findElementUsingCssVariables(root);
  if (elementWithCssVars) return elementWithCssVars;

  // Strategy 2: Find the deepest meaningful element with classes
  const deepestElement = findDeepestMeaningfulElement(root);
  if (deepestElement) return deepestElement;

  // Strategy 3: Fallback to first child
  return root.firstElementChild as HTMLElement;
}

// Smart component detection within a specific container (for docs mode)
function findComponentInContainer(container: HTMLElement): HTMLElement | null {
  // Strategy 1: Look for elements that use CSS variables
  const elementWithCssVars = findElementUsingCssVariables(container);
  if (elementWithCssVars) return elementWithCssVars;

  // Strategy 2: Find the deepest meaningful element with classes
  const deepestElement = findDeepestMeaningfulElement(container);
  if (deepestElement) return deepestElement;

  // Strategy 3: Fallback to first child
  return container.firstElementChild as HTMLElement;
}

// Find elements that are already using CSS variables (most likely the target)
function findElementUsingCssVariables(container: HTMLElement): HTMLElement | null {
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: Element) => {
        if (node === container) return NodeFilter.FILTER_SKIP;
        
        const element = node as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        
        // Check if element uses any CSS custom properties
        for (let i = 0; i < computedStyle.length; i++) {
          const property = computedStyle[i];
          if (property && property.startsWith('--')) {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
        
        // Also check if the element's CSS contains var() functions
        const styles = ['background', 'backgroundColor', 'color', 'border', 'borderColor'];
        for (const style of styles) {
          const value = computedStyle.getPropertyValue(style);
          if (value && value.includes('var(--')) {
            return NodeFilter.FILTER_ACCEPT;
          }
        }
        
        return NodeFilter.FILTER_SKIP;
      }
    }
  );

  return walker.nextNode() as HTMLElement | null;
}

// Find the deepest meaningful element (elements with classes or meaningful attributes)
function findDeepestMeaningfulElement(container: HTMLElement): HTMLElement | null {
  let deepestElement: HTMLElement | null = null;
  let maxDepth = 0;

  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: Element) => {
        if (node === container) return NodeFilter.FILTER_SKIP;
        
        const element = node as HTMLElement;
        
        // Consider any element with a class name as a potential component
        const hasClass = typeof element.className === 'string' && element.className.trim() !== '';
        const hasId = typeof element.id === 'string' && element.id !== '';
        
        if (hasClass || hasId) {
          // Calculate depth from container
          let depth = 0;
          let parent = element.parentElement;
          while (parent && parent !== container) {
            depth++;
            parent = parent.parentElement;
          }
          
          if (depth > maxDepth) {
            maxDepth = depth;
            deepestElement = element;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
        
        return NodeFilter.FILTER_SKIP;
      }
    }
  );

  // Walk through all nodes to find the deepest
  while (walker.nextNode()) {
    // The logic is in the acceptNode function
  }

  return deepestElement;
}
