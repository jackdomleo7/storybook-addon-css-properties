import type { Renderer, DecoratorFunction } from "storybook/internal/types";
import { useChannel } from "storybook/preview-api";
import { EVENTS } from "./constants";

export const withRoundTrip: DecoratorFunction<Renderer> = (storyFn) => {
  useChannel({
    [EVENTS.REQUEST]: (styles: Record<string, string>) => {
      const rootElement = document.querySelector<HTMLElement>('#storybook-root > *');
      if (!rootElement) return;

      Object.entries(styles).forEach(([property, value]) => {
        if (value) {
          rootElement.style.setProperty(property, value);
        } else {
          rootElement.style.removeProperty(property);
        }
      });
    }
  });

  return storyFn();
};
