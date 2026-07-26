import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-black py-24">

      <div className="absolute inset-0">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <h1 className="text-5xl font-extrabold text-white md:text-6xl">
          Contact
          <span className="block text-yellow-400">
            Sharayu Tours & Travels
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We're available 24×7 to help you with cab bookings,
          airport transfers and outstation trips.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-white">

          <div className="flex items-center gap-3">
            <Phone className="text-yellow-400" />
            <span>+91 7385370690</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-400" />
            <span>Aundh, Pune</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-yellow-400" />
            <span>24×7 Available</span>
          </div>

        </div>

      </div>

    </section>
  );
}