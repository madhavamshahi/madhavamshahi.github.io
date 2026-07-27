"use client";

import { motion } from "motion/react";
import { Reveal, SectionLabel, MaskLines } from "./Primitives";
import { awards, education } from "../lib/content";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <SectionLabel index="03" title="About" />

        <div className="mt-7 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <MaskLines
              as="h2"
              className="font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-extrabold"
              lines={["School, and a few", "other things."]}
            />
          </div>
          <Reveal delay={0.12} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[0.96rem] leading-relaxed text-bronze-500">
              I came to the US from Lucknow on a scholarship and have been in
              Texas since, though I&apos;m in Miami now.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <ul className="lg:col-span-8">
            {awards.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(i, 4) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative border-t border-bronze-200 py-5 last:border-b"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <div className="flex items-start gap-5 sm:gap-7">
                  <span className="kicker mt-1.5 shrink-0 text-bronze-300 transition-colors group-hover:text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-semibold tracking-tight transition-colors duration-300 group-hover:text-amber">
                      {a.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-[0.92rem] leading-relaxed text-bronze-500">
                      {a.detail}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Rides alongside the taller list on wide screens. */}
          <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <Reveal>
              <p className="kicker text-bronze-400">Education</p>
              <div className="mt-4 space-y-px overflow-hidden rounded-2xl border border-bronze-200 bg-bronze-200">
                {education.map((e) => (
                  <div key={e.school} className="bg-paper p-5">
                    <p className="text-[0.98rem] font-semibold tracking-tight">
                      {e.school}
                    </p>
                    <p className="mt-1 text-[0.86rem] text-bronze-600">
                      {e.degree}
                    </p>
                    <p className="kicker mt-2.5 text-bronze-400">{e.period}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
