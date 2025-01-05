import { describe, test, expect } from "vitest";
import { ratesSliceReducer, changeSelectedAssetId } from "./rates.slice";
import { CryptoAssetId } from "@/definitions/types";

describe("Rates Slice", () => {
  const initialState = { selectedAsset: CryptoAssetId.BTC };

  test("should return the initial state", () => {
    const state = ratesSliceReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });

  test("should handle changeSelectedAssetId", () => {
    const newState = ratesSliceReducer(
      initialState,
      changeSelectedAssetId(CryptoAssetId.ETH),
    );
    expect(newState.selectedAsset).toBe(CryptoAssetId.ETH);
  });
});
