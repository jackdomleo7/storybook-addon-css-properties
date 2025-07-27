# Storybook Addon CSS Properties

Edit CSS properties defined in your component to see how stories react

[See example](https://jackdomleo7.github.io/storybook-addon-css-properties)

## Installation

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
    myAddon: {
      cssVars: {
        '--my-custom-var-1': {
          value: undefined,
          type: 'text',
          description: 'This CSS property will appear as the default'
        },
        '--my-custom-var-2': {
          value: '#000',
          type: 'color',
          description: 'This CSS property will appear as #000, overriding the default'
        }
      }
    }
  }
};

export default meta;
```

`cssVars` is a key-value object that defines your component's CSS variables. The key is the name of the CSS property **exactly** as it appears in your code. The value is an object of configuration settings.

`value`: Set this to `undefined` to use the default value and simply register the CSS property to Storybook. This is necessary otherwise Storybook won't show the CSS property in the control panel. Or you can set this to any value to set a default override value.

`type`: The type of the CSS property - `"text"|"color"|"number"`. This will dictate which input will show in the control panel. If `"color"` is chosen, but the provided value is not a valid hexadecimal, RGB or HSL value, this will default back to `"text"`. NOTE: Keyword colours are not supported with `"color"`, use `"text"` instead.

`description`: A short description of the CSS property.

[See the example setup](./src/stories/Button.stories.ts)