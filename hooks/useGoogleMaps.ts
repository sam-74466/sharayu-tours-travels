"use client";

import { useEffect, useState } from "react";

interface DistanceResult {
  distance: number;
  duration: number;
}

export default function useGoogleMaps(
  pickup: string,
  destination: string
) {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<DistanceResult>({
      distance: 0,
      duration: 0,
    });

  useEffect(() => {
    if (!pickup || !destination) return;

    async function fetchDistance() {
      try {
        setLoading(true);

        // Placeholder until Google Maps API is connected
        setTimeout(() => {
          setResult({
            distance: 0,
            duration: 0,
          });

          setLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchDistance();
  }, [pickup, destination]);

  return {
    loading,
    distance: result.distance,
    duration: result.duration,
  };
}