import { createSelector } from "reselect";
import { selectRatesApiData } from "./rates.api";
import { CryptoAssetId } from "@/definitions/types";
import { CryptoAssets } from "@/definitions";

export const selectRatesData = createSelector(
  [selectRatesApiData],
  (selectedRates) => {
    return Object.entries(selectedRates).map(([id, data]) => {
      const assetId = id as CryptoAssetId;
      const cryptoAsset = CryptoAssets[assetId];
      const precision = cryptoAsset.precision;

      return {
        assetId,
        label: `${cryptoAsset.symbol.toUpperCase()}-OPTIONS`,
        description: cryptoAsset.name,
        lastPrice: data.usd,
        change: data.usd_24h_change,
        precision,
      };
    });
  },
);
