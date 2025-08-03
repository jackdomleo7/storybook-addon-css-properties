import type { Renderer, DecoratorFunction } from "storybook/internal/types";
import { useChannel } from "storybook/preview-api";
import { EVENTS } from "./constants";

// Store current styles and context globally
let currentStyles: Record<string, string> = {};
let currentContext: any = null;
let observer: MutationObserver | null = null;

export const withRoundTrip: DecoratorFunction<Renderer> = (storyFn, context) => {
  currentContext = context;
  
  // Clean up previous observer when switching stories
  cleanupObserver();
  
  // Reset styles for new story
  currentStyles = {};
  
  useChannel({
    [EVENTS.REQUEST]: (styles: Record<string, string>) => {
      // Accumulate the styles instead of overwriting them
      currentStyles = { ...currentStyles, ...styles };
      
      // Apply styles immediately
      applyStylesToTarget();
      
      // Set up observer to watch for DOM changes if not already set up
      if (!observer) {
        setupMutationObserver();
      }
    }
  });

  return storyFn();
};

function applyStylesToTarget(): void {
  // Use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    let targetElement: HTMLElement | null = null;
    
    // Strategy 1: Check if user specified a target selector in parameters
    const targetSelector = currentContext?.parameters?.cssVarsTarget;
    if (targetSelector) {
      targetElement = document.querySelector<HTMLElement>(`#storybook-root ${targetSelector}`);
    }
    
    // Strategy 2: Look for elements that use CSS variables (most reliable)
    if (!targetElement) {
      targetElement = findElementUsingCssVariables();
    }
    
    // Strategy 3: Find the deepest meaningful element
    if (!targetElement) {
      targetElement = findDeepestMeaningfulElement();
    }
    
    // Strategy 4: Fallback to any element with class or id
    if (!targetElement) {
      targetElement = document.querySelector<HTMLElement>('#storybook-root [class], #storybook-root [id]:not(#storybook-root)');
    }
    
    // Strategy 5: Ultimate fallback - direct child of storybook-root
    if (!targetElement) {
      targetElement = document.querySelector<HTMLElement>('#storybook-root > *');
    }

    if (!targetElement) return;

    // Apply CSS variables
    Object.entries(currentStyles).forEach(([property, value]) => {
      if (value) {
        targetElement!.style.setProperty(property, value);
      } else {
        targetElement!.style.removeProperty(property);
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
      // Debounce to avoid excessive calls during rapid DOM changes
      setTimeout(() => {
        applyStylesToTarget();
      }, 50);
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

// Find elements that are already using CSS variables (most likely the target)
function findElementUsingCssVariables(): HTMLElement | null {
  const root = document.getElementById('storybook-root');
  if (!root) return null;

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: Element) => {
        if (node.id === 'storybook-root') return NodeFilter.FILTER_SKIP;
        
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

// Find the deepest meaningful element (elements with classes or that use CSS variables)
function findDeepestMeaningfulElement(): HTMLElement | null {
  const root = document.getElementById('storybook-root');
  if (!root) return null;

  let deepestElement: HTMLElement | null = null;
  let maxDepth = 0;

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: Element) => {
        if (node.id === 'storybook-root') return NodeFilter.FILTER_SKIP;
        
        const element = node as HTMLElement;
        
        // Consider any element with a class name as a potential component
        // (regardless of tag name - could be div, span, section, etc.)
        const hasClass = element.className.trim() !== '';
        const hasId = element.id !== '';
        
        if (hasClass || hasId) {
          // Calculate depth from storybook-root
          let depth = 0;
          let parent = element.parentElement;
          while (parent && parent.id !== 'storybook-root') {
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
