import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    cssVars: {
      '--button-bg-color': {
        value: '#f00',
        type: 'color',
        description: 'Background color of the button'
      },
      '--button-text-color': {
        value: 'dodgerblue',
        type: 'color'
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {};
