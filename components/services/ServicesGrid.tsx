"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Car,
  Route,
  RefreshCw,
 Briefcase,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop service with on-time arrivals and departures.",
    features: ["24×7 Service", "Flight Tracking", "Doorstep Pickup"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Car,
    title: "Local Taxi",
    description:
      "Comfortable local rides anywhere in Pune for shopping, office, hospitals and daily travel.",
    features: ["Hourly Booking", "City Rides", "Clean Vehicle"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Route,
    title: "One Way Trips",
    description:
      "Affordable one-way travel with transparent pricing and no unnecessary return fare.",
    features: ["Save Money", "Flexible Timing", "Safe Travel"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: RefreshCw,
    title: "Round Trips",
    description:
      "Book round-trip journeys for business meetings, vacations or family tours.",
    features: ["Waiting Option", "Return Booking", "Best Rates"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Professional transportation for meetings, executives and company travel requirements.",
    features: ["Professional", "GST Invoice", "Business Travel"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: MapPinned,
    title: "Outstation Trips",
    description:
      "Travel comfortably to destinations across Maharashtra and nearby states.",
    features: ["One Way", "Round Trip", "Tour Packages"],
    color: "from-red-500 to-orange-500",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Premium Travel Services
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            From airport transfers to long-distance travel, we provide reliable,
            safe and comfortable transportation for every journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-4`}
                >
                  <Icon size={34} className="text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href="/booking"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
                >
                  Book Now
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}