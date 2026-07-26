"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    title: "Premium Sedan",
  },
  {
    src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    title: "Comfortable Journey",
  },
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
    title: "Outstation Trips",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    title: "Airport Transfer",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    title: "Family Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
    title: "Luxury Ride",
  },
];

export default function Gallery() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-semibold text-yellow-400">
            Gallery
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Travel Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Explore our premium travel experience with comfortable rides,
            professional service, and memorable journeys.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative h-72 w-full">

                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  unoptimized
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-white">
                  {image.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}