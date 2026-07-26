import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/about/hero";
import AboutCompany from "@/components/about/AboutCompany";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <AboutCompany />

      <MissionVision />

      <WhyChooseUs />

      <Footer />
    </main>
  );
}