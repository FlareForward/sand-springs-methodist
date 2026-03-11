import Image from "next/image";

export default function PastorMessage() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Pastor photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-72 h-80 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/leadership/pastor.jpg"
                  alt="Pastor — Sand Springs Methodist Church"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
                {/* Subtle bottom gradient for name overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-serif text-lg font-bold leading-tight">Pastor John Williams</p>
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
                Welcome to Sand Springs Methodist Church. Whether you are
                exploring faith for the very first time, returning after years
                away, or looking for a church family to call home, we are so
                glad you are here.
              </p>
              <p>
                We are a congregation that believes deeply in the grace of
                God, the authority of Scripture, and the power of community.
                We gather not because we have it all figured out, but because
                we are on this journey together — encouraging one another,
                serving our neighbors, and growing in the love of Christ.
              </p>
              <p>
                I invite you to join us any Sunday — Contemporary at 9:00 AM,
                Small Groups at 10:00 AM, or Traditional at 11:00 AM. Come as you are. There is a place for
                you at this table.
              </p>
            </div>

            <blockquote className="border-l-4 border-amber-500 pl-5 py-1">
              <p className="font-serif text-xl text-blue-800 italic leading-relaxed">
                &ldquo;For where two or three gather in my name, there am I with them.&rdquo;
              </p>
              <cite className="text-sm text-slate-500 mt-2 block not-italic">
                — Matthew 18:20
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
