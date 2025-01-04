import { CryptoAssetId } from "@/constants/types";

export interface AssetSelectItem {
  symbol: CryptoAssetId;
  label: string;
  description: string;
  lastPrice: number;
  change: number;
}
