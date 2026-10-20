import Script from "next/script";

// Announcements and events come live from Church Connector.
// Whatever the office posts there shows up here on its own; nothing to update on this site.
const CHURCH_CODE = "SSMC319";
const EMBED_BASE = "https://church-connector.com/embed";

export default function ThisWeek() {
  return (
    <section id="this-week" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Happening Now
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
            This Week at Sand Springs
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            The latest news from our church family and what&apos;s coming up next. Come be part of it.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <iframe
            src={`${EMBED_BASE}/${CHURCH_CODE}/announcements`}
            title="Sand Springs Methodist Church announcements"
            data-cc-embed=""
            loading="lazy"
            className="w-full border-0"
            style={{ minHeight: 480 }}
          />
          <iframe
            src={`${EMBED_BASE}/${CHURCH_CODE}/events`}
            title="Sand Springs Methodist Church upcoming events"
            data-cc-embed=""
            loading="lazy"
            className="w-full border-0"
            style={{ minHeight: 480 }}
          />
        </div>
      </div>
      <Script src="https://church-connector.com/embed.js" strategy="afterInteractive" />
    </section>
  );
}
