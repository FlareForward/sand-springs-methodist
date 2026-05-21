// YouTube configuration for Sand Springs Methodist Church
// Values are read from environment variables set in .env.local (local)
// and the Railway dashboard (production).

export const YOUTUBE_CONFIG = {
  apiKey: process.env.YOUTUBE_API_KEY ?? "YOUTUBE_API_KEY",
  channelId: process.env.YOUTUBE_CHANNEL_ID ?? "CHANNEL_ID",
  contemporaryPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "CONTEMPORARY_PLAYLIST_ID",
  traditionalPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "TRADITIONAL_PLAYLIST_ID",
};

// Returns true when the value is still a placeholder
export function isPlaceholder(value: string): boolean {
  return (
    value === "YOUTUBE_API_KEY" ||
    value === "CHANNEL_ID" ||
    value === "CONTEMPORARY_PLAYLIST_ID" ||
    value === "TRADITIONAL_PLAYLIST_ID"
  );
}

export interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

// Fetches up to `maxResults` videos from a playlist, sorted newest first.
// Uses a two-step approach: playlistItems for IDs/thumbnails, then videos.list
// for accurate publish dates — the only reliable source for sort order.
export async function fetchPlaylistVideos(
  playlistId: string,
  apiKey: string,
  maxResults = 50
): Promise<YouTubeVideo[]> {
  if (isPlaceholder(apiKey) || isPlaceholder(playlistId)) return [];

  try {
    // Step 1: get playlist items (video IDs + thumbnails)
    const playlistUrl =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?part=snippet&maxResults=${maxResults}` +
      `&playlistId=${encodeURIComponent(playlistId)}` +
      `&key=${encodeURIComponent(apiKey)}`;

    const playlistRes = await fetch(playlistUrl, { cache: "no-store" });
    if (!playlistRes.ok) return [];
    const playlistData = await playlistRes.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items: any[] = playlistData.items ?? [];
    const videoIds = items
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => item.snippet?.resourceId?.videoId ?? "")
      .filter((id: string) => id !== "");

    if (videoIds.length === 0) return [];

    // Step 2: get actual publish dates from videos.list (always accurate)
    const videosUrl =
      `https://www.googleapis.com/youtube/v3/videos` +
      `?part=snippet&id=${videoIds.join(",")}` +
      `&key=${encodeURIComponent(apiKey)}`;

    const videosRes = await fetch(videosUrl, { cache: "no-store" });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const videosData = videosRes.ok ? await videosRes.json() : { items: [] };

    // Build videoId → publishedAt lookup
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dateMap = new Map<string, string>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const v of (videosData.items ?? []) as any[]) {
      if (v.id && v.snippet?.publishedAt) {
        dateMap.set(v.id, v.snippet.publishedAt);
      }
    }

    // Merge playlist thumbnails with accurate publish dates
    const videos: YouTubeVideo[] = items
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => {
        const videoId = item.snippet?.resourceId?.videoId ?? "";
        return {
          videoId,
          title: item.snippet?.title ?? "Untitled",
          thumbnail:
            item.snippet?.thumbnails?.medium?.url ??
            item.snippet?.thumbnails?.default?.url ??
            "",
          publishedAt: dateMap.get(videoId) ?? "",
        };
      })
      .filter((v: YouTubeVideo) => v.videoId !== "");

    // Sort newest first using the accurate publish dates
    return videos.sort((a: YouTubeVideo, b: YouTubeVideo) => {
      const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bTime - aTime;
    });
  } catch {
    return [];
  }
}

// Returns the live video ID for a channel, or null if no stream is active.
export async function fetchLiveVideoId(
  channelId: string,
  apiKey: string
): Promise<string | null> {
  if (isPlaceholder(apiKey) || isPlaceholder(channelId)) return null;

  try {
    const url =
      `https://www.googleapis.com/youtube/v3/search` +
      `?part=snippet&channelId=${encodeURIComponent(channelId)}` +
      `&eventType=live&type=video` +
      `&key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();
    return data.items?.[0]?.id?.videoId ?? null;
  } catch {
    return null;
  }
}
