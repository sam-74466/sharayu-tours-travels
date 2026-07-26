"use client";

import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 py-24">

      {/* Background Circles */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-white/20 bg-white/10 p-12 backdrop-blur-xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                Ready To Travel?
              </span>

              <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
                Book Your Next Ride Today
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/90">
                Airport transfers, outstation trips, local rides and family
                tours with transparent pricing and comfortable travel.
              </p>

            </div>

            {/* Right */}

            <div className="flex flex-col gap-5">

              <Link
                href="/booking"
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-5 text-lg font-semibold text-white transition hover:bg-black"
              >
                <ArrowRight size={22} />
                Book Online
              </Link>

              <a
                href="tel:7385370690"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-white px-8 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-black"
              >
                <Phone size={22} />
                Call : 7385370690
              </a>

              <a
                href="https://wa.me/917385370690"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-8 py-5 text-lg font-semibold text-white transition hover:bg-green-500"
              >
                <MessageCircle size={22} />
                WhatsApp Booking
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}