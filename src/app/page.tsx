"use client";

import { RatesPage } from "@/features/rates";
import useRatesSubscription from "@/features/rates/useRatesSubscription";

export default function Home() {
  useRatesSubscription();

  return <RatesPage />;
}
