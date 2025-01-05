import { CryptoAssetId, CryptoAsset, CryptoAssetSymbol } from "./types";

export const CryptoAssets: { [key in CryptoAssetId]: CryptoAsset } = {
  [CryptoAssetId.BTC]: {
    assetId: CryptoAssetId.BTC,
    symbol: CryptoAssetSymbol.BTC,
    name: "Bitcoin",
    precision: 2,
  },
  [CryptoAssetId.ETH]: {
    assetId: CryptoAssetId.ETH,
    symbol: CryptoAssetSymbol.ETH,
    name: "Ethereum",
    precision: 2,
  },
  [CryptoAssetId.ARB]: {
    assetId: CryptoAssetId.ARB,
    symbol: CryptoAssetSymbol.ARB,
    name: "Arbitrum",
    precision: 4,
  },
};

export const CryptoAssetIds = Object.values(CryptoAssetId);
export const CryptoAssetSymbols = Object.values(CryptoAssetSymbol);
