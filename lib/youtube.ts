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

// Fetches up to `maxResults` videos from a playlist.
// Returns an empty array on any error or when the API key is a placeholder.
export async function fetchPlaylistVideos(
  playlistId: string,
  apiKey: string,
  maxResults = 12
): Promise<YouTubeVideo[]> {
  if (isPlaceholder(apiKey) || isPlaceholder(playlistId)) return [];

  try {
    const url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?part=snippet&maxResults=${maxResults}` +
      `&playlistId=${encodeURIComponent(playlistId)}` +
      `&key=${encodeURIComponent(apiKey)}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.items ?? []).map((item: any) => ({
      videoId: item.snippet?.resourceId?.videoId ?? "",
      title: item.snippet?.title ?? "Untitled",
      thumbnail:
        item.snippet?.thumbnails?.medium?.url ??
        item.snippet?.thumbnails?.default?.url ??
        "",
      publishedAt: item.snippet?.publishedAt ?? "",
    })).filter((v: YouTubeVideo) => v.videoId !== "");
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
