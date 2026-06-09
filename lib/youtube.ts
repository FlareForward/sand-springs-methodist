// YouTube configuration for Sand Springs Methodist Church
// Values are read from environment variables set in .env.local (local)
// and the Railway dashboard (production).

export const YOUTUBE_CONFIG = {
  apiKey: process.env.YOUTUBE_API_KEY ?? "YOUTUBE_API_KEY",
  channelId: process.env.YOUTUBE_CHANNEL_ID ?? "CHANNEL_ID",
  contemporaryPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "CONTEMPORARY_PLAYLIST_ID",
  traditionalPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "TRADITIONAL_PLAYLIST_ID",
};

// Extracts the actual service date from titles like:
// "Contemporary Service from Jan.5th, 2025"
// "Traditional Service from May 17th, 2026"
// "Contemporary Service from June 1st, 2025"
function extractServiceDate(title: string): number {
  const months: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
    jan: 0, feb: 1, mar: 2, apr: 3, jun: 5, jul: 6, aug: 7,
    sep: 8, oct: 9, nov: 10, dec: 11,
  };

  // Matches "from Jan.5th, 2025" / "from May 17th, 2026" / "from June 1st, 2025"
  const m = title.match(
    /from\s+(january|february|march|april|may|june|july|august|september|october|november|december|jan\.?|feb\.?|mar\.?|apr\.?|jun\.?|jul\.?|aug\.?|sep\.?|oct\.?|nov\.?|dec\.?)\s*(\d{1,2})(?:st|nd|rd|th)?,?\s*(\d{4})/i
  );
  if (m) {
    const monthKey = m[1].toLowerCase().replace(".", "");
    const mo = months[monthKey];
    const d = parseInt(m[2], 10);
    const y = parseInt(m[3], 10);
    if (mo !== undefined && !isNaN(d) && !isNaN(y)) {
      return new Date(y, mo, d).getTime();
    }
  }
  return 0;
}

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

// Fetches ALL videos from a playlist using pagination, sorted newest first.
// Sorts by the service date parsed from the video title.
export async function fetchPlaylistVideos(
  playlistId: string,
  apiKey: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _maxResults = 50
): Promise<YouTubeVideo[]> {
  if (isPlaceholder(apiKey) || isPlaceholder(playlistId)) return [];

  try {
    // Step 1: paginate through ALL playlist items (YouTube max 50 per page)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allItems: any[] = [];
    let pageToken: string | undefined = undefined;

    do {
      const url: string =
        `https://www.googleapis.com/youtube/v3/playlistItems` +
        `?part=snippet&maxResults=50` +
        `&playlistId=${encodeURIComponent(playlistId)}` +
        `&key=${encodeURIComponent(apiKey)}` +
        (pageToken ? `&pageToken=${pageToken}` : "");

      const res: Response = await fetch(url, { cache: "no-store" });
      if (!res.ok) break;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = await res.json();
      allItems.push(...(data.items ?? []));
      pageToken = data.nextPageToken;
    } while (pageToken);

    if (allItems.length === 0) return [];

    // Build video list from titles + thumbnails
    const videos: YouTubeVideo[] = allItems
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => ({
        videoId: item.snippet?.resourceId?.videoId ?? "",
        title: item.snippet?.title ?? "Untitled",
        thumbnail:
          item.snippet?.thumbnails?.medium?.url ??
          item.snippet?.thumbnails?.default?.url ??
          "",
        publishedAt: item.snippet?.publishedAt ?? "",
      }))
      .filter((v: YouTubeVideo) => v.videoId !== "");

    // The playlist is built oldest → newest, so simply reverse it
    // to display newest → oldest with no date parsing needed.
    return videos.reverse();
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
