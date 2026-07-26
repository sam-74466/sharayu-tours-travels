"use client";

import { formatCurrency } from "@/utils/formatCurrency";

interface FareEstimateProps {
  distance?: number;
  total?: number;
  advance?: number;
  baseFare?: number;
  distanceFare?: number;
  toll?: number;
  parking?: number;
  waiting?: number;
  nightCharge?: number;
}

export default function FareEstimate({
  distance = 0,
  total = 0,
  advance = 0,
  baseFare = 0,
  distanceFare = 0,
  toll = 0,
  parking = 0,
  waiting = 0,
  nightCharge = 0,
}: FareEstimateProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Estimated Fare
      </h2>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span>Distance</span>
          <span>{distance.toFixed(1)} km</span>
        </div>

        <div className="flex justify-between">
          <span>Base Fare</span>
          <span>{formatCurrency(baseFare)}</span>
        </div>

        <div className="flex justify-between">
          <span>Distance Fare</span>
          <span>{formatCurrency(distanceFare)}</span>
        </div>

        <div className="flex justify-between">
          <span>Toll</span>
          <span>{formatCurrency(toll)}</span>
        </div>

        <div className="flex justify-between">
          <span>Parking</span>
          <span>{formatCurrency(parking)}</span>
        </div>

        <div className="flex justify-between">
          <span>Waiting</span>
          <span>{formatCurrency(waiting)}</span>
        </div>

        <div className="flex justify-between">
          <span>Night Charge</span>
          <span>{formatCurrency(nightCharge)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>

        <div className="flex justify-between text-green-600 font-semibold">
          <span>20% Advance</span>
          <span>{formatCurrency(advance)}</span>
        </div>

      </div>

      <p className="mt-5 text-xs text-slate-500">
        * Final fare may vary depending on actual route,
        tolls, parking, waiting time, and additional
        requirements.
      </p>
    </div>
  );
}