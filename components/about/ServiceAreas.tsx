"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Plane,
  Mountain,
  Building2,
  Route,
  Navigation,
} from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Pune City",
    description:
      "Local taxi service across Pune including Hinjawadi, Aundh, Baner, Kothrud, Wakad, Kharadi and more.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "24×7 pickup and drop service for Pune International Airport with on-time arrivals.",
  },
  {
    icon: Route,
    title: "Outstation Trips",
    description:
      "Comfortable one-way and round-trip journeys to cities across Maharashtra.",
  },
  {
    icon: Mountain,
    title: "Tourist Destinations",
    description:
      "Travel to popular destinations such as Mahabaleshwar, Lonavala, Matheran and Panchgani.",
  },
];

const destinations = [
  "Pune",
  "Mumbai",
  "Nashik",
  "Shirdi",
  "Lonavala",
  "Mahabaleshwar",
  "Panchgani",
  "Kolhapur",
  "Satara",
  "Aurangabad",
  "Nagpur",
  "Goa",
];

export default function ServiceAreas() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Service Areas
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            We Travel Wherever You Need
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            From local city rides to long-distance journeys, we provide
            dependable transportation across Maharashtra and nearby states.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-yellow-500 transition"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-yellow-500/10 p-4">
                  <Icon className="text-yellow-400" size={34} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <div className="flex items-center gap-3">
            <Navigation className="text-yellow-400" size={30} />

            <h3 className="text-3xl font-bold text-white">
              Popular Destinations
            </h3>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {destinations.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-white"
              >
                <MapPin size={18} className="text-yellow-400" />
                {city}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}