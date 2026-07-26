export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-black py-24">

      <div className="absolute inset-0">
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <p className="mb-4 text-yellow-400 font-semibold">
          Our Gallery
        </p>

        <h1 className="text-5xl font-extrabold text-white md:text-6xl">
          Travel Moments
          <span className="block text-yellow-400">
            Captured Forever
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Explore our premium taxi fleet, beautiful destinations,
          airport transfers and memorable journeys.
        </p>

      </div>

    </section>
  );
}