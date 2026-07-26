"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I book a cab?",
    answer:
      "You can book your cab by calling us, sending a WhatsApp message, or using our online booking form on the website.",
  },
  {
    question: "How is the fare calculated?",
    answer:
      "The fare is based on distance, trip type, toll charges, parking charges and waiting time (if applicable). You'll receive the total fare before confirming your booking.",
  },
  {
    question: "Do you provide one-way and round trips?",
    answer:
      "Yes. We offer local trips, one-way travel, round trips, airport transfers and outstation tours.",
  },
  {
    question: "Is your service available 24×7?",
    answer:
      "Yes, we operate 24×7. Advance booking is recommended for early morning and late-night travel.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept Cash, UPI, Google Pay, PhonePe, Paytm and bank transfers. Online card payments will also be available soon.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made well before the scheduled pickup time are generally free. If an advance payment has been made, the refund policy depends on the timing of the cancellation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Got Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Find answers to the most common questions about our taxi and travel services.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`text-yellow-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}