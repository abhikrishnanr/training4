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

const events = [
  {
    slug: "midnight-jazz-session",
    title: "Midnight Jazz Session",
    date: "Oct 21, 2026",
    location: "Blue Room Theatre, NY",
  },
  {
    slug: "modern-strings-ensemble",
    title: "Modern Strings Ensemble",
    date: "Nov 02, 2026",
    location: "Orpheum Hall, SF",
  },
  {
    slug: "analog-synth-nights",
    title: "Analog Synth Nights",
    date: "Nov 18, 2026",
    location: "Warehouse 4, LA",
  },
];

export default function EventsPage() {
  return (
    <main
      className={`${serif.className} min-h-screen bg-background text-foreground px-6 py-12`}
    >
      <header className="mx-auto mb-12 max-w-2xl">
        <h1 className="mb-2 text-4xl leading-tight">
          Events
        </h1>
        <p className="text-sm text-neutral-600">
          Upcoming performances and live sessions.
        </p>
      </header>

      <section className="mx-auto max-w-2xl border-t border-neutral-300">
        {events.map((event) => (
          <Link
            key={event.slug}
            href={`/events/${event.slug}`}
            className="
              grid grid-cols-[120px_1fr_auto]
              gap-6 border-b border-neutral-300
              py-5 text-inherit
              transition-colors
              hover:bg-black/5
              max-sm:grid-cols-1 max-sm:gap-2
            "
          >
            <span
              className={`${mono.className} text-[0.7rem] uppercase tracking-wider text-neutral-500`}
            >
              {event.date}
            </span>

            <span className="text-lg">
              {event.title}
            </span>

            <span
              className={`${mono.className} whitespace-nowrap text-[0.7rem] text-neutral-500 max-sm:whitespace-normal`}
            >
              {event.location}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
