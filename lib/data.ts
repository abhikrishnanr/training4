type EventType = {
  title: string;
  date: string;
  location: string;
  capacity: number;
  id: number;
};
const events: EventType[] = [
  { title: "Tech Conference 2026", date: "2026-02-15", location: "New York", capacity: 500, id: 1 },
  { title: "Art Expo", date: "2026-03-10", location: "Paris", capacity: 200, id: 2 },
  { title: "Music Festival", date: "2026-04-05", location: "Los Angeles", capacity: 1000, id: 3 },
  { title: "Startup Pitch Night", date: "2026-02-28", location: "San Francisco", capacity: 150, id: 4 },
  { title: "Food Carnival", date: "2026-03-20", location: "Tokyo", capacity: 300, id: 5 },
  { title: "Science Fair", date: "2026-05-12", location: "London", capacity: 400, id: 6 },
  { title: "Film Screening", date: "2026-06-01", location: "Berlin", capacity: 120, id: 7 },
  { title: "Literature Meetup", date: "2026-06-15", location: "Dublin", capacity: 80, id: 8 },
  { title: "Photography Workshop", date: "2026-07-05", location: "Rome", capacity: 50, id: 9 },
  { title: "Charity Gala", date: "2026-07-20", location: "Dubai", capacity: 600, id: 10 },
  { title: "Yoga Retreat", date: "2026-08-01", location: "Bali", capacity: 100, id: 11 },
  { title: "Gaming Convention", date: "2026-08-15", location: "Seoul", capacity: 800, id: 12 },
  { title: "Startup Hackathon", date: "2026-09-01", location: "Silicon Valley", capacity: 250, id: 13 },
  { title: "Jazz Night", date: "2026-09-10", location: "New Orleans", capacity: 150, id: 14 },
  { title: "Comic Con", date: "2026-09-20", location: "San Diego", capacity: 2000, id: 15 },
  { title: "Environmental Summit", date: "2026-10-05", location: "Vancouver", capacity: 350, id: 16 },
  { title: "Wine Tasting Event", date: "2026-10-15", location: "Napa Valley", capacity: 100, id: 17 },
  { title: "Fashion Week", date: "2026-11-01", location: "Milan", capacity: 500, id: 18 },
  { title: "Culinary Workshop", date: "2026-11-10", location: "Barcelona", capacity: 80, id: 19 },
  { title: "Startup Seminar", date: "2026-11-20", location: "Singapore", capacity: 200, id: 20 },
  { title: "Photography Contest", date: "2026-12-01", location: "Sydney", capacity: 60, id: 21 },
  { title: "New Year Party", date: "2026-12-31", location: "Las Vegas", capacity: 1000, id: 22 },
  { title: "Robotics Expo", date: "2026-01-10", location: "Tokyo", capacity: 300, id: 23 },
  { title: "Blockchain Meetup", date: "2026-01-15", location: "Berlin", capacity: 150, id: 24 },
  { title: "Coding Bootcamp", date: "2026-01-20", location: "London", capacity: 100, id: 25 },
  { title: "Startup Weekend", date: "2026-02-05", location: "New York", capacity: 250, id: 26 },
  { title: "Marathon", date: "2026-02-12", location: "Boston", capacity: 1000, id: 27 },
  { title: "Indie Film Festival", date: "2026-02-18", location: "Toronto", capacity: 200, id: 28 },
  { title: "Artisan Fair", date: "2026-02-25", location: "Amsterdam", capacity: 300, id: 29 },
  { title: "Tech Meetup", date: "2026-03-01", location: "San Francisco", capacity: 150, id: 30 },
  { title: "Classical Concert", date: "2026-03-07", location: "Vienna", capacity: 400, id: 31 },
  { title: "Startup Demo Day", date: "2026-03-14", location: "Los Angeles", capacity: 200, id: 32 },
  { title: "Dance Workshop", date: "2026-03-21", location: "Paris", capacity: 80, id: 33 },
  { title: "Mindfulness Retreat", date: "2026-03-28", location: "Bali", capacity: 100, id: 34 },
  { title: "Food Festival", date: "2026-04-04", location: "Rome", capacity: 500, id: 35 },
  { title: "Startup Forum", date: "2026-04-10", location: "Singapore", capacity: 300, id: 36 },
  { title: "Music Awards", date: "2026-04-18", location: "Los Angeles", capacity: 1000, id: 37 },
];

export function getEvents(): EventType[] {
  return events;
}

export function getPaginatedEvents(page: number, pageSize: number): EventType[] {
  const startIndex = (page - 1) * pageSize;
  return events.slice(startIndex, startIndex + pageSize);
}

export function getEventById(id: number): EventType | undefined {
  return events.find((event) => event.id === id);
}

export function getFeaturedEvents(): EventType[] {
  return events.filter((event) => event.id % 2 === 0);
}

export function createEvent(event: Omit<EventType, 'id'>): EventType {
    const newEvent: EventType = {
        id: events.length + 1,
        ...event
    };
    events.push(newEvent);
    return newEvent;
}

export function updateEvent(id: number, updatedEvent: Partial<Omit<EventType, 'id'>>): EventType | undefined {
    const eventIndex = events.findIndex((event) => event.id === id);
    if (eventIndex === -1) {
        return undefined;
    }
    events[eventIndex] = { ...events[eventIndex], ...updatedEvent };
    return events[eventIndex];
}

export function deleteEvent(id: number): boolean {
    const eventIndex = events.findIndex((event) => event.id === id);
    if (eventIndex === -1) {
        return false;
    }
    events.splice(eventIndex, 1);
    return true;
}