import Link from "next/link";
import { YOUTUBE_CONFIG, fetchPlaylistVideos, isPlaceholder } from "@/lib/youtube";

export default async function LatestSermon() {
  const playlistId = YOUTUBE_CONFIG.contemporaryPlaylistId;
  const apiKey = YOUTUBE_CONFIG.apiKey;

  // Attempt to fetch the newest video; gracefully falls back to playlist embed
  const videos = await fetchPlaylistVideos(playlistId, apiKey, 1);
  const latestVideo = videos[0] ?? null;

  const iframeSrc = latestVideo
    ? `https://www.youtube.com/embed/${latestVideo.videoId}?rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0&modestbranding=1`;

  const iframeTitle = latestVideo?.title ?? "Sand Springs Methodist Church Latest Sermon";

  const formattedDate = latestVideo?.publishedAt
    ? new Date(latestVideo.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <section id="sermons" className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Weekly Teaching
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Latest Sermon
          </h2>
          <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Can&apos;t make it in person? Every service is recorded and uploaded to
            our YouTube channel so you can worship from anywhere.
          </p>
        </div>

        {/* YouTube embed */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-blue-800/30">
          <div className="aspect-video bg-blue-900/50">
            <iframe
              className="w-full h-full"
              src={iframeSrc}
              title={iframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Sermon info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-900/40 border border-blue-800/40 rounded-2xl px-6 py-5">
          <div className="text-center sm:text-left">
            {latestVideo ? (
              <>
                <p className="text-white font-serif text-xl font-semibold">
                  {latestVideo.title}
                </p>
                {formattedDate && (
                  <p className="text-blue-300 text-sm mt-1">{formattedDate}</p>
                )}
              </>
            ) : (
              <p className="text-blue-300 text-sm">
                {isPlaceholder(apiKey)
                  ? "Add your YouTube API key to display sermon details here."
                  : "Sermon details will appear here once videos are available."}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-lg transition-colors shadow-lg shadow-amber-500/20"
            >
              View All Sermons
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-500 hover:border-blue-300 text-blue-200 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Get Sermon Notes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
