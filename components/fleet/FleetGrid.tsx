import FleetCard from "./FleetCard";
import { FLEET } from "@/constants/fleet";

export default function FleetGrid() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {FLEET.map((car) => (
            <FleetCard
              key={car.id}
              name={car.name}
              image={car.image}
              seats={car.seats}
              luggage={car.luggage}
              ratePerKm={car.ratePerKm}
            />
          ))}

        </div>

      </div>

    </section>
  );
}