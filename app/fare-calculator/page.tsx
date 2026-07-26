import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/fare/Hero";
import Calculator from "@/components/fare/Calculator";
import PricingRules from "@/components/fare/PricingRules";
import CTA from "@/components/fare/CTA";

export default function FareCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Calculator />
      <PricingRules />
      <CTA />
      <Footer />
    </main>
  );
}