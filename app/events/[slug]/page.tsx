"use client";

import { useState } from "react";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type SeatStatus = "available" | "selected" | "unavailable";

type Seat = {
  id: string;
  status: SeatStatus;
};

const initialSeats: Seat[] = Array.from({ length: 40 }, (_, i) => ({
  id: `A${i + 1}`,
  status: i % 9 === 0 ? "unavailable" : "available",
}));

export default function SeatBookingPage() {
  const [seats, setSeats] = useState(initialSeats);

  function toggleSeat(id: string) {
    setSeats((prev) =>
      prev.map((seat) => {
        if (seat.id !== id) return seat;
        if (seat.status === "unavailable") return seat;

        return {
          ...seat,
          status: seat.status === "selected" ? "available" : "selected",
        };
      })
    );
  }

  return (
    <main
      className={`${mono.className} min-h-screen bg-background text-foreground px-6 py-10`}
    >
      <header className="mx-auto mb-10 max-w-xl text-center">
        <h1 className="mb-2 text-xl tracking-wide">
          Select Your Seats
        </h1>
        <p className="text-xs text-neutral-500">
          Click available seats to select or deselect.
        </p>
      </header>

      {/* Stage */}
      <div className="mx-auto mb-8 max-w-xl">
        <div className="rounded border border-neutral-400 py-2 text-center text-xs">
          Stage
        </div>
      </div>

      {/* Seats */}
      <section className="mx-auto grid max-w-xl grid-cols-8 gap-2">
        {seats.map((seat) => (
          <button
            key={seat.id}
            onClick={() => toggleSeat(seat.id)}
            disabled={seat.status === "unavailable"}
            aria-label={`Seat ${seat.id}`}
            className={`
              h-10 w-full rounded border text-[0.65rem]
              transition
              ${
                seat.status === "available" &&
                "border-neutral-400 hover:bg-neutral-200"
              }
              ${
                seat.status === "selected" &&
                "border-neutral-900 bg-neutral-900 text-white"
              }
              ${
                seat.status === "unavailable" &&
                "cursor-not-allowed border-neutral-300 bg-neutral-300 text-neutral-500"
              }
            `}
          >
            {seat.id}
          </button>
        ))}
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-xl border-t border-neutral-300 pt-6">
        <div className="flex items-center justify-between text-xs">
          <span>
            Selected:{" "}
            {
              seats.filter((seat) => seat.status === "selected").length
            }
          </span>

          <button
            className="rounded border border-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-900 hover:text-white"
          >
            Continue
          </button>
        </div>
      </footer>
    </main>
  );
}
