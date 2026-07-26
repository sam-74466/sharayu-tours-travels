import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/about/hero";
import AboutCompany from "@/components/about/AboutCompany";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Stats from "@/components/about/Stats";
import Fleet from "@/components/about/Fleet";
import ServiceAreas from "@/components/about/ServiceAreas";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <AboutCompany />

      <MissionVision />

      <WhyChooseUs />

      <Stats />

      <Fleet />

      <ServiceAreas />

      <CTA />

      <Footer />
    </main>
  );
}