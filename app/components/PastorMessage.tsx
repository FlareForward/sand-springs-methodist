import Image from "next/image";

export default function PastorMessage() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Pastor photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-[432px] h-[480px] sm:w-[480px] sm:h-[630px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/leadership/pastor.jpg"
                  alt="Pastor — Sand Springs Methodist Church"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 432px, 480px"
                  priority
                />
                {/* Subtle bottom gradient for name overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-serif text-lg font-bold leading-tight">Reverend Cole Fields</p>
                  <p className="text-amber-300 text-sm">Lead Pastor</p>
                </div>
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-amber-500/15 rounded-2xl -z-10" />
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-blue-200/30 rounded-full -z-10" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-6">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                From the Pulpit
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                A Message From Our Pastor
              </h2>
            </div>

            <div className="w-14 h-1 bg-amber-500 rounded-full" />

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                A warm hello from Sand Springs Methodist. This church is full
                of welcoming people that strive to be like Jesus.
              </p>
              <p>
                This church is a place where we encourage everyone to find a
                place in the church where they feel called to serve. I will
                also say that if you find this to be your church home, and you
                want to launch a new ministry, I will support you fully so
                long as it is Biblical and rooted in love.
              </p>
              <p>
                I believe that the Bible teaches us the power of God can
                change anyone&rsquo;s life, and everyone is called to serve.
                Do not ignore the Holy Spirit! I pray that God continues to
                reveal Himself to you.
              </p>
              <p className="font-medium text-blue-900">Blessings</p>
            </div>

            <blockquote className="border-l-4 border-amber-500 pl-5 py-1">
              <p className="font-serif text-xl text-blue-800 italic leading-relaxed">
                &ldquo;Awake, O sleeper!<br />
                Rise from the dead,<br />
                and Christ will shine on you!&rdquo;
              </p>
              <cite className="text-sm text-slate-500 mt-2 block not-italic">
                — Ephesians 5:14
              </cite>
            </blockquote>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
            >
              Connect with our pastor
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
