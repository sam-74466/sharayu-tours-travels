"use client";

import { useMemo } from "react";
import { calculateFare } from "@/lib/fare";

interface FareOptions {
  distance: number;
  toll?: number;
  parking?: number;
  waitingMinutes?: number;
  night?: boolean;
}

export default function useFareCalculator({
  distance,
  toll = 0,
  parking = 0,
  waitingMinutes = 0,
  night = false,
}: FareOptions) {
  const fare = useMemo(() => {
    return calculateFare(
      distance,
      toll,
      parking,
      waitingMinutes,
      night
    );
  }, [
    distance,
    toll,
    parking,
    waitingMinutes,
    night,
  ]);

  return fare;
}