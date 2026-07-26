"use client";

import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}

      <a
        href="https://wa.me/917385370690"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle size={30} />
      </a>

      {/* Call */}

      <a
        href="tel:7385370690"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-black shadow-2xl transition hover:scale-110"
      >
        <Phone size={28} />
      </a>

      {/* Scroll To Top */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-white shadow-xl transition hover:bg-slate-700"
        >
          <ChevronUp size={26} />
        </button>
      )}
    </>
  );
}