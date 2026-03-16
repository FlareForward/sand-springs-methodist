// YouTube configuration for Sand Springs Methodist Church
// Replace each placeholder with the real value to activate full functionality.
// No other code changes are required.

export const YOUTUBE_CONFIG = {
  // YouTube Data API v3 key (console.cloud.google.com)
  apiKey: "YOUTUBE_API_KEY",

  // YouTube channel ID (found in channel URL or About page)
  channelId: "CHANNEL_ID",

  // Playlist IDs — copy from the YouTube playlist URL (?list=...)
  contemporaryPlaylistId: "CONTEMPORARY_PLAYLIST_ID",
  traditionalPlaylistId: "TRADITIONAL_PLAYLIST_ID",
} as const;

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
