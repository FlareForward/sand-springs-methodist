"use client";

import { useEffect, useState } from "react";
import { YOUTUBE_CONFIG, fetchLiveVideoId } from "@/lib/youtube";

export default function LiveBanner() {
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function checkLive() {
      const videoId = await fetchLiveVideoId(
        YOUTUBE_CONFIG.channelId,
        YOUTUBE_CONFIG.apiKey
      );
      if (!cancelled) {
        setLiveVideoId(videoId);
        setChecked(true);
      }
    }

    checkLive();

    // Re-check every 5 minutes while the tab is open
    const interval = setInterval(checkLive, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!checked || !liveVideoId) return null;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${liveVideoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-500 transition-colors py-3 px-4 text-white font-semibold text-sm sm:text-base"
    >
      <span className="relative flex h-3 w-3 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      We Are Live — Join the Service
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}
