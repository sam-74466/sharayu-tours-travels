import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Snowflake } from "lucide-react";

interface FleetCardProps {
  name: string;
  image: string;
  seats: number;
  luggage: number;
  ratePerKm: number;
}

export default function FleetCard({
  name,
  image,
  seats,
  luggage,
  ratePerKm,
}: FleetCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-64">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <div className="mt-6 flex justify-between">

          <div className="flex items-center gap-2">

            <Users size={18} />

            {seats} Seats

          </div>

          <div className="flex items-center gap-2">

            <Briefcase size={18} />

            {luggage} Bags

          </div>

          <div className="flex items-center gap-2">

            <Snowflake size={18} />

            AC

          </div>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <p className="text-2xl font-bold text-yellow-600">
              ₹{ratePerKm}/km
            </p>

          </div>

          <Link
            href="/booking"
            className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}