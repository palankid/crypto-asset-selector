"use client";

import { useEffect } from "react";

import { subscribeRates, useAppDispatch } from "@/store";
import { CryptoAssetIds } from "@/definitions";

const useRatesSubscription = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ratesSubscription = dispatch(subscribeRates(CryptoAssetIds));

    return () => {
      ratesSubscription.unsubscribe();
    };
  }, [dispatch]);
};

export default useRatesSubscription;
