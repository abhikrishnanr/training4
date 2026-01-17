"use client";

import { useState } from "react";
import { IBM_Plex_Mono, Libre_Baskerville } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type EventFormData = {
  title: string;
  date: string;
  location: string;
  capacity: number;
};

export default function AdminCreateEventPage() {
  const [form, setForm] = useState<EventFormData>({
    title: "",
    date: "",
    location: "",
    capacity: 100,
  });

  function updateField<K extends keyof EventFormData>(
    key: K,
    value: EventFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Placeholder: replace with server action / API call later
    console.log("Creating event:", form);

    alert("Event created (mock)");
  }

  return (
    <main
      className={`${serif.className} min-h-screen bg-background text-foreground px-6 py-12`}
    >
      <section className="mx-auto max-w-xl">
        <header className="mb-8">
          <h1 className="mb-2 text-3xl">Create Event</h1>
          <p className="text-sm text-neutral-500">
            Add a new event to the system.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className={`${mono.className} mb-1 block text-xs uppercase tracking-wide`}
            >
              Event Title
            </label>
            <input
              id="title"
              type="text"
              required
              value={form.title}
              onChange={(e) =>
                updateField("title", e.target.value)
              }
              className="w-full rounded border border-neutral-400 bg-transparent px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className={`${mono.className} mb-1 block text-xs uppercase tracking-wide`}
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              required
              value={form.date}
              onChange={(e) =>
                updateField("date", e.target.value)
              }
              className="w-full rounded border border-neutral-400 bg-transparent px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className={`${mono.className} mb-1 block text-xs uppercase tracking-wide`}
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              required
              value={form.location}
              onChange={(e) =>
                updateField("location", e.target.value)
              }
              className="w-full rounded border border-neutral-400 bg-transparent px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>

          {/* Capacity */}
          <div>
            <label
              htmlFor="capacity"
              className={`${mono.className} mb-1 block text-xs uppercase tracking-wide`}
            >
              Capacity
            </label>
            <input
              id="capacity"
              type="number"
              min={1}
              value={form.capacity}
              onChange={(e) =>
                updateField("capacity", Number(e.target.value))
              }
              className="w-full rounded border border-neutral-400 bg-transparent px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-4">
            <button
              type="submit"
              className={`${mono.className} rounded border border-neutral-900 px-6 py-2 text-xs uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white`}
            >
              Create Event
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
