"use client";

import { useState } from "react";
import Image from "next/image";

interface Belief {
  title: string;
  content: string;
}

const beliefs: Belief[] = [
  {
    title: "God",
    content: "We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit. God is infinite in holiness and all other perfections. He is the Creator and Sustainer of all things, whose sovereign purposes are accomplished in history and in the lives of all people. God is love, and His love is revealed most fully in the gift of His Son, Jesus Christ.",
  },
  {
    title: "Revelation",
    content: "We believe the Bible — both the Old and New Testaments — is the inspired, infallible Word of God. It is the supreme and sufficient authority for all matters of faith and conduct. Scripture reveals God's nature, humanity's need, and the way of salvation through Jesus Christ. We are committed to reading, teaching, and living by its truths.",
  },
  {
    title: "Mankind",
    content: "We believe that God created human beings — male and female — in His own image, with dignity, worth, and purpose. Every person is made to know God, reflect His character, and live in loving community with others. Human beings are uniquely endowed with moral responsibility and the capacity for relationship with their Creator.",
  },
  {
    title: "The Fall",
    content: "We believe that Adam and Eve, through willful disobedience, brought sin into the human race. As a result, all people are born with a sinful nature, separated from God and unable to save themselves. Sin has affected every part of human life — our minds, wills, and relationships. This separation from God is the root cause of all human suffering and death.",
  },
  {
    title: "Salvation",
    content: "We believe that salvation from sin and its consequences is available to all who repent and trust in Jesus Christ. Through His perfect life, atoning death on the cross, and bodily resurrection, Christ paid the penalty for sin and conquered death. Salvation is received by grace through faith — not by human works or merit — and results in forgiveness, new life, and the indwelling of the Holy Spirit.",
  },
  {
    title: "The Church",
    content: "We believe the Church is the body of Christ on earth — a community of believers called to worship God, grow in discipleship, and proclaim the Gospel to all the world. The local church exists to equip believers for the work of ministry, to care for one another in love, and to serve the surrounding community as an expression of Christ's compassion and justice.",
  },
  {
    title: "Resurrection & Eternal Life",
    content: "We believe in the bodily resurrection of Jesus Christ and the promise that all who belong to Him will also be raised. At the end of the age, Christ will return in glory to judge the living and the dead. Those who have received salvation will enter into eternal life with God in the new creation. This hope shapes how we live, serve, and love today.",
  },
];

export default function CoreBeliefs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="beliefs" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-16 items-start">

          {/* Left: stained glass photo */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/photos/church-2.jpg"
                  alt="Stained glass and scripture at Sand Springs Methodist"
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
              <div className="bg-blue-900 rounded-2xl p-6 text-white">
                <p className="font-serif text-lg font-semibold mb-2">Questions about our beliefs?</p>
                <p className="text-blue-200 text-sm leading-relaxed mb-4">
                  We would love to talk. Reach out to us — no question is too big or too small.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-sm rounded-lg transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Our Foundation
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
                What We Believe
              </h2>
              <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                Our beliefs are rooted in historic Methodist and Wesleyan theology, shaped by Scripture, tradition, reason, and experience.
              </p>
            </div>

            <div className="space-y-2.5">
              {beliefs.map((belief, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 ${
                      isOpen
                        ? "border-amber-400/60 bg-white shadow-md"
                        : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            isOpen
                              ? "bg-amber-500 text-blue-900"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span
                          className={`font-serif text-lg font-bold transition-colors ${
                            isOpen ? "text-blue-900" : "text-slate-700"
                          }`}
                        >
                          {belief.title}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-amber-500" : "text-slate-400"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-100 pt-4">
                          <p className="text-slate-600 leading-relaxed text-base">
                            {belief.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
