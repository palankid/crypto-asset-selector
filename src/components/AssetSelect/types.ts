import { CryptoAssetId } from "@/definitions/types";

export interface AssetSelectItem {
  assetId: CryptoAssetId;
  label: string;
  description: string;
  lastPrice: number;
  change: number;
  precision: number;
}
