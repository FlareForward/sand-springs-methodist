// To connect a real giving platform, replace href="#" below with your giving URL
// (e.g., Tithe.ly, Pushpay, or your church's online giving page).

import Image from "next/image";

export default function Giving() {
  return (
    <section id="give" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background photo with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/photos/church-3.jpg"
              alt="Sand Springs Methodist Church grounds"
              fill
              className="object-cover"
              sizes="1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-950/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
            <div className="w-14 h-14 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Generosity
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Support the Mission
            </h2>

            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              Your generous giving makes it possible for Sand Springs Methodist to
              preach the Gospel, serve our community, and care for those in need.
              Every gift — large or small — is an act of worship.
            </p>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-10 italic font-serif">
              &ldquo;Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              <span className="block mt-1 not-italic text-sm text-white/40">— 2 Corinthians 9:7</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5"
              >
                Give Online
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold rounded-xl transition-colors"
              >
                Other Ways to Give
              </a>
            </div>

            <p className="mt-8 text-white/30 text-sm">
              All online giving is processed securely. Sand Springs Methodist Church is a registered 501(c)(3) nonprofit organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
