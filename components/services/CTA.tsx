"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 py-24">

      {/* Background Effects */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/20 bg-white/10 p-12 backdrop-blur-xl"
        >

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
              Book Your Journey Today
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
              Safe, Comfortable & Reliable Travel
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Whether it's an airport transfer, local taxi, one-way journey,
              round trip or corporate travel, Sharayu Tours & Travels is ready
              to make your trip comfortable and hassle-free.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="/booking"
                className="flex items-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-lg font-semibold text-white transition hover:bg-black"
              >
                <CalendarCheck size={22} />
                Book Now
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:7385370690"
                className="flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={22} />
                Call Now
              </a>

              <a
                href="https://wa.me/917385370690"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-500"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}