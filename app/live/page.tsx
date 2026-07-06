import type { Metadata } from "next";
import { YOUTUBE_CONFIG } from "@/lib/youtube";
import LiveStreamViewer from "@/app/components/LiveStreamViewer";

export const metadata: Metadata = {
  title: "Watch Live | Sand Springs Methodist Church",
  description:
    "Watch Sand Springs Methodist Church's Sunday service live online, streaming Sunday mornings.",
};

export default function LivePage() {
  return (
    <div className="bg-blue-950 min-h-screen">
      {/* Page header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-blue-800/30">
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
          Join Us
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Watch Live
        </h1>
        <p className="mt-4 text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Tune in Sunday mornings to worship with us from anywhere.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <LiveStreamViewer
          channelId={YOUTUBE_CONFIG.channelId}
          apiKey={YOUTUBE_CONFIG.apiKey}
        />
      </div>
    </div>
  );
}
