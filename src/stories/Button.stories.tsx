import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from 'react';
import { Button } from "./Button";
import { css } from "storybook/internal/theming";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    cssVarsTarget: '.button',
    cssVars: {
      '--button-bg-color': {
        control: 'color',
        default: '#1ea7fd',
        description: 'Background color of the button'
      },
      '--button-text-color': {
        default: '#fff',
        description: 'Text color of the button'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Custom: Story = {
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#f80'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      }
    }
  }
};

export const CustomWithDecorator: Story = {
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#e60'
      },
      '--button-text-color': {
        value: 'ghostwhite'
      }
    }
  },
  decorators: [
    (Story) => {
      // This decorator is used to apply CSS variables to the story
      return <div style={{ display: 'grid', placeItems: 'center' }}><Story /></div>;
    }
  ]
};

// Example of conditional rendering - button appears/disappears based on toggle
export const CustomConditionalRender: Story = {
  render: () => {
    const [showButton, setShowButton] = useState(false);
    
    return (
      <div>
        <p>Click the toggle to show/hide the button. CSS variables will be applied automatically when the button appears.</p>
        <button 
          onClick={() => setShowButton(!showButton)}
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
        >
          {showButton ? 'Hide' : 'Show'} Button
        </button>
        {showButton && <Button />}
      </div>
    );
  },
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#ff6b6b'
      },
      '--button-text-color': {
        value: '#fff'
      }
    }
  }
};
