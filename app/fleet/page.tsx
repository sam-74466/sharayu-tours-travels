import type { Metadata } from "next";
import FleetHero from "@/components/fleet/FleetHero";
import FleetGrid from "@/components/fleet/FleetGrid";
import BookingCTA from "@/components/fleet/BookingCTA";

export const metadata: Metadata = {
  title: "Our Fleet | Sharayu Tours & Travels",
  description:
    "Choose from our comfortable and well-maintained fleet of taxis for local, airport, and outstation travel.",
  keywords: [
    "Taxi Fleet",
    "Sedan",
    "SUV",
    "Innova Crysta",
    "Cab Booking Pune",
    "Sharayu Tours",
  ],
};

export default function FleetPage() {
  return (
    <main className="bg-white">
      <FleetHero />

      <FleetGrid />

      <BookingCTA />
    </main>
  );
}