import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BookingCard from "@/components/home/BookingCard";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import PopularRoutes from "@/components/home/PopularRoutes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Fleet from "@/components/home/Fleet";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/shared/FloatingButtons";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <BookingCard />
      <Stats />
      <Services />
      <PopularRoutes />
      <WhyChooseUs />
      <Fleet />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}