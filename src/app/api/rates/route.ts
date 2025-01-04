import { NextRequest, NextResponse } from "next/server";

export const fetchMarketRates = async (ids: string) => {
  const params = new URLSearchParams({
    ids,
    vs_currencies: "usd",
    include_24hr_change: "true",
    precision: "4",
    _: Date.now().toString(),
  });
  const url = `${process.env.COINGECKO_BASE_URL}${process.env.COINGECKO_SIMPLE_PRICES}?${params}`;
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY ?? "",
    },
  };

  try {
    const result = await fetch(url, options);
    const message = await result.json();

    return { message, status: result.status };
  } catch (error) {
    return { error: (error as Error).message, status: 500 };
  }
};

export async function GET(request: NextRequest) {
  const assetIds = request.nextUrl.searchParams.get("ids") ?? "";

  const { message, status, error } = await fetchMarketRates(assetIds);

  return NextResponse.json({ message, error }, { status });
}
