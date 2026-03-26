"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sermons", href: "#sermons" },
  { label: "Events", href: "#events" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-900 shadow-lg"
          : "bg-blue-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={handleLinkClick}
          >
            {/* Global Methodist three-in-one circle symbol */}
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-11 h-11" xmlns="http://www.w3.org/2000/svg">
                {/* Three overlapping blue circles — Trinity / Global Methodist emblem */}
                {/* Top circle */}
                <circle cx="50" cy="32" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                {/* Bottom-left circle */}
                <circle cx="32" cy="65" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                {/* Bottom-right circle */}
                <circle cx="68" cy="65" r="28" fill="none" stroke="#38bdf8" strokeWidth="7" opacity="0.9" />
                {/* Center dot where all three meet */}
                <circle cx="50" cy="54" r="5" fill="#7dd3fc" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="block font-serif text-sky-300 font-bold text-lg leading-tight">
                Sand Springs
              </span>
              <span className="block text-sky-300 text-xs tracking-widest uppercase font-medium">
                Methodist Church
              </span>
            </div>
            <span className="sm:hidden font-serif text-sky-300 font-bold text-base leading-tight">
              Sand Springs Methodist
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#give"
              className="ml-3 px-4 py-2 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-blue-900 rounded-md transition-colors shadow-sm"
            >
              Give
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-blue-950 border-t border-blue-800 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="px-3 py-3 text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#give"
            onClick={handleLinkClick}
            className="mt-2 px-3 py-3 text-base font-semibold bg-amber-500 hover:bg-amber-400 text-blue-900 rounded-md transition-colors text-center"
          >
            Give
          </a>
        </nav>
      </div>
    </header>
  );
}
