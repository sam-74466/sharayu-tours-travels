import Link from "next/link";

export default function BookingHero()
 {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-black py-24">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-20 h-60 w-60 rounded-full bg-yellow-500 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-60 w-60 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="mb-4 inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-400">
            🚖 Fast • Safe • Affordable
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Book Your Cab
            <span className="block text-yellow-400">
              In Just 2 Minutes
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Local Taxi • Airport Transfer • One Way •
            Round Trip • Corporate Travel • Tour Packages
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="tel:+917385370690"
              className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              📞 Call Now
            </a>

            <Link
              href="/fleet"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-yellow-500 hover:text-yellow-400"
            >
              View Fleet
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}