"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";
import BookingCard from "./BookingCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

      {/* Decorative Blurs */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-yellow-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-16 px-6 py-24">

        {/* LEFT SIDE */}

        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400"
          >
            🚖 Premium Cab Service • Pune
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Travel With

            <span className="block text-yellow-400">
              Comfort &
              Luxury
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Sharayu Tours & Travels provides premium taxi services for
            airport transfers, local rides, corporate travel and
            outstation journeys with transparent pricing and trusted
            service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Book Now

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/fare-calculator"
              className="rounded-full border border-white/20 px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Calculate Fare
            </Link>

          </motion.div>

          {/* FEATURES */}

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

              <ShieldCheck
                className="mb-3 text-yellow-400"
                size={30}
              />

              <h3 className="font-semibold text-white">
                Safe Journey
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Verified driver and secure travel experience.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

              <Clock3
                className="mb-3 text-yellow-400"
                size={30}
              />

              <h3 className="font-semibold text-white">
                24×7 Available
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Anytime pickup for local and outstation rides.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">

              <Star
                className="mb-3 text-yellow-400"
                size={30}
              />

              <h3 className="font-semibold text-white">
                Top Rated
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Reliable service with transparent pricing.
              </p>

            </div>

          </div>

          {/* STATS */}

          <div className="mt-16 flex flex-wrap gap-10">

            <div>

              <h2 className="text-4xl font-bold text-yellow-400">
                1000+
              </h2>

              <p className="text-slate-400">
                Trips Completed
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-yellow-400">
                500+
              </h2>

              <p className="text-slate-400">
                Happy Customers
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-yellow-400">
                24×7
              </h2>

              <p className="text-slate-400">
                Support
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .5 }}
          className="hidden lg:block"
        >
          <BookingCard />
        </motion.div>

      </div>

    </section>
  );
}