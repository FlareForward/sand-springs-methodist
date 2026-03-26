export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Real church photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/photos/church-1.jpg)" }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6">
          Sand Springs, Oklahoma
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
          <span className="text-sky-300">Sand Springs</span>
          <span className="text-sky-300 block">Methodist Church</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          A welcoming community rooted in faith, scripture, and service.
          <span className="block mt-2 text-base sm:text-lg text-white/60">
            You are welcome here — just as you are.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-base rounded-lg shadow-xl shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Plan Your Visit
          </a>
          <a
            href="#sermons"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/50 hover:border-white/80 text-white font-bold text-base rounded-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            Watch Latest Sermon
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-center gap-8">
          {/* Sunday Services */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-1">Sunday Services</p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              Contemporary Service — 9:00 AM
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-300 flex-shrink-0" />
              Sunday School — 10:00 AM
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
              Traditional Service — 11:00 AM
            </div>
          </div>

          {/* Youth Services */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-1">Youth Services</p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              Youth Night — Wednesday 4:00–8:30 PM
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              Youth Sunday School — Sunday 10:00 AM
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf8f5] to-transparent" />
    </section>
  );
}
