"use client";

import Image from "next/image";

interface LightboxProps {
  image: string;
  title: string;
  onClose: () => void;
}

export default function Lightbox({
  image,
  title,
  onClose,
}: LightboxProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
    >
      <div
        className="relative h-[80vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}