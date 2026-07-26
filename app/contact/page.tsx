import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import CTA from "@/components/booking/CTA";

export const metadata: Metadata = {
  title: "Contact Us | Sharayu Tours & Travels",
  description:
    "Contact Sharayu Tours & Travels for taxi booking, airport transfers, local cabs, outstation trips, and tour packages in Pune.",
  keywords: [
    "Contact Sharayu Tours",
    "Taxi Pune Contact",
    "Cab Booking Pune",
    "Airport Taxi Pune",
    "Outstation Taxi",
    "Pune Taxi Service",
  ],
  openGraph: {
    title: "Contact Us | Sharayu Tours & Travels",
    description:
      "Get in touch with Sharayu Tours & Travels for reliable cab services in Pune and across Maharashtra.",
    url: "https://sharayutours.com/contact",
    siteName: "Sharayu Tours & Travels",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </section>

      <GoogleMap />

      <CTA />
    </main>
  );
}