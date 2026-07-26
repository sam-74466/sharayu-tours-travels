export default function GoogleMap() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-8 text-center text-4xl font-bold">
          Find Us
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Aundh,Pune&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </section>
  );
}