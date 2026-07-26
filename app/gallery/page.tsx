import type { Metadata } from "next";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTA from "@/components/booking/CTA";

export const metadata: Metadata = {
  title: "Gallery | Sharayu Tours & Travels",
  description:
    "Browse our gallery featuring our fleet, airport transfers, tours, happy customers, and memorable travel experiences.",
  keywords: [
    "Taxi Gallery",
    "Cab Images",
    "Pune Taxi",
    "Airport Taxi",
    "Sharayu Tours",
    "Travel Gallery",
  ],
};

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <GalleryHero />

      <GalleryGrid />

      <CTA />
    </main>
  );
}