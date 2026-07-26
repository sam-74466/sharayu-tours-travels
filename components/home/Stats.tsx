"use client";

import { motion } from "framer-motion";
import {
  Car,
  Users,
  MapPinned,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Car,
    value: "1000+",
    title: "Trips Completed",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    value: "500+",
    title: "Happy Customers",
    color: "text-blue-400",
  },
  {
    icon: MapPinned,
    value: "100+",
    title: "Destinations",
    color: "text-green-400",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Customer Rating",
    color: "text-orange-400",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">
            Our Achievement
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Trusted By Hundreds Of Travelers
          </h2>

          <p className="mt-4 text-slate-400">
            Professional taxi service across Pune and Maharashtra.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-500/30"
              >
                <div
                  className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.title}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}