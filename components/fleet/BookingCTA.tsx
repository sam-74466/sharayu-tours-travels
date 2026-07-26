import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-slate-950 py-20">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready to Travel?
        </h2>

        <p className="mt-5 text-lg text-slate-300">
          Book your preferred vehicle today and enjoy a safe,
          comfortable and affordable ride.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/booking"
            className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400"
          >
            Book Your Ride
          </Link>

          <a
            href="tel:+917385370690"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-black"
          >
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}