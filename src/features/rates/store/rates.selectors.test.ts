import { describe, test, expect } from "vitest";
import {
  defaultRatesValues,
  selectRatesData,
  selectSelectedAssetId,
} from "./rates.selectors";
import { RootState } from "@/store";
import { CryptoAssets } from "@/definitions";
import { Symbols } from "@/definitions/symbols";
import { CryptoAssetId } from "@/definitions/types";

describe("Rates Selectors", () => {
  const mockState: RootState = {
    rates: {
      selectedAsset: CryptoAssetId.BTC,
    },
    ratesApi: {} as never,
  };

  describe("selectRatesData", () => {
    const mockApiSlice = {
      [CryptoAssetId.BTC]: {
        usd: 50000,
        usd_24h_change: 5,
      },
    };

    test("should select the correct rates data", () => {
      const expectedRatesData = Object.entries(CryptoAssets).map(
        ([, cryptoAsset]) => ({
          assetId: cryptoAsset.assetId,
          label: `${cryptoAsset.symbol.toUpperCase()}-OPTIONS`,
          description: cryptoAsset.name,
          lastPrice:
            cryptoAsset.assetId === "bitcoin" ? "$50,000.00" : Symbols.NoValue,
          change:
            cryptoAsset.assetId === "bitcoin" ? "+5.00%" : Symbols.NoValue,
          changeValue: cryptoAsset.assetId === "bitcoin" ? 5 : 0,
        }),
      );

      const ratesData = selectRatesData.resultFunc(mockApiSlice);

      expect(ratesData).toEqual(expectedRatesData);
    });

    test("should select the default rates data", () => {
      const ratesData = selectRatesData.resultFunc({});

      expect(ratesData).toEqual(defaultRatesValues);
    });
  });

  describe("selectSelectedAssetId", () => {
    test("should select the correct selected asset id", () => {
      const selectedAssetId = selectSelectedAssetId(mockState);

      expect(selectedAssetId).toBe(CryptoAssetId.BTC);
    });
  });
});
