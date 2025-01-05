import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { ratesApi } from "@/features/rates/store/rates.api";
import { ratesSliceReducer } from "@/features/rates/store/rates.slice";

export const store = configureStore({
  reducer: {
    rates: ratesSliceReducer,
    [ratesApi.reducerPath]: ratesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ratesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
