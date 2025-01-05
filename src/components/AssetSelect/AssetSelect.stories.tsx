import type { Meta, StoryObj } from "@storybook/react";

import AssetSelect from "./AssetSelect";
import { CryptoAssetId } from "@/definitions/types";

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
    assetId: CryptoAssetId.BTC,
    label: "BTC-OPTIONS",
    description: "Option contracts",
    lastPrice: "102,300.23",
    change: "2.3%",
    changeValue: 2.3,
  },
  {
    assetId: CryptoAssetId.ETH,
    label: "ETH-OPTIONS",
    description: "Option contracts",
    lastPrice: "3,264.11",
    change: "-1.53%",
    changeValue: -1.53,
  },
  {
    assetId: CryptoAssetId.ARB,
    label: "ARB-OPTIONS",
    description: "Option contracts",
    lastPrice: "0.7193",
    change: "0.26%",
    changeValue: 0.26,
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
    selected: options[1].assetId,
  },
};
