"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3, IndianRupee, ArrowRight } from "lucide-react";
import Link from "next/link";

const routes = [
  {
    from: "Pune",
    to: "Mumbai",
    distance: "150 km",
    duration: "3 - 4 Hours",
    fare: "₹2,200*",
  },
  {
    from: "Pune",
    to: "Shirdi",
    distance: "185 km",
    duration: "4 Hours",
    fare: "₹2,700*",
  },
  {
    from: "Pune",
    to: "Lonavala",
    distance: "65 km",
    duration: "1.5 Hours",
    fare: "₹1,000*",
  },
  {
    from: "Pune",
    to: "Mahabaleshwar",
    distance: "120 km",
    duration: "3 Hours",
    fare: "₹1,800*",
  },
  {
    from: "Pune",
    to: "Goa",
    distance: "450 km",
    duration: "8 - 9 Hours",
    fare: "₹6,500*",
  },
  {
    from: "Pune",
    to: "Airport",
    distance: "Local",
    duration: "As per traffic",
    fare: "₹100 + ₹14/km",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
            Popular Routes
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Most Booked Destinations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Explore our most frequently booked routes with transparent
            pricing and comfortable travel.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {routes.map((route, index) => (
            <motion.div
              key={route.to}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
            >
              <h3 className="text-2xl font-bold text-white">
                {route.from}
                <ArrowRight className="mx-2 inline text-yellow-400" size={20} />
                {route.to}
              </h3>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="text-yellow-400" size={18} />
                  {route.distance}
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Clock3 className="text-yellow-400" size={18} />
                  {route.duration}
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <IndianRupee className="text-yellow-400" size={18} />
                  Starting from {route.fare}
                </div>

              </div>

              <Link
                href="/booking"
                className="mt-8 inline-flex rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                Book Now
              </Link>
            </motion.div>
          ))}

        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          *Prices are indicative. Final fare depends on distance, tolls,
          parking, waiting time and travel schedule.
        </p>

      </div>
    </section>
  );
}