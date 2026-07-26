import RouteCard from "./RouteCard";
import { ROUTES } from "@/data/routes";

export default function RoutesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {ROUTES.map((route) => (
            <RouteCard
              key={`${route.from}-${route.to}`}
              from={route.from}
              to={route.to}
              distance={route.distance}
              duration={route.duration}
              fare={route.fare}
            />
          ))}

        </div>

      </div>
    </section>
  );
}