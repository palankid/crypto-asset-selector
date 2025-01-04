"use client";

import { useEffect } from "react";

import { subscribeRates, useAppDispatch } from "@/store";

const useRatesSubscription = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ratesSubscription = dispatch(subscribeRates(["bitcoin", "ethereum"]));

    return () => {
      ratesSubscription.unsubscribe();
    };
  }, [dispatch]);
};

export default useRatesSubscription;
