import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
  title: "components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { value: "1", label: "BTC-OPTIONS" },
      { value: "2", label: "ETH-OPTIONS" },
      { value: "3", label: "ARB-OPTIONS" },
    ],
  },
};
