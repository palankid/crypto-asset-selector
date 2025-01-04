"use client";

import { AssetSelect } from "@/components/AssetSelect";
import { CryptoAssetId } from "@/constants/types";
import useRatesSubscription from "@/hooks/useRatesSubscription";

export default function Home() {
  const items = [
    {
      symbol: CryptoAssetId.BTC,
      label: "One",
      description: "Bitcoin",
      lastPrice: 1000,
      change: 0.1,
    },
    {
      symbol: CryptoAssetId.ETH,
      label: "Two",
      description: "Ethereum",
      lastPrice: 2000,
      change: 0.2,
    },
  ];

  useRatesSubscription();

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-slate-200 p-8 pb-20 sm:p-20">
      <p className="font-sans">sdfsdf</p>
      <div className="w-72">
        <AssetSelect options={items} />
      </div>
      <p className="font-inter">sdfsdf 2</p>
      <p className="font-spacegrotesk">sdfsdf 3</p>
      <p className="font-aeonikpro">sdfsdf 3</p>
    </div>
  );
}
