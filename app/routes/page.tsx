import type { Metadata } from "next";
import RoutesHero from "@/components/routes/RoutesHero";
import RoutesGrid from "@/components/routes/RoutesGrid";
import PopularDestinations from "@/components/routes/PopularDestinations";
import CTA from "@/components/booking/CTA";

export const metadata: Metadata = {
  title: "Popular Routes | Sharayu Tours & Travels",
  description:
    "Explore our popular taxi routes from Pune including Mumbai, Shirdi, Goa, Mahabaleshwar, Nashik and more.",
  keywords: [
    "Pune to Mumbai Taxi",
    "Pune to Shirdi Cab",
    "Pune to Goa Taxi",
    "Outstation Cab",
    "Taxi Routes Pune",
    "Sharayu Tours",
  ],
};

export default function RoutesPage() {
  return (
    <main className="bg-white">
      <RoutesHero />

      <RoutesGrid />

      <PopularDestinations />

      <CTA />
    </main>
  );
}