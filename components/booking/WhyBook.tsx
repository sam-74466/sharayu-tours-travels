import {
  Clock,
  ShieldCheck,
  Car,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24×7 Service",
    description: "Book your cab anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Travel",
    description: "Verified drivers & clean vehicles.",
  },
  {
    icon: Car,
    title: "Comfortable Cars",
    description: "Well-maintained AC vehicles.",
  },
  {
    icon: MapPinned,
    title: "Anywhere in Maharashtra",
    description: "Local & Outstation Trips.",
  },
];

export default function WhyBook() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Book With Us?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-md text-center"
              >
                <Icon
                  size={40}
                  className="mx-auto text-yellow-500"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}