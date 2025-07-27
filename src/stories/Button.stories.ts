import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
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
  },
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
