/**
 * LEADERSHIP PHOTOS
 * =================
 * To update leader photos:
 * 1. Add headshot images to /public/leadership/
 *    Recommended: square crop, .jpg or .webp, min 400×400px
 * 2. Update the `src` field in the leaders array below.
 * 3. The pastor photo is already loaded from /public/leadership/pastor.jpg
 */

import Image from "next/image";

interface Leader {
  name: string;
  role: string;
  bio: string;
  src: string | null;
  email?: string;
}

const leaders: Leader[] = [
  {
    name: "Reverend Cole Fields",
    role: "Lead Pastor",
    bio: "Pastor John has served Sand Springs Methodist for over 12 years. He holds a Master of Divinity from Asbury Theological Seminary and is passionate about expository preaching, discipleship, and connecting the local church to the community. He and his wife Rachel have three children.",
    src: "/leadership/pastor.jpg",
    email: "pastor@sandspringsmethodist.org",
  },
  {
    name: "Sarah Johnson",
    role: "Youth & Children's Director",
    bio: "Sarah leads our thriving youth and children's ministries with creativity and compassion. She believes that faith formed in childhood lasts a lifetime. Sarah organizes weekly youth group, VBS, and family discipleship events throughout the year.",
    src: null,
    email: "youth@sandspringsmethodist.org",
  },
  {
    name: "Michael Torres",
    role: "Worship Leader",
    bio: "Michael leads our congregation in worship each Sunday, blending traditional Methodist hymns with contemporary praise. He studied music ministry at Oral Roberts University and also leads our Thursday evening worship gathering.",
    src: null,
    email: "worship@sandspringsmethodist.org",
  },
];

function LeaderCard({ name, role, bio, src, email }: Leader) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-600 flex items-end justify-start p-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg viewBox="0 0 100 120" className="w-40 h-40" fill="white">
                <circle cx="50" cy="38" r="24" />
                <path d="M5 120 Q5 78 50 78 Q95 78 95 120Z" />
              </svg>
            </div>
            <div className="absolute top-3 right-3">
              <span className="text-xs text-white/50 bg-black/20 rounded px-2 py-1">
                Add photo → /public/leadership/
              </span>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-blue-900 leading-tight">{name}</h3>
        <p className="text-amber-600 font-semibold text-sm mt-0.5 mb-4">{role}</p>
        <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 mt-4 text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        )}
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Meet the Team
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Our Leadership
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Our staff and leaders are dedicated to shepherding this congregation with humility, faithfulness, and love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">
            Interested in serving on our team or in a volunteer role?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold rounded-lg transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
