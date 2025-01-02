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
      {
        value: "BTC",
        label: "BTC-OPTIONS",
        description: "Option contracts",
        lastPrice: 102300,
        change: 2.3,
      },
      {
        value: "ETH",
        label: "ETH-OPTIONS",
        description: "Option contracts",
        lastPrice: 3264,
        change: -1.53,
      },
      {
        value: "ARB",
        label: "ARB-OPTIONS",
        description: "Option contracts",
        lastPrice: 0.7193,
        change: 0.26,
      },
    ],
  },
};
