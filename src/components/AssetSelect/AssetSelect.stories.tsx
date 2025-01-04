import type { Meta, StoryObj } from "@storybook/react";

import AssetSelect from "./AssetSelect";
import { CryptoAssetId } from "@/constants/types";

const meta = {
  title: "components/AssetSelect",
  component: AssetSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AssetSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    symbol: CryptoAssetId.BTC,
    label: "BTC-OPTIONS",
    description: "Option contracts",
    lastPrice: 102300,
    change: 2.3,
  },
  {
    symbol: CryptoAssetId.ETH,
    label: "ETH-OPTIONS",
    description: "Option contracts",
    lastPrice: 3264,
    change: -1.53,
  },
  {
    symbol: CryptoAssetId.ARB,
    label: "ARB-OPTIONS",
    description: "Option contracts",
    lastPrice: 0.7193,
    change: 0.26,
  },
];

export const NotSelected: Story = {
  args: {
    options,
  },
};

export const Selected: Story = {
  args: {
    options,
    selected: options[1],
  },
};
