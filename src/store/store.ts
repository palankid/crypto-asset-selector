import { configureStore } from "@reduxjs/toolkit";
import { ratesApi } from "./rates.api";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer, // Add your slice reducers here
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
