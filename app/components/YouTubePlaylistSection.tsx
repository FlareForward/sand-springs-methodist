"use client";

import { useState } from "react";
import { YouTubeVideo, isPlaceholder, YOUTUBE_CONFIG } from "@/lib/youtube";

interface Props {
  title: string;
  playlistId: string;
  // Pre-fetched on the server; passed down to keep this component purely reactive
  videos: YouTubeVideo[];
}

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Playlist-fallback embed (used when no API key / no videos fetched yet)
function PlaylistEmbed({ playlistId, title }: { playlistId: string; title: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-blue-800/30">
      <div className="aspect-video bg-blue-900/50">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function YouTubePlaylistSection({ title, playlistId, videos }: Props) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const noApiKey = isPlaceholder(YOUTUBE_CONFIG.apiKey) || isPlaceholder(playlistId);
  const featuredVideo = videos[0] ?? null;
  const remainingVideos = videos.slice(1);

  // Determine the iframe src
  const iframeSrc = activeVideoId
    ? `https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`
    : noApiKey || !featuredVideo
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${featuredVideo.videoId}?rel=0&modestbranding=1`;

  const iframeTitle =
    activeVideoId && videos.find((v) => v.videoId === activeVideoId)
      ? videos.find((v) => v.videoId === activeVideoId)!.title
      : featuredVideo?.title ?? title;

  const displayedTitle = activeVideoId
    ? videos.find((v) => v.videoId === activeVideoId)?.title ?? ""
    : featuredVideo?.title ?? "";

  const displayedDate = activeVideoId
    ? formatDate(videos.find((v) => v.videoId === activeVideoId)?.publishedAt ?? "")
    : formatDate(featuredVideo?.publishedAt ?? "");

  return (
    <div>
      {/* Section heading */}
      <div className="mb-8">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">
          {title}
        </p>
        <div className="w-12 h-0.5 bg-amber-500 rounded" />
      </div>

      {/* Featured player */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-blue-800/30">
        <div className="aspect-video bg-blue-900/50">
          <iframe
            key={iframeSrc}
            className="w-full h-full"
            src={iframeSrc}
            title={iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Title + date under featured player */}
      {displayedTitle && (
        <div className="mt-4 px-1">
          <p className="text-white font-serif text-lg font-semibold leading-snug">
            {displayedTitle}
          </p>
          {displayedDate && (
            <p className="text-blue-300 text-sm mt-1">{displayedDate}</p>
          )}
        </div>
      )}

      {/* Playlist-only state: no grid when API key is placeholder */}
      {noApiKey && (
        <p className="mt-4 text-blue-400 text-xs text-center">
          Add your YouTube API key to enable the full sermon archive grid.
        </p>
      )}

      {/* Sermon grid */}
      {remainingVideos.length > 0 && (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {remainingVideos.map((video) => {
            const isActive = activeVideoId === video.videoId;
            return (
              <button
                key={video.videoId}
                onClick={() => setActiveVideoId(video.videoId)}
                className={`group text-left rounded-xl overflow-hidden border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? "border-amber-500 shadow-lg shadow-amber-500/20"
                    : "border-blue-800/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-blue-600/60"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-blue-900/50 overflow-hidden">
                  {video.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-blue-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 left-2 bg-amber-500 text-blue-900 text-xs font-bold px-2 py-0.5 rounded">
                      Now Playing
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3 bg-blue-900/40">
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-2">
                    {video.title}
                  </p>
                  {video.publishedAt && (
                    <p className="text-blue-400 text-xs mt-1">
                      {formatDate(video.publishedAt)}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Fallback export for when the API key isn't set yet — renders only the embed
export function YouTubePlaylistEmbedFallback({
  title,
  playlistId,
}: {
  title: string;
  playlistId: string;
}) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">
          {title}
        </p>
        <div className="w-12 h-0.5 bg-amber-500 rounded" />
      </div>
      <PlaylistEmbed playlistId={playlistId} title={title} />
    </div>
  );
}
