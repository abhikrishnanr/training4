"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Libre_Baskerville, IBM_Plex_Mono } from "next/font/google";
import {
  getEventById,
  getEvents,
  getFeaturedEvents,
  getPaginatedEvents,
} from "@/lib/data";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const rowHeight = 92;
const visibleCount = 3;

export default function EventsPage() {
  const events = getEvents();
  const paginatedEvents = getPaginatedEvents(1, 10);
  const featuredEvents = getFeaturedEvents();
  const eventById = getEventById(3);

  const [startIndex, setStartIndex] = useState(0);

  const maxStartIndex = Math.max(events.length - visibleCount, 0);
  const containerHeight = rowHeight * visibleCount;
  const totalHeight = rowHeight * events.length;

  const visibleEvents = useMemo(
    () => events.slice(startIndex, startIndex + visibleCount),
    [events, startIndex]
  );

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const nextStartIndex = Math.min(
      Math.floor(event.currentTarget.scrollTop / rowHeight),
      maxStartIndex
    );
    setStartIndex(nextStartIndex);
  }

  return (
    <main
      className={`${serif.className} min-h-screen bg-background text-foreground px-6 py-12`}
    >
      <header className="mx-auto mb-12 max-w-2xl">
        <h1 className="mb-2 text-4xl leading-tight">Events</h1>
        <p className="text-sm text-neutral-600">
          Upcoming performances and live sessions.
        </p>
      </header>

      <section className="mx-auto max-w-2xl border-t border-neutral-300">
        <div
          className="overflow-y-auto"
          style={{ height: containerHeight }}
          onScroll={handleScroll}
          aria-label="Virtualized event list"
        >
          <div className="relative" style={{ height: totalHeight }}>
            <div
              className="absolute left-0 right-0"
              style={{ transform: `translateY(${startIndex * rowHeight}px)` }}
            >
              {visibleEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="
                    grid grid-cols-[120px_1fr_auto]
                    gap-6 border-b border-neutral-300
                    py-5 text-inherit
                    transition-colors
                    hover:bg-black/5
                    max-sm:grid-cols-1 max-sm:gap-2
                  "
                  style={{ height: rowHeight }}
                >
                  <span
                    className={`${mono.className} text-[0.7rem] uppercase tracking-wider text-neutral-500`}
                  >
                    {event.date}
                  </span>

                  <span className="text-lg">{event.title}</span>

                  <span
                    className={`${mono.className} whitespace-nowrap text-[0.7rem] text-neutral-500 max-sm:whitespace-normal`}
                  >
                    {event.location}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-2xl space-y-10">
        <div>
          <h2 className="text-xl">Paginated events (page 1, size 10)</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {paginatedEvents.map((event) => (
              <li key={`page-${event.id}`}>
                {event.title} — {event.location} ({event.date})
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl">Featured events (even IDs)</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {featuredEvents.map((event) => (
              <li key={`featured-${event.id}`}>
                {event.title} — {event.location} ({event.date})
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl">Event by ID (3)</h2>
          <p className="mt-4 text-sm text-neutral-700">
            {eventById
              ? `${eventById.title} in ${eventById.location} on ${eventById.date}`
              : "Event not found."}
          </p>
        </div>
      </section>
    </main>
  );
}
