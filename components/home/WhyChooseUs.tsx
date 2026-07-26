"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  Car,
  MapPinned,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Safe & Secure Travel",
    description:
      "Experienced driver with a focus on passenger safety and comfort.",
    icon: ShieldCheck,
  },
  {
    title: "24×7 Service",
    description:
      "Available day and night for local, airport and outstation trips.",
    icon: Clock3,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Base fare, distance and extra charges are clearly explained.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Clean Premium Sedan",
    description:
      "Well-maintained, air-conditioned sedan with comfortable seating.",
    icon: Car,
  },
  {
    title: "Local & Outstation",
    description:
      "Travel anywhere in Maharashtra with flexible one-way and round-trip options.",
    icon: MapPinned,
  },
  {
    title: "Quick Support",
    description:
      "Direct phone and WhatsApp support before and during your journey.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Why Travel With Sharayu Tours & Travels?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            We focus on safety, comfort, punctuality and transparent pricing,
            making every journey reliable and stress-free.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}