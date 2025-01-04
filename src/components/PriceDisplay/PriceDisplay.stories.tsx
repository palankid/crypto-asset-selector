import type { Meta, StoryObj } from "@storybook/react";

import PriceDisplay from "./PriceDisplay";

const meta = {
  title: "components/PriceDisplay",
  component: PriceDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PriceDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: "Last market price",
    price: 101200.45,
  },
};

export const WithChangeIndicator: Story = {
  args: {
    price: 3412.45,
    change: -2.45,
  },
  render: (args) => (
    <div className="space-y-4">
      <PriceDisplay {...args} />
      <PriceDisplay price={1234.56} change={3.67} />
    </div>
  ),
};

export const AllFeatures: Story = {
  args: {
    label: "All features",
    price: 101200.45,
    change: 12.57,
  },
};
