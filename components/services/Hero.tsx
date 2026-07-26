"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CarTaxiFront } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-28">

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">
            <CarTaxiFront className="text-yellow-400" size={40} />
          </div>

          <span className="mt-8 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Premium Travel Services
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white md:text-7xl">
            Our
            <span className="block text-yellow-400">
              Services
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Sharayu Tours & Travels provides reliable transportation
            solutions including airport transfers, local taxi,
            outstation travel, one-way trips, round trips and
            corporate travel with professional service and
            transparent pricing.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 text-slate-400">

            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>

            <ChevronRight size={18} />

            <span className="text-yellow-400">
              Services
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}