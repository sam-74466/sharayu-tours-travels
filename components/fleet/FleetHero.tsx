export default function FleetHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-black py-24">

      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <p className="mb-4 text-yellow-400 font-semibold">
          Premium Taxi Fleet
        </p>

        <h1 className="text-5xl font-extrabold text-white md:text-6xl">
          Choose Your
          <span className="block text-yellow-400">
            Perfect Ride
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Comfortable, clean and well-maintained vehicles
          for every journey.
        </p>

      </div>

    </section>
  );
}