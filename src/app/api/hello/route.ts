import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const response = NextResponse.json(
    { message: new Date().toLocaleString() },
    { status: 200 },
  );

  response.headers.set(
    "Cache-Control",
    "stale-while-revalidate=60, max-age=30",
  );

  return response;
}
