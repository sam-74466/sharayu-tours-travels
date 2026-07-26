import Link from "next/link";
import { MapPinned, Clock, IndianRupee } from "lucide-react";

interface RouteCardProps {
  from: string;
  to: string;
  distance: string;
  duration: string;
  fare: string;
}

export default function RouteCard({
  from,
  to,
  distance,
  duration,
  fare,
}: RouteCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

      <h3 className="text-2xl font-bold">
        {from} → {to}
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <MapPinned className="text-yellow-500" />
          <span>{distance}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="text-yellow-500" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-3">
          <IndianRupee className="text-yellow-500" />
          <span>Starting From {fare}</span>
        </div>

      </div>

      <Link
        href="/booking"
        className="mt-8 inline-block rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
      >
        Book This Route
      </Link>
    </div>
  );
}