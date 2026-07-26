import GalleryCard from "./GalleryCard";
import { GALLERY } from "@/data/gallery";

export default function GalleryGrid() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {GALLERY.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
}