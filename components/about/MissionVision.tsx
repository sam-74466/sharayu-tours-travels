"use client";

import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, reliable, affordable and comfortable transportation with exceptional customer service on every trip.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become one of Pune's most trusted tours and travels companies by delivering professional, transparent and customer-focused travel experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    description:
      "Safety, honesty, punctuality, customer satisfaction and transparent pricing are at the heart of everything we do.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Our Purpose
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Mission, Vision & Values
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Everything we do is guided by our commitment to providing a safe,
            dependable and premium travel experience for every customer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-yellow-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-yellow-500/10 p-4">
                  <Icon className="text-yellow-400" size={34} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}