import type { Metadata } from "next";
import BookingHero from "@/components/booking/Hero";
import BookingForm from "@/components/booking/BookingForm";
import WhyBook from "@/components/booking/WhyBook";
import FAQ from "@/components/booking/FAQ";
import CTA from "@/components/booking/CTA";

export const metadata: Metadata = {
  title: "Book Taxi Online | Sharayu Tours & Travels",
  description:
    "Book local, airport, one-way, round-trip and outstation taxis online with Sharayu Tours & Travels. Fast, safe and affordable cab services in Pune and across Maharashtra.",
  keywords: [
    "Pune Taxi",
    "Cab Booking",
    "Airport Taxi",
    "One Way Cab",
    "Round Trip Taxi",
    "Outstation Taxi",
    "Pune Airport Cab",
    "Taxi Service Pune",
    "Cab Rental Pune",
    "Sharayu Tours",
    "Sharayu Tours & Travels",
  ],
  authors: [
    {
      name: "Sharayu Tours & Travels",
    },
  ],
  creator: "Sharayu Tours & Travels",
  publisher: "Sharayu Tours & Travels",
  openGraph: {
    title: "Book Taxi Online | Sharayu Tours & Travels",
    description:
      "Book reliable taxi services in Pune. Local, Airport, One Way and Outstation Cab Booking.",
    url: "https://sharayutours.com/booking",
    siteName: "Sharayu Tours & Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-booking.jpg",
        width: 1200,
        height: 630,
        alt: "Sharayu Tours & Travels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Taxi Online | Sharayu Tours & Travels",
    description:
      "Fast, Safe & Affordable Cab Booking in Pune and Maharashtra.",
    images: ["/og-booking.jpg"],
  },
};

export default function BookingPage() {
  return (
    <main className="bg-white">
      <BookingHero />

      <BookingForm />

      <WhyBook />

      <FAQ />

      <CTA />
    </main>
  );
}