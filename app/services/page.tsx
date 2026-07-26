import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";
import Process from "@/components/services/Process";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/services/CTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}