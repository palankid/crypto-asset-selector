import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ratesApi = createApi({
  reducerPath: "rates",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getRates: builder.query({
      query: (assetIds: string[]) => ({
        url: "/rates",
        method: "GET",
        params: { ids: assetIds.join(",") },
      }),
    }),
  }),
});

export const { useGetRatesQuery } = ratesApi;

export const subscribeRates = (assetIds: string[]) =>
  ratesApi.endpoints.getRates.initiate(assetIds, {
    subscriptionOptions: {
      pollingInterval: 10000,
    },
  });
