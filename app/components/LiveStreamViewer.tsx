"use client";

import { useEffect, useState } from "react";
import { fetchLiveVideoId } from "@/lib/youtube";

interface Props {
  channelId: string;
  apiKey: string;
}

export default function LiveStreamViewer({ channelId, apiKey }: Props) {
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function checkLive() {
      const videoId = await fetchLiveVideoId(channelId, apiKey);
      if (!cancelled) {
        setLiveVideoId(videoId);
        setChecked(true);
      }
    }

    checkLive();

    // Re-check every 2 minutes while someone is sitting on this page
    const interval = setInterval(checkLive, 2 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [channelId, apiKey]);

  if (!checked) {
    return (
      <div className="aspect-video w-full rounded-2xl bg-blue-900/50 border border-blue-800/30 flex items-center justify-center">
        <p className="text-blue-300 text-sm">Checking for a live service…</p>
      </div>
    );
  }

  if (!liveVideoId) {
    return (
      <div className="rounded-2xl bg-blue-900/40 border border-blue-800/40 px-6 py-12 sm:py-16 text-center">
        <p className="text-white font-serif text-2xl font-semibold mb-3">
          We&apos;re not live right now
        </p>
        <p className="text-blue-200 mb-6">
          Join us in person, or come back during a service time:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            Sunday School — 9:30 AM
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            Sunday Worship — 10:30 AM
          </div>
        </div>
        <a
          href="/sermons"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
        >
          Watch a Past Sermon
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-blue-800/30">
      <div className="aspect-video bg-blue-900/50">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Live Service"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
