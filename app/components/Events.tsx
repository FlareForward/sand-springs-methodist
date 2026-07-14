export default function Events() {
  return (
    <section id="events" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-teal-300 overflow-hidden">
      {/* Playful decorative bubbles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/20 rounded-full blur-2xl" />
      <div className="absolute top-10 right-10 w-16 h-16 bg-white/25 rounded-full hidden sm:block" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-teal-950 font-semibold text-sm uppercase tracking-widest mb-3">
          Upcoming Events
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-teal-950 mb-6">
          Vacation Bible School!
        </h2>

        {/* Framed snowy mountains illustration */}
        <div className="mx-auto max-w-2xl rounded-3xl overflow-hidden border-4 border-white shadow-xl mb-8">
          <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
            <rect width="800" height="400" fill="#7dd3d8" />
            {/* Sun */}
            <circle cx="650" cy="110" r="55" fill="#fff6d5" />
            {/* Clouds */}
            <g fill="#ffffff" opacity="0.85">
              <ellipse cx="140" cy="90" rx="55" ry="26" />
              <ellipse cx="185" cy="80" rx="40" ry="22" />
              <ellipse cx="95" cy="80" rx="35" ry="20" />
              <ellipse cx="480" cy="60" rx="45" ry="20" />
              <ellipse cx="520" cy="70" rx="32" ry="16" />
            </g>
            {/* Back mountain range */}
            <polygon points="0,260 120,120 240,260" fill="#3fa9ac" />
            <polygon points="60,260 200,90 340,260" fill="#4fb8bb" />
            <polygon points="220,260 380,110 540,260" fill="#3fa9ac" />
            <polygon points="420,260 560,100 700,260" fill="#4fb8bb" />
            <polygon points="600,260 720,140 800,260" fill="#3fa9ac" />
            {/* Snow caps (back range) */}
            <polygon points="120,120 95,165 145,150 120,120 150,165 175,180 100,180" fill="#ffffff" />
            <polygon points="200,90 175,140 225,125 200,90 230,145 255,160 180,160" fill="#ffffff" />
            <polygon points="380,110 355,155 405,140 380,110 410,155 435,170 360,170" fill="#ffffff" />
            <polygon points="560,100 535,145 585,130 560,100 590,145 615,160 540,160" fill="#ffffff" />
            {/* Front mountain range */}
            <polygon points="-20,320 160,150 340,320" fill="#0f6f73" />
            <polygon points="260,320 460,130 660,320" fill="#0d5f63" />
            <polygon points="540,320 700,170 820,320" fill="#0f6f73" />
            {/* Snow caps (front range) */}
            <polygon points="160,150 125,205 195,190 160,150 200,205 235,225 130,225" fill="#ffffff" />
            <polygon points="460,130 420,190 500,175 460,130 505,190 545,212 415,212" fill="#ffffff" />
            <polygon points="700,170 665,220 735,207 700,170 740,220 775,240 660,240" fill="#ffffff" />
            {/* Ground / snow field */}
            <rect x="0" y="320" width="800" height="80" fill="#eafcfb" />
            {/* Little bubbly pine trees */}
            <g fill="#0d5f63">
              <circle cx="90" cy="345" r="18" />
              <circle cx="115" cy="350" r="14" />
              <circle cx="650" cy="340" r="20" />
              <circle cx="680" cy="348" r="15" />
            </g>
          </svg>
        </div>

        <p className="text-teal-950/90 text-lg leading-relaxed max-w-2xl mx-auto">
          July 19th to July 23rd, 6:15&ndash;8:15pm &mdash; the kids are going to
          have a lot of fun! We feed them dinner every night of VBS.
          Registration link below.
        </p>
        <a
          href="https://sandspringsokgmc.mycokesburyvbs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-3.5 bg-white hover:bg-teal-50 text-teal-950 font-bold rounded-full transition-colors shadow-lg shadow-teal-950/10"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
