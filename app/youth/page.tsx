import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { youthEvents, youthPhotos } from "@/content/youth";

export const metadata: Metadata = {
  title: "Youth Group | Sand Springs Methodist Church",
  description:
    "Stay up to date with youth group events, photos, and activities at Sand Springs Methodist Church in Sand Springs, OK.",
};

export default function YouthPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="bg-blue-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Sand Springs Methodist
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
          Youth Group
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Fun, worship, fellowship, and real-life faith. Every Wednesday at
          4&nbsp;PM — we&apos;d love to have you!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-10 text-blue-300 hover:text-white text-sm font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

        {/* ── Upcoming Events ────────────────────────────────────── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What&apos;s Coming Up
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-900">
              Upcoming Events
            </h2>
            <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
              Check back often — we&apos;re always adding new activities!
            </p>
          </div>

          {youthEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {youthEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="font-serif text-xl font-bold text-blue-900">
                      {event.title}
                    </h3>
                    <span className="flex-shrink-0 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-amber-600 font-semibold text-sm mb-1">
                    {event.time}
                  </p>
                  {event.location && (
                    <p className="text-slate-400 text-sm mb-4">
                      📍 {event.location}
                    </p>
                  )}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-400 text-lg">
                No upcoming events posted yet — check back soon!
              </p>
            </div>
          )}
        </section>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="border-t border-slate-200" />

        {/* ── Photo Gallery ──────────────────────────────────────── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Memories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-blue-900">
              Youth Group Photos
            </h2>
            <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
              A glimpse into the fun we have together.
            </p>
          </div>

          {youthPhotos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {youthPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-sm"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  {photo.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <div className="text-5xl mb-4">📸</div>
              <p className="text-slate-400 text-lg font-medium">
                Photos coming soon!
              </p>
              <p className="text-slate-300 text-sm mt-2">
                Check back after our next event.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <div className="border-t border-slate-200 bg-white py-16 px-4 text-center">
        <p className="text-slate-600 text-lg mb-6">
          Questions about youth group? We&apos;d love to hear from you.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
