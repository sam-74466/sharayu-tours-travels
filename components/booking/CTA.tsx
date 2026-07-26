import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-yellow-500 py-20">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-black">
          Ready to Book Your Ride?
        </h2>

        <p className="mt-5 text-lg text-black/80">
          Safe, Comfortable and Affordable Taxi Service
          across Pune and Maharashtra.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/booking"
            className="rounded-xl bg-black px-8 py-4 font-semibold text-white hover:bg-slate-800"
          >
            Book Now
          </Link>

          <a
            href="tel:+917385370690"
            className="rounded-xl border-2 border-black px-8 py-4 font-semibold text-black hover:bg-black hover:text-white"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}