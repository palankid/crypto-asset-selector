import { CryptoAssetId, CryptoAsset, CryptoAssetSymbol } from "./types";

export const CryptoAssets: { [key in CryptoAssetSymbol]: CryptoAsset } = {
  [CryptoAssetSymbol.BTC]: {
    assetId: CryptoAssetId.BTC,
    symbol: CryptoAssetSymbol.BTC,
    name: "Bitcoin",
    precision: 2,
  },
  [CryptoAssetSymbol.ETH]: {
    assetId: CryptoAssetId.ETH,
    symbol: CryptoAssetSymbol.ETH,
    name: "Ethereum",
    precision: 2,
  },
  [CryptoAssetSymbol.ARB]: {
    assetId: CryptoAssetId.ARB,
    symbol: CryptoAssetSymbol.ARB,
    name: "Arbitrum",
    precision: 4,
  },
};
