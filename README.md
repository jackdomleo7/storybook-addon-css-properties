# Storybook Addon CSS Properties

Edit CSS properties defined in your component to see how stories react

[See example](https://jackdomleo7.github.io/storybook-addon-css-properties)

## Installation

Storybook compatibility:
- Storybook &lt;v8 → Unsupported
- Storybook v9 → storybook-addon-css-properties v0.x

First, install the package.

```sh
npm install --save-dev storybook-addon-css-properties
```

Then, register it as an addon in `.storybook/main.(j|t)s`.

```ts
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  // ...rest of config
  addons: [
    '@storybook/addon-docs'
    'storybook-addon-css-properties', // 👈 register the addon here
  ],
};

export default config;
```

## Usage

The primary way to use this addon is to define the `cssVars` parameter. You can do this the at the component level, as below, to affect all stories in the file, or you can do it for a single story.

```ts
// Button.stories.ts

// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    cssVars: {
      '--my-custom-var-1': {
        value: undefined, // Or don't specify
        control: 'text', // Default is "text" so this can be omitted
        default: '#1ea7fd',
        description: 'This CSS property will appear as the default'
      },
      '--my-custom-var-2': {
        value: '#000',
        control: 'color',
        default: '#fff',
        description: 'This CSS property will appear as #000, overriding the default'
      }
    }
  }
};

export default meta;

export const Custom: Story = {
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#f80' // You do not need to specify `control`, `default` or `description` again, but you can if you need to
      },
      '--button-text-color': {
        value: 'ghostwhite' // You do not need to specify `control`, `default` or `description` again, but you can if you need to
      }
    }
  }
};
```

`cssVars` is a key-value object that defines your component's CSS variables. The key is the name of the CSS property **exactly** as it appears in your code. The value is an object of configuration settings.

`value`: Set this to any value to set a default override value.

`control`: The type of the CSS property control - `"text"|"color"|"number"`.

`default`: The default value of the property (for documentation purposes only).

`description`: A short description of the CSS property.

### Advanced Configuration

For complex story structures where the addon can't automatically identify the correct element to apply CSS variables to, you can specify a target selector:

```ts
export const MyStory: Story = {
  parameters: {
    cssVarsTarget: '.my-component', // CSS selector to target within the story
    cssVars: {
      '--my-var': { value: 'red' }
    }
  }
};
```

The addon will automatically try to find the best element to apply CSS variables to, but the `cssVarsTarget` parameter gives you full control when needed.

### Conditionally Rendered Components

The addon automatically handles components that are conditionally rendered (e.g., components that show/hide based on state or user interaction). It uses a `MutationObserver` to watch for DOM changes and will automatically apply CSS variables to components that appear after the initial render.

This works seamlessly with:
- Toggle components that show/hide content
- Modal and popup components
- Components rendered after user interactions
- Lazy-loaded components

No additional configuration is needed - the addon will detect when new elements are added to the DOM and apply the appropriate CSS variables.

[See the example setup](./src/stories/Button.stories.ts)

_Why set CSS properties manually? Can't the addon detect them automatically?_

In theory, yes — but it's tricky.

- CSS properties can be set in multiple ways (HTML, JS, CSS), overridden, or include fallbacks. Automatic detection risks incorrect assumptions.
- Each project uses CSS differently. You may not want all properties exposed — e.g. `--brand-color` could stay fixed, while `--button-background` might be customizable.

Manual selection gives you control and flexibility, even if it takes a bit more effort.
