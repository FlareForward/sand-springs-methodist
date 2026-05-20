// ─────────────────────────────────────────────────────────────────
//  YOUTH GROUP CONTENT  —  Easy to update!
//
//  EVENTS:  Add, edit, or remove items in the youthEvents array.
//
//  PHOTOS:  1. Drop your image file into /public/photos/youth/
//           2. Add an entry to the youthPhotos array below.
// ─────────────────────────────────────────────────────────────────

export interface YouthEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location?: string;
  description: string;
}

export interface YouthPhoto {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

// ── EVENTS ─────────────────────────────────────────────────────────
// To add a new event, copy one of the blocks below, paste it in,
// and fill in the details. Increase the id number for each new one.
export const youthEvents: YouthEvent[] = [
  {
    id: 1,
    title: "Wednesday Youth Night",
    date: "Every Wednesday",
    time: "4:00 PM – 8:00 PM",
    location: "Youth Rooms — Sand Springs Methodist Church",
    description:
      "Youth rooms open at 4 PM for hangout time — games, movies, and more. Dinner is served at 6:30 PM, followed by worship and a Bible lesson. Free time after the lesson for games and fun. Parents are always welcome to hang out or volunteer!",
  },
  // ── ADD NEW EVENTS BELOW THIS LINE ──
  // {
  //   id: 2,
  //   title: "Summer Camp",
  //   date: "July 14–18, 2025",
  //   time: "All Day",
  //   location: "Camp Egan, Tahlequah OK",
  //   description: "Our annual summer camp — sign-up sheets available at the church office.",
  // },
];

// ── PHOTOS ─────────────────────────────────────────────────────────
// 1. Place your image in:  public/photos/youth/your-photo.jpg
// 2. Add an entry below:
//    { id: 1, src: "/photos/youth/your-photo.jpg", alt: "Description", caption: "Optional caption" }
export const youthPhotos: YouthPhoto[] = [
  // ── ADD PHOTOS BELOW THIS LINE ──
  // {
  //   id: 1,
  //   src: "/photos/youth/camp-2025.jpg",
  //   alt: "Youth group at summer camp 2025",
  //   caption: "Summer Camp 2025",
  // },
];
