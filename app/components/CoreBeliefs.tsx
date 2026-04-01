import Image from "next/image";

export default function CoreBeliefs() {
  return (
    <section id="beliefs" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-16 items-start">

          {/* Left: Bible photo */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28">
              <div className="relative h-[448px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/photos/church-1.jpg"
                  alt="Open Bible in the sanctuary at Sand Springs Methodist"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-serif text-lg font-bold leading-snug">
                    &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
                  </p>
                  <p className="text-amber-300 text-sm mt-1">— Psalm 119:105</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: heading */}
          <div className="lg:col-span-3">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Our Foundation
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
                What We Believe
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                We believe that the Bible is the primary authority in our lives. We believe that the Bible is the infallible Word of God. We believe that repentance is the beginning of our salvation, and that God is calling us all to a new life of servanthood and purpose.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
