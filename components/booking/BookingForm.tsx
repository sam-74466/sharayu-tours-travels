"use client";

import { useState } from "react";
import useBooking from "@/hooks/useBooking";
import useFareCalculator from "@/hooks/useFareCalculator";
import FareEstimate from "./FareEstimate";

export default function BookingForm() {
  const { booking, updateField } = useBooking();

  const [distance, setDistance] = useState(150);
  const [toll, setToll] = useState(0);
  const [parking, setParking] = useState(0);
  const [waiting, setWaiting] = useState(0);
  const [night, setNight] = useState(false);

  const fare = useFareCalculator({
    distance,
    toll,
    parking,
    waitingMinutes: waiting,
    night,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      booking,
      fare,
    });

    alert(
      "Booking submitted successfully.\n\nBackend integration coming next."
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border bg-white p-8 shadow-lg"
        >

          <h2 className="mb-6 text-3xl font-bold">
            Book Your Cab
          </h2>

          <div className="space-y-5">

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Pickup Location"
              value={booking.pickup}
              onChange={(e) =>
                updateField("pickup", e.target.value)
              }
            />

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Destination"
              value={booking.destination}
              onChange={(e) =>
                updateField(
                  "destination",
                  e.target.value
                )
              }
            />

            <select
              className="w-full rounded-lg border p-3"
              value={booking.tripType}
              onChange={(e) =>
                updateField(
                  "tripType",
                  e.target.value as
                    | "local"
                    | "oneway"
                    | "roundtrip"
                )
              }
            >
              <option value="local">
                Local
              </option>

              <option value="oneway">
                One Way
              </option>

              <option value="roundtrip">
                Round Trip
              </option>
            </select>

            <input
              type="date"
              className="w-full rounded-lg border p-3"
              value={booking.pickupDate}
              onChange={(e) =>
                updateField(
                  "pickupDate",
                  e.target.value
                )
              }
            />

            <input
              type="time"
              className="w-full rounded-lg border p-3"
              value={booking.pickupTime}
              onChange={(e) =>
                updateField(
                  "pickupTime",
                  e.target.value
                )
              }
            />

            {booking.tripType === "roundtrip" && (
              <input
                type="date"
                className="w-full rounded-lg border p-3"
                value={booking.returnDate}
                onChange={(e) =>
                  updateField(
                    "returnDate",
                    e.target.value
                  )
                }
              />
            )}

            <input
              type="number"
              min={1}
              max={7}
              className="w-full rounded-lg border p-3"
              placeholder="Passengers"
              value={booking.passengers}
              onChange={(e) =>
                updateField(
                  "passengers",
                  Number(e.target.value)
                )
              }
            />

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Full Name"
              value={booking.customerName}
              onChange={(e) =>
                updateField(
                  "customerName",
                  e.target.value
                )
              }
            />

            <input
              className="w-full rounded-lg border p-3"
              placeholder="Mobile Number"
              value={booking.mobile}
              onChange={(e) =>
                updateField(
                  "mobile",
                  e.target.value
                )
              }
            />

            <input
              type="email"
              className="w-full rounded-lg border p-3"
              placeholder="Email Address"
              value={booking.email}
              onChange={(e) =>
                updateField(
                  "email",
                  e.target.value
                )
              }
            />

            <textarea
              className="w-full rounded-lg border p-3"
              rows={4}
              placeholder="Additional Notes"
              value={booking.notes}
              onChange={(e) =>
                updateField(
                  "notes",
                  e.target.value
                )
              }
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="number"
                className="rounded-lg border p-3"
                placeholder="Distance (km)"
                value={distance}
                onChange={(e) =>
                  setDistance(Number(e.target.value))
                }
              />

              <input
                type="number"
                className="rounded-lg border p-3"
                placeholder="Toll"
                value={toll}
                onChange={(e) =>
                  setToll(Number(e.target.value))
                }
              />

              <input
                type="number"
                className="rounded-lg border p-3"
                placeholder="Parking"
                value={parking}
                onChange={(e) =>
                  setParking(Number(e.target.value))
                }
              />

              <input
                type="number"
                className="rounded-lg border p-3"
                placeholder="Waiting (minutes)"
                value={waiting}
                onChange={(e) =>
                  setWaiting(Number(e.target.value))
                }
              />

            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={night}
                onChange={(e) =>
                  setNight(e.target.checked)
                }
              />

              Night Charges Applicable
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-yellow-500 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Confirm Booking
            </button>

          </div>

        </form>

        <FareEstimate
          distance={fare.distance}
          total={fare.total}
          advance={fare.advance}
          baseFare={fare.baseFare}
          distanceFare={fare.distanceFare}
          toll={fare.toll}
          parking={fare.parking}
          waiting={fare.waiting}
          nightCharge={fare.nightCharge}
        />

      </div>
    </section>
  );
}