import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: undefined,
        control: 'color',
        description: 'Background color of the button'
      },
      '--button-text-color': {
        value: undefined,
        control: 'color',
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
        value: '#f80',
        control: 'color'
      },
      '--button-text-color': {
        value: 'ghostwhite',
        control: 'color'
      }
    }
  }
};
