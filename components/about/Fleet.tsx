"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "5 Passenger Capacity",
  },
  {
    icon: Briefcase,
    title: "Spacious Luggage Space",
  },
  {
    icon: Snowflake,
    title: "Air Conditioned",
  },
  {
    icon: Fuel,
    title: "Fuel Efficient",
  },
  {
    icon: ShieldCheck,
    title: "Regularly Maintained",
  },
  {
    icon: CheckCircle2,
    title: "Clean & Sanitized",
  },
];

export default function Fleet() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Our Vehicle
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Comfortable Travel for Every Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Our clean, comfortable and well-maintained vehicle is ideal for
            airport transfers, local travel, business trips and outstation
            journeys across Maharashtra.
          </p>

        </div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-3xl border border-slate-800">

              <Image
                src="/images/fleet/car.jpg"
                alt="Sharayu Tours & Travels Cab"
                width={900}
                height={600}
                className="w-full object-cover"
                priority
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl font-bold text-white">
              Premium 5-Seater Cab
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              We focus on quality instead of quantity. Our vehicle is
              professionally maintained, cleaned before trips and driven with
              safety as the highest priority.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <div className="rounded-xl bg-yellow-500/10 p-3">
                      <Icon className="text-yellow-400" size={24} />
                    </div>

                    <span className="font-medium text-white">
                      {item.title}
                    </span>
                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}