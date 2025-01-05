import { CryptoAssetId } from "@/definitions/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RatesSlice {
  selectedAsset: CryptoAssetId;
}

const initialState = { selectedAsset: CryptoAssetId.BTC } as RatesSlice;

const ratesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    changeSelectedAssetId: (state, action: PayloadAction<CryptoAssetId>) => {
      state.selectedAsset = action.payload;
    },
  },
});

const { reducer } = ratesSlice;

export const { changeSelectedAssetId } = ratesSlice.actions;
export { reducer as ratesSliceReducer };
