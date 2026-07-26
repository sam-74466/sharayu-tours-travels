export default function PopularDestinations() {
  const destinations = [
    "Mumbai",
    "Shirdi",
    "Goa",
    "Mahabaleshwar",
    "Lonavala",
    "Nashik",
    "Kolhapur",
    "Aurangabad",
    "Satara",
    "Ratnagiri",
    "Alibaug",
    "Nagpur",
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Popular Destinations
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-600">
          We provide reliable taxi services to hundreds of
          destinations across Maharashtra and nearby states.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {destinations.map((city) => (
            <div
              key={city}
              className="rounded-full bg-white px-6 py-3 shadow-md"
            >
              {city}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
