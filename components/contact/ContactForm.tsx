"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Message Sent Successfully!");
      setLoading(false);
    }, 1200);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border bg-white p-8 shadow-lg"
    >
      <h2 className="mb-6 text-3xl font-bold">
        Send Message
      </h2>

      <div className="space-y-5">

        <input
          required
          placeholder="Your Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          required
          placeholder="Phone Number"
          className="w-full rounded-lg border p-3"
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border p-3"
        />

        <textarea
          required
          rows={6}
          placeholder="Your Message"
          className="w-full rounded-lg border p-3"
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-yellow-500 py-4 font-semibold hover:bg-yellow-400"
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>

      </div>

    </form>
  );
}