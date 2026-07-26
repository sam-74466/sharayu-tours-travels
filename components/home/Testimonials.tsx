"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Patil",
    location: "Pune",
    review:
      "Excellent service! The cab was clean, arrived on time, and the journey was very comfortable. Highly recommended.",
  },
  {
    name: "Sneha Kulkarni",
    location: "Mumbai",
    review:
      "Very professional driver with transparent pricing. Our Pune to Mumbai trip was smooth and stress-free.",
  },
  {
    name: "Amit Deshmukh",
    location: "Nashik",
    review:
      "Booked for a family trip. Comfortable ride, polite driver, and punctual service. Will book again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
            Customer Reviews
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            We are proud to provide reliable, comfortable and affordable taxi
            services across Maharashtra.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}