# Storybook Addon CSS Properties

Edit CSS properties defined in your component to see how stories react

[See example](https://jackdomleo7.github.io/storybook-addon-css-properties)

## Installation

```sh
npm install --save-dev storybook-addon-css-properties
```

Add to `.storybook/main.js`:

```js
export default {
  addons: ['storybook-addon-css-properties'],
};
```

> **Compatibility:** Storybook v9 only

## Usage

Define CSS variables in your story parameters:

```js
// Button.stories.js
export default {
  component: Button,
  parameters: {
    cssVars: {
      '--my-custom-var-1': {
        value: undefined, // This can be omitted if setting to undefined, or set to any string value
        control: 'text', // "text"|"color"|"number" - Default is "text" so this can be omitted
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

// Override values per story
export const Custom = {
  parameters: {
    cssVars: {
      '--button-bg-color': { value: '#f80' }
    }
  }
};
```

### Advanced Options

For complex story structures where the addon can't automatically identify the correct element to apply CSS variables to, you can specify a target selector:

**Custom target selector:**
```js
parameters: {
  cssVarsTarget: '.my-component', // Apply CSS vars to specific element
  cssVars: { '--my-var': { value: 'red' } }
}
```

---

> **Why manual configuration?** While automatic detection is possible, manual setup gives you control over which CSS properties to expose and avoids assumptions about your CSS architecture.
