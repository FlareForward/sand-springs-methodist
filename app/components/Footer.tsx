const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Leadership", href: "#leadership" },
  { label: "Visit Us", href: "#visit" },
  { label: "Give", href: "#give" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-200">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-11 h-11" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="32" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                  <circle cx="32" cy="65" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                  <circle cx="68" cy="65" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                  <circle cx="50" cy="54" r="5" fill="#7dd3fc" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-white font-bold text-lg leading-tight">
                  Sand Springs Methodist Church
                </span>
                <span className="block text-amber-400 text-xs tracking-widest uppercase font-medium">
                  Sand Springs, Oklahoma
                </span>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-sm">
              A congregation committed to the grace of God, the truth of
              Scripture, and the love of neighbor. All are welcome at the table
              of Christ.
            </p>
            <div className="space-y-1.5 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                319 N. Main St, Sand Springs, OK 74063
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+19182455955" className="hover:text-amber-400 transition-colors">
                  (918) 245-5955
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@sandspringsmethodist.org" className="hover:text-amber-400 transition-colors">
                  info@sandspringsmethodist.org
                </a>
              </p>
            </div>
          </div>

          {/* Service times */}
          <div>
            <h3 className="text-white font-serif font-bold text-base mb-4">Sunday Schedule</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-amber-500 pl-4">
                <p className="text-white text-sm font-semibold">9:00 AM</p>
                <p className="text-blue-300 text-sm">Contemporary Service</p>
              </div>
              <div className="border-l-2 border-blue-400 pl-4">
                <p className="text-white text-sm font-semibold">10:00 AM</p>
                <p className="text-blue-300 text-sm">Small Group Studies</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <p className="text-white text-sm font-semibold">11:00 AM</p>
                <p className="text-blue-300 text-sm">Traditional Service</p>
              </div>
              <div className="border-l-2 border-slate-600 pl-4">
                <p className="text-white text-sm font-semibold">Office Hours</p>
                <p className="text-blue-300 text-sm">Mon – Fri: 9 AM – 4 PM</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-serif font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-amber-400 text-sm transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <svg
                      className="w-3 h-3 text-blue-600 group-hover:text-amber-400 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-xs text-center sm:text-left">
            &copy; {currentYear} Sand Springs Methodist Church. All rights reserved.
          </p>
          <p className="text-blue-500 text-xs text-center sm:text-right">
            Global Methodist Denomination &bull; Sand Springs, OK
          </p>
        </div>
      </div>
    </footer>
  );
}
