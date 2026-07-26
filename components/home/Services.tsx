"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Map,
  Building2,
  Route,
  Clock3,
  Mountain,
} from "lucide-react";

const services = [
  {
    title: "Airport Transfer",
    description:
      "Reliable pickup and drop service for Pune Airport with on-time arrivals.",
    icon: Plane,
  },
  {
    title: "Outstation Trips",
    description:
      "Comfortable rides across Maharashtra for business and leisure travel.",
    icon: Map,
  },
  {
    title: "Corporate Travel",
    description:
      "Professional cab services for offices, meetings, and business travel.",
    icon: Building2,
  },
  {
    title: "One Way & Round Trip",
    description:
      "Affordable one-way and round-trip taxi bookings with transparent pricing.",
    icon: Route,
  },
  {
    title: "Hourly Rental",
    description:
      "Book a cab for a few hours or the entire day according to your schedule.",
    icon: Clock3,
  },
  {
    title: "Tour Packages",
    description:
      "Weekend trips, hill stations, temples, and family tour packages.",
    icon: Mountain,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Travel Solutions For Every Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Whether it's an airport pickup, business trip, family vacation,
            or outstation travel, Sharayu Tours & Travels has you covered.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400 transition group-hover:bg-yellow-500 group-hover:text-black">

                  <Icon size={32} />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <button className="mt-8 rounded-full border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
                  Learn More
                </button>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}