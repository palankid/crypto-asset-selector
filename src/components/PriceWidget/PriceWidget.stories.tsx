import type { Meta, StoryObj } from "@storybook/react";

import PriceWidget from "./PriceWidget";

const meta = {
  title: "components/PriceWidget",
  component: PriceWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PriceWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: "Last market price",
    price: "101,200.45",
  },
};

export const WithChangeIndicator: Story = {
  args: {
    price: "3,412.45",
    change: "-2.45%",
    changeValue: -2.45,
  },
  render: (args) => (
    <div className="space-y-4">
      <PriceWidget {...args} />
      <PriceWidget price="1,234.56" change="3.67%" changeValue={3.67} />
    </div>
  ),
};

export const AllFeatures: Story = {
  args: {
    label: "All features",
    price: "101,200.45",
    change: "12.57%",
  },
};
