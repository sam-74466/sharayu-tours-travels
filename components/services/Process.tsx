"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPinned,
  BadgeCheck,
  CarTaxiFront,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contact Us",
    description:
      "Call us or send a WhatsApp message to book your ride anytime.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Share Trip Details",
    description:
      "Provide your pickup location, destination, date, time and passenger details.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Confirm Booking",
    description:
      "Receive your fare estimate, confirm the booking and pay the advance if required.",
  },
  {
    number: "04",
    icon: CarTaxiFront,
    title: "Enjoy Your Ride",
    description:
      "Our driver arrives on time so you can travel safely and comfortably.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Booking Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Book Your Cab in 4 Easy Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Booking with Sharayu Tours & Travels is quick, simple and completely transparent.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl border border-slate-800 bg-slate-950 p-8 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="absolute right-6 top-6 text-5xl font-extrabold text-slate-800">
                  {step.number}
                </div>

                <div className="mb-8 inline-flex rounded-2xl bg-yellow-500/10 p-4">
                  <Icon className="text-yellow-400" size={34} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}