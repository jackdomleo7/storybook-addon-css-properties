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
  
  // Immediately apply initial values from story parameters
  applyInitialValues();
  
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
      // Small debounce to prevent excessive calls but still be responsive
      setTimeout(() => {
        applyStylesToTarget();
      }, 10);
    }
  });

  docsObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
}

function applyInitialValues(): void {
  // Get CSS vars configuration from story parameters
  const cssVarsConfig = currentContext?.parameters?.cssVars;
  if (!cssVarsConfig) {
    return;
  }
  
  // Extract initial values from the configuration
  const initialStyles: Record<string, string> = {};
  Object.entries(cssVarsConfig).forEach(([key, config]: [string, any]) => {
    if (config && typeof config === 'object' && config.value !== undefined) {
      initialStyles[key] = config.value;
    }
  });
  
  // Store initial styles
  currentStyles = { ...currentStyles, ...initialStyles };
  
  // Apply styles immediately
  applyStylesToTarget();
  
  // For docs mode, also retry after delays since MDX components render asynchronously
  if (currentContext?.viewMode === 'docs') {
    setTimeout(() => applyStylesToTarget(), 100);
    setTimeout(() => applyStylesToTarget(), 300);
  }
  
  // Set up observers for DOM changes
  if (!observer) {
    setupMutationObserver();
  }
  if (currentContext?.viewMode === 'docs') {
    setupDocsModeMutationObserver();
  }
}

function applyStylesToTarget(): void {
  // Use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    const isDocsMode = currentContext?.viewMode === 'docs';
    const targetSelector = currentContext?.parameters?.cssVarsTarget;
    
    let elements: HTMLElement[] = [];
    
    if (isDocsMode) {
      // In docs mode, apply to story containers or user-specified targets
      const selector = targetSelector 
        ? `[data-docs-story] ${targetSelector}, .sb-story ${targetSelector}`
        : '[data-docs-story] > *, .sb-story > *';
      elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    } else {
      // For regular story mode
      const selector = targetSelector 
        ? `#storybook-root ${targetSelector}`
        : '#storybook-root > *';
      const element = document.querySelector<HTMLElement>(selector);
      if (element) elements = [element];
    }
    
    // Apply styles to all found elements
    elements.forEach(element => {
      Object.entries(currentStyles).forEach(([property, value]) => {
        if (value) {
          element.style.setProperty(property, value, isDocsMode ? 'important' : '');
        } else {
          element.style.removeProperty(property);
        }
      });
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
      // Small debounce to prevent excessive calls but still be responsive
      setTimeout(() => {
        applyStylesToTarget();
      }, 10);
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
