const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Biblical Teaching",
    description: "Every sermon is grounded in the Word of God. Expect messages that are honest, hopeful, and rooted in context — relevant to your everyday life, your struggles, and your questions.",
    accent: "border-t-amber-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Family Friendly",
    description: "From nursery care for the littlest ones to youth programs for teens, every member of your family has a place here. Children's ministry runs during Sunday worship so parents can engage fully.",
    accent: "border-t-blue-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Focused",
    description: "Faith was never meant to be lived alone. We are deeply invested in the Sand Springs community — from local outreach to small groups where real friendships are formed over scripture and life together.",
    accent: "border-t-amber-500",
  },
];

export default function WhatToExpect() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            First Time Visiting?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            What to Expect
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We want your first visit to feel comfortable and welcoming. Here is a glimpse of what you will find when you walk through our doors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-md border border-slate-100 border-t-4 ${card.accent} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-900 mb-3">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#visit"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Plan Your First Visit
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
