"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Car,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function BookingCard() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");

  return (
    <div className="w-[420px] rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

      {/* Heading */}

      <div className="mb-8">

        <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
          Quick Booking
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Book Your Ride
        </h2>

        <p className="mt-2 text-sm text-slate-300">
          Fast, safe and comfortable travel anywhere in Maharashtra.
        </p>

      </div>

      {/* Pickup */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Pickup Location
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">

          <MapPin
            className="mr-3 text-yellow-400"
            size={18}
          />

          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            type="text"
            placeholder="Enter Pickup Location"
            className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
          />

        </div>

      </div>

      {/* Destination */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Destination
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">

          <MapPin
            className="mr-3 text-yellow-400"
            size={18}
          />

          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Enter Destination"
            className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
          />

        </div>

      </div>

      {/* Date */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Travel Date
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">

          <Calendar
            className="mr-3 text-yellow-400"
            size={18}
          />

          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-transparent text-white outline-none"
          />

        </div>

      </div>

      {/* Vehicle */}

      <div className="mb-7">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Vehicle
        </label>

        <div className="flex items-center rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">

          <Car
            className="mr-3 text-yellow-400"
            size={18}
          />

          <select className="w-full bg-transparent text-white outline-none">

            <option className="text-black">
              Sedan
            </option>

          </select>

        </div>

      </div>

      {/* Price Info */}

      <div className="mb-7 rounded-2xl bg-yellow-500/10 p-5 border border-yellow-500/20">

        <div className="flex justify-between">

          <span className="text-slate-300">
            Base Fare
          </span>

          <span className="font-bold text-yellow-400">
            ₹100
          </span>

        </div>

        <div className="mt-3 flex justify-between">

          <span className="text-slate-300">
            Per KM
          </span>

          <span className="font-bold text-yellow-400">
            ₹14/km
          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="space-y-4">

        <Link
          href="/booking"
          className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 py-4 font-semibold text-black transition hover:bg-yellow-400"
        >
          Check Availability

          <ArrowRight size={18} />

        </Link>

        <a
          href="tel:7385370690"
          className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
        >
          <Phone size={18} />

          Call 7385370690

        </a>

      </div>

      {/* Footer */}

      <p className="mt-6 text-center text-xs text-slate-500">
        Toll, parking and waiting charges are additional.
      </p>

    </div>
  );
}