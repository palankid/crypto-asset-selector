import type { Meta, StoryObj } from "@storybook/react";

import Asset from "./Asset";

const meta = {
  title: "components/Asset",
  component: Asset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Asset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescription: Story = {
  args: {
    symbol: "BTC",
    label: "BTC-Options",
    description: "Option Contracts",
  },
};

export const WithoutDescription: Story = {
  args: {
    symbol: "ETH",
    label: "ETH-Options",
  },
};

export const WithExtraStyles: Story = {
  args: {
    symbol: "ARB",
    label: "ARB-Options",
    iconClassName: "text-primary",
  },
};
