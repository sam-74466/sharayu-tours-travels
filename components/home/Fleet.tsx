"use client";

import { motion } from "framer-motion";
import {
  Car,
  Users,
  Briefcase,
  Snowflake,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const features = [
  "Professional Driver",
  "Air Conditioned",
  "Clean & Sanitized",
  "Comfortable Seating",
  "Transparent Pricing",
  "Available 24×7",
];

export default function Fleet() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
              Our Vehicle
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">
              Premium Sedan
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Travel comfortably with our well-maintained premium sedan,
              ideal for airport transfers, business trips, family travel,
              and outstation journeys across Maharashtra.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <Users className="text-yellow-400" />
                <span>5 Passengers</span>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-yellow-400" />
                <span>2 Large Bags</span>
              </div>

              <div className="flex items-center gap-3">
                <Snowflake className="text-yellow-400" />
                <span>Air Conditioned</span>
              </div>

              <div className="flex items-center gap-3">
                <Car className="text-yellow-400" />
                <span>Comfortable Ride</span>
              </div>

            </div>

            <div className="mt-10 space-y-3">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-green-400"
                    size={20}
                  />

                  <span>{feature}</span>
                </div>
              ))}

            </div>

            <Link
              href="/booking"
              className="mt-12 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Book This Cab
            </Link>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">

              <div className="text-center">

                <Car
                  size={120}
                  className="mx-auto text-yellow-400"
                />

                <h3 className="mt-6 text-3xl font-bold text-white">
                  Your Sedan Photo
                </h3>

                <p className="mt-3 text-slate-400">
                  Replace this placeholder with your actual cab image
                  inside <code>public/images/</code>.
                </p>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}