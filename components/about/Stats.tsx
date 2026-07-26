"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Car,
  Users,
  MapPinned,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Car,
    value: 500,
    suffix: "+",
    title: "Trips Completed",
  },
  {
    icon: Users,
    value: 350,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    icon: MapPinned,
    value: 50,
    suffix: "+",
    title: "Destinations Covered",
  },
  {
    icon: Star,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    title: "Customer Rating",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                  <Icon className="text-white" size={36} />
                </div>

                <h3 className="text-5xl font-extrabold text-white">

                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      decimals={item.decimals ?? 0}
                    />
                  )}

                  {item.suffix}

                </h3>

                <p className="mt-4 text-lg font-medium text-white/90">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}