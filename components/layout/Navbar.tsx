"use client";

import Link from "next/link";
import { Phone, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link href="/">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Sharayu
            </h1>
            <p className="text-xs text-yellow-400 tracking-widest">
              TOURS & TRAVELS
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/services">Services</Link>

          <Link href="/routes">Routes</Link>

          <Link href="/gallery">Gallery</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:7385370690"
            className="flex items-center gap-2"
          >
            <Phone size={18} />
            7385370690
          </a>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold">
            Book Ride
          </button>

        </div>

        <button className="lg:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}