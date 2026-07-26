"use client";

import Image from "next/image";

interface GalleryCardProps {
  image: string;
  title: string;
}

export default function GalleryCard({
  image,
  title,
}: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl shadow-lg">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="bg-white p-5">

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

      </div>

    </div>
  );
}