// YouTube configuration for Sand Springs Methodist Church
// Values are read from environment variables set in .env.local (local)
// and the Railway dashboard (production).

export const YOUTUBE_CONFIG = {
  apiKey: process.env.YOUTUBE_API_KEY ?? "YOUTUBE_API_KEY",
  channelId: process.env.YOUTUBE_CHANNEL_ID ?? "CHANNEL_ID",
  contemporaryPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "CONTEMPORARY_PLAYLIST_ID",
  traditionalPlaylistId: process.env.YOUTUBE_PLAYLIST_ID ?? "TRADITIONAL_PLAYLIST_ID",
};

// Tries to extract the actual service date from a video title.
// Handles formats like: "January 5, 2025", "Jan 5 2025", "1/5/2025",
// "01-05-2025", "2025-01-05", "May 17th 2026", etc.
function extractServiceDate(title: string): number {
  const months: Record<string, number> = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
    jan: 0, feb: 1, mar: 2, apr: 3, jun: 5, jul: 6, aug: 7,
    sep: 8, oct: 9, nov: 10, dec: 11,
  };

  // Pattern 1: "January 5, 2025" / "Jan 5th, 2025" / "May 17 2026"
  const longMonth = title.match(
    /\b(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\s+(\d{1,2})(?:st|nd|rd|th)?[,\s]+(\d{4})\b/i
  );
  if (longMonth) {
    const m = months[longMonth[1].toLowerCase()];
    const d = parseInt(longMonth[2], 10);
    const y = parseInt(longMonth[3], 10);
    const t = new Date(y, m, d).getTime();
    if (!isNaN(t)) return t;
  }

  // Pattern 2: MM/DD/YYYY or M/D/YYYY
  const slashDate = title.match(/\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/);
  if (slashDate) {
    const t = new Date(
      parseInt(slashDate[3], 10),
      parseInt(slashDate[1], 10) - 1,
      parseInt(slashDate[2], 10)
    ).getTime();
    if (!isNaN(t)) return t;
  }

  // Pattern 3: YYYY-MM-DD (ISO)
  const isoDate = title.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
  if (isoDate) {
    const t = new Date(
      parseInt(isoDate[1], 10),
      parseInt(isoDate[2], 10) - 1,
      parseInt(isoDate[3], 10)
    ).getTime();
    if (!isNaN(t)) return t;
  }

  // Pattern 4: MM-DD-YYYY
  const dashDate = title.match(/\b(\d{1,2})-(\d{1,2})-(\d{4})\b/);
  if (dashDate) {
    const t = new Date(
      parseInt(dashDate[3], 10),
      parseInt(dashDate[1], 10) - 1,
      parseInt(dashDate[2], 10)
    ).getTime();
    if (!isNaN(t)) return t;
  }

  return 0; // no date found
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

    // Sort newest first by the actual service date extracted from the title.
    // Falls back to publishedAt only if no date can be parsed from the title.
    return videos.sort((a: YouTubeVideo, b: YouTubeVideo) => {
      const aTime = extractServiceDate(a.title) ||
        (a.publishedAt ? new Date(a.publishedAt).getTime() : 0);
      const bTime = extractServiceDate(b.title) ||
        (b.publishedAt ? new Date(b.publishedAt).getTime() : 0);
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
