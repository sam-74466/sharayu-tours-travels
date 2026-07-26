"use client";

import { FAQS } from "@/data/faq";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">

      <div className="mx-auto max-w-4xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">

          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left font-semibold"
              >
                {faq.question}

                <ChevronDown
                  className={`transition ${
                    open === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}