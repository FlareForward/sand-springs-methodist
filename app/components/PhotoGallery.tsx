import Link from "next/link";

export default function PhotoGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Community
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Life at Sand Springs Methodist
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            We are more than a Sunday service — we are a family.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="font-bubbly text-[2.55rem] sm:text-[3.1875rem] text-green-800">
            Youth Group
          </h3>
          <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our youth director is dedicated to a youth ministry of fun, worship, fellowship, and practical life applications. Every Wednesday at 4 pm the youth rooms are open for the kids to hang out, play games, watch movies, or learn; Dinner starts at 6:30, and then there is worship and a Bible lesson. There is free time after the lesson for the kids to just play games and have fun. We have active church camps and other activities. There are also mission opportunities as well. Hope to see you there! Parents are welcome to hang out or volunteer.
          </p>
          <div className="mt-8">
            <Link
              href="/youth"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
            >
              Click here to check out the youth! →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
