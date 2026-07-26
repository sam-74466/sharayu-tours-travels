"use client";

import Image from "next/image";
import { Award, ShieldCheck, Clock3, Car } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "Your safety is our highest priority on every journey.",
  },
  {
    icon: Clock3,
    title: "24×7 Service",
    description: "Available anytime for airport, local and outstation trips.",
  },
  {
    icon: Award,
    title: "Professional Service",
    description: "Reliable, punctual and customer-focused travel experience.",
  },
  {
    icon: Car,
    title: "Comfortable Cab",
    description: "Clean, well-maintained vehicle with a comfortable ride.",
  },
];

export default function AboutCompany() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
            <Image
              src="/images/about-cab.jpg"
              alt="Sharayu Tours & Travels"
              width={700}
              height={850}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-yellow-500 px-8 py-6 shadow-xl">
            <h3 className="text-4xl font-bold text-black">100%</h3>
            <p className="font-medium text-black">
              Customer Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Who We Are
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Trusted Travel Partner in Pune
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Sharayu Tours & Travels is committed to providing safe,
            affordable and reliable transportation services. We specialize
            in airport transfers, local city rides, one-way travel,
            round trips and outstation journeys across Maharashtra.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Our goal is simple — deliver a smooth, comfortable and
            hassle-free travel experience. Every booking is handled with
            professionalism, punctuality and complete transparency.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-yellow-500"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-yellow-500/10 p-3">
                    <Icon className="text-yellow-400" size={26} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}