import Link from "next/link";
import { Libre_Baskerville, IBM_Plex_Mono } from "next/font/google";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Mock data for now
const events = [
  {
    id: "1",
    title: "Midnight Jazz Session",
    date: "Oct 21, 2026",
    location: "Blue Room Theatre, NY",
  },
  {
    id: "2",
    title: "Modern Strings Ensemble",
    date: "Nov 02, 2026",
    location: "Orpheum Hall, SF",
  },
  {
    id: "3",
    title: "Analog Synth Nights",
    date: "Nov 18, 2026",
    location: "Warehouse 4, LA",
  },
];

export default function AdminEventsViewPage() {
  return (
    <main
      className={`${serif.className} min-h-screen bg-background text-foreground px-6 py-12`}
    >
      <section className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-10 flex items-baseline justify-between">
          <div>
            <h1 className="mb-1 text-3xl">Events</h1>
            <p className="text-sm text-neutral-500">
              All events currently in the system.
            </p>
          </div>

          <Link
            href="/admin/events"
            className={`${mono.className} rounded border border-neutral-900 px-4 py-2 text-xs uppercase tracking-wide transition hover:bg-neutral-900 hover:text-white`}
          >
            Create Event
          </Link>
        </header>

        {/* List */}
        <div className="border-t border-neutral-300">
          {events.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-[140px_1fr_auto] gap-6 border-b border-neutral-300 py-4 max-sm:grid-cols-1 max-sm:gap-2"
            >
              <span
                className={`${mono.className} text-xs uppercase tracking-wide text-neutral-500`}
              >
                {event.date}
              </span>

              <div>
                <p className="text-base">{event.title}</p>
                <p className="text-xs text-neutral-500">
                  {event.location}
                </p>
              </div>

              {/* delete button */}
              <div className="flex flex-col gap-2 max-sm:flex-row max-sm:gap-4">
              <button
                className={`${mono.className} self-start text-xs text-red-600 underline underline-offset-4`}
              >
                Delete
              </button>

              <Link
                href={`/events/${event.id}`}
                className={`${mono.className} self-start text-xs underline underline-offset-4`}
              >
                View
              </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
