import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { youthEvents, youthPhotos } from "@/content/youth";

export const metadata: Metadata = {
  title: "Youth Group | Sand Springs Methodist Church",
  description:
    "Events and photos for the Sand Springs Methodist Church youth group.",
};

export default function YouthPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen pt-20">

      {/* ── Back to Homepage tab ───────────────────────────── */}
      <div className="bg-blue-900 px-4 py-2 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition-colors"
        >
          ← Back to Homepage
        </Link>
      </div>

      {/* ── Main content card ──────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-blue-900">
            Welcome to the Youth!
          </h1>
          <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Every Wednesday at 4 PM — games, dinner, worship, and Bible study.
            Parents are always welcome!
          </p>
        </div>

        {/* ── Upcoming Events ───────────────────────────────── */}
        <section className="mb-10">
          <h2 className="font-serif text-xl font-bold text-blue-900 mb-4 border-b border-slate-200 pb-2">
            Upcoming Events
          </h2>

          {youthEvents.length > 0 ? (
            <div className="space-y-4">
              {youthEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-5"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                    <h3 className="font-semibold text-blue-900 text-base">
                      {event.title}
                    </h3>
                    <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-amber-600 text-sm font-medium mb-1">{event.time}</p>
                  {event.location && (
                    <p className="text-slate-400 text-xs mb-2">📍 {event.location}</p>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-sm text-center py-6 bg-white rounded-xl border border-slate-200">
              No upcoming events yet — check back soon!
            </p>
          )}
        </section>

        {/* ── Photos ────────────────────────────────────────── */}
        <section>
          {youthPhotos.length > 0 ? (
            <div className="grid grid-cols-2 gap-6">
              {youthPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg bg-slate-100"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 896px) 50vw, 448px"
                  />
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs font-medium">{photo.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-slate-400 text-sm">Photos coming soon!</p>
            </div>
          )}
        </section>

        {/* ── Contact nudge ─────────────────────────────────── */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 text-base">
            Questions? Contact our youth director Jessica at the church{" "}
            <a href="tel:9182455955" className="font-semibold text-blue-900 hover:underline">
              918-245-5955
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
