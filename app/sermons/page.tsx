import {
  YOUTUBE_CONFIG,
  fetchPlaylistVideos,
  isPlaceholder,
} from "@/lib/youtube";
import YouTubePlaylistSection from "@/app/components/YouTubePlaylistSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons | Sand Springs Methodist Church",
  description:
    "Watch contemporary and traditional service sermons from Sand Springs Methodist Church. Worship with us from anywhere.",
};

export default async function SermonsPage() {
  const apiKey = YOUTUBE_CONFIG.apiKey;
  const hasApi = !isPlaceholder(apiKey);

  // Fetch both playlists in parallel on the server
  const [contemporaryVideos, traditionalVideos] = await Promise.all([
    hasApi
      ? fetchPlaylistVideos(YOUTUBE_CONFIG.contemporaryPlaylistId, apiKey)
      : Promise.resolve([]),
    hasApi
      ? fetchPlaylistVideos(YOUTUBE_CONFIG.traditionalPlaylistId, apiKey)
      : Promise.resolve([]),
  ]);

  return (
    <div className="bg-blue-950 min-h-screen">
      {/* Page header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-800/30">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Weekly Teaching
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Sermons
        </h1>
        <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Every service is recorded and uploaded so you can worship from
          anywhere, any time.
        </p>
      </div>

      {/* Sermon sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Contemporary */}
        <section>
          <YouTubePlaylistSection
            title="Contemporary Service"
            playlistId={YOUTUBE_CONFIG.contemporaryPlaylistId}
            videos={contemporaryVideos}
          />
        </section>

        {/* Divider */}
        <div className="border-t border-blue-800/30" />

        {/* Traditional */}
        <section>
          <YouTubePlaylistSection
            title="Traditional Service"
            playlistId={YOUTUBE_CONFIG.traditionalPlaylistId}
            videos={traditionalVideos}
          />
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-blue-800/30 py-16 px-4 text-center">
        <p className="text-blue-200 text-lg mb-6">
          Want to worship in person? We&apos;d love to have you join us.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
        >
          Plan Your Visit
        </a>
      </div>
    </div>
  );
}
