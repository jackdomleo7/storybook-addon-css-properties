import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from 'react';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    cssVarsTarget: '.button',
    cssVars: {
      '--button-bg-color': {
        control: 'color',
        default: '#1EA7FD',
        description: 'Background color of the button'
      },
      '--button-text-color': {
        default: '#FFF',
        description: 'Text color of the button'
      },
      'Colors': {
        '--button-hover-bg': {
          control: 'color',
          default: '#0D7DC1',
          description: 'Background color when hovered'
        },
        '--button-hover-text-color': {
          control: 'color',
          default: 'var(--button-text-color)',
          description: 'Text color when hovered'
        }
      },
      'Layout': {
        '--button-padding': {
          default: '0.5em 1.5em',
          description: 'Padding around the button text'
        },
        '--button-border-radius': {
          default: '3em',
          description: 'Corner radius of the button'
        }
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
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#e70'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '15px 30px'
        },
        '--button-border-radius': {
          value: '8px'
        }
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
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#c50'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '12px 24px'
        },
        '--button-border-radius': {
          value: '12px'
        }
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
      },
      'Colors': {
        '--button-hover-bg': {
          value: '#ff5252'
        }
      },
      'Layout': {
        '--button-padding': {
          value: '8px 16px'
        },
        '--button-border-radius': {
          value: '20px'
        }
      }
    }
  }
};
