export enum ApiRoutes {
  COINGECKO_BASE = "https://api.coingecko.com/api/v3",
  COINGECKO_RATES = "/simple/price",
  BASE = "/api",
  RATES = "/rates",
}

export enum PollingIntervals {
  RATES = 20_000,
}

export enum RequestMethods {
  GET = "GET",
}
