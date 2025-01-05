export enum CryptoAssetId {
  BTC = "bitcoin",
  ETH = "ethereum",
  ARB = "arbitrum",
}

export enum CryptoAssetSymbol {
  BTC = "btc",
  ETH = "eth",
  ARB = "arb",
}

export type CryptoAsset = {
  assetId: CryptoAssetId;
  symbol: CryptoAssetSymbol;
  name: string;
  precision: number;
};
