import type { Meta, StoryObj } from "@storybook/react";

import Asset from "./Asset";
import { CryptoAssetId } from "@/definitions/types";

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
    assetId: CryptoAssetId.BTC,
    label: "BTC-Options",
    description: "Option Contracts",
  },
};

export const WithoutDescription: Story = {
  args: {
    assetId: CryptoAssetId.ETH,
    label: "ETH-Options",
  },
};

export const WithExtraStyles: Story = {
  args: {
    assetId: CryptoAssetId.ARB,
    label: "ARB-Options",
    iconClassName: "text-primary",
  },
};
