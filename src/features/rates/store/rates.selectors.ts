import { createSelector } from "reselect";
import { selectRatesApiData } from "./rates.api";
import { CryptoAssets } from "@/definitions";
import { formatCurrency, formatPercentage } from "@/utils/formatters";
import { Symbols } from "@/definitions/symbols";
import { RootState } from "@/store";

export const defaultRatesValues = Object.entries(CryptoAssets).map(
  ([, cryptoAsset]) => ({
    assetId: cryptoAsset.assetId,
    label: `${cryptoAsset.symbol.toUpperCase()}-OPTIONS`,
    description: cryptoAsset.name,
    lastPrice: Symbols.NoValue,
    change: Symbols.NoValue,
    changeValue: 0,
  }),
);

export const selectRatesData = createSelector(
  [selectRatesApiData],
  (selectedRates) => {
    if (!Object.keys(selectedRates).length) return defaultRatesValues;

    return defaultRatesValues.map((defaultValues) => {
      const ratesUpdate = selectedRates?.[defaultValues.assetId];

      if (!ratesUpdate) return defaultValues;

      const { precision } = CryptoAssets[defaultValues.assetId];

      return {
        ...defaultValues,
        lastPrice: formatCurrency(ratesUpdate.usd, { precision }),
        change: formatPercentage(ratesUpdate.usd_24h_change, 2),
        changeValue: ratesUpdate.usd_24h_change,
      };
    });
  },
);

export const selectSelectedAssetId = (store: RootState) =>
  store.rates.selectedAsset;
