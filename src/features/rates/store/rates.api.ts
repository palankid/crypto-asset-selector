import { ApiRoutes, PollingIntervals, RequestMethods } from "@/definitions/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSelector } from "reselect";

interface RatesData {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

interface RatesResponse {
  message: RatesData;
}

export const ratesApi = createApi({
  reducerPath: "ratesApi",
  baseQuery: fetchBaseQuery({ baseUrl: ApiRoutes.BASE }),
  endpoints: (builder) => ({
    getRates: builder.query<RatesData, string[]>({
      query: (assetIds: string[]) => ({
        url: ApiRoutes.RATES,
        method: RequestMethods.GET,
        params: { ids: assetIds.join(",") },
      }),
      serializeQueryArgs: () => ["getRates"],
      forceRefetch: () => true,
      transformResponse: ({ message }: RatesResponse) => {
        return message;
      },
    }),
  }),
});

export const { useGetRatesQuery } = ratesApi;

export const subscribeRates = (assetIds: string[]) =>
  ratesApi.endpoints.getRates.initiate(assetIds, {
    subscriptionOptions: {
      pollingInterval: PollingIntervals.RATES,
    },
  });

export const selectRatesApiData = createSelector(
  ratesApi.endpoints.getRates.select(["getRates"]),
  (result) => result?.data || {},
);
