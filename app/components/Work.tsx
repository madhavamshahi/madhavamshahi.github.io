"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Reveal, SectionLabel, MaskLines } from "./Primitives";
import { roles } from "../lib/content";

export function Work() {
  const [open, setOpen] = useState<number | null>(0);
  const railRef = useRef<HTMLDivElement>(null);

  // The rail fills as the list travels through the viewport.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 65%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <SectionLabel index="01" title="Work" />

        <div className="mt-7 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <MaskLines
              as="h2"
              className="font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-extrabold"
              lines={["Five years of building", "for other people first."]}
            />
          </div>
          <Reveal delay={0.12} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[0.96rem] leading-relaxed text-bronze-500">
              I started at seventeen and haven&apos;t really stopped. Each job
              taught me something the next one needed.
            </p>
          </Reveal>
        </div>

        <div ref={railRef} className="relative mt-14">
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-bronze-200 sm:block">
            <motion.div
              style={{ height: fill }}
              className="w-px bg-gradient-to-b from-ember via-amber to-gold"
            />
          </div>

          <div className="sm:pl-8 lg:pl-12">
            {roles.map((role, i) => {
              const isOpen = open === i;
              return (
                <div key={role.company} className="border-t border-bronze-200">
                  <motion.button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: 0.65,
                      delay: Math.min(i, 3) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex w-full items-start gap-5 py-6 text-left sm:gap-7"
                  >
                    <span
                      className={`absolute -left-8 top-[2.1rem] hidden h-2 w-2 -translate-x-1/2 rounded-full transition-all duration-500 sm:block lg:-left-12 ${
                        isOpen
                          ? "scale-125 bg-amber shadow-[0_0_0_4px_rgba(232,137,58,0.18)]"
                          : "bg-bronze-300 group-hover:bg-amber"
                      }`}
                    />

                    <span className="kicker mt-1.5 w-9 shrink-0 text-bronze-400 transition-colors group-hover:text-amber">
                      {role.year}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-display text-[1.45rem] font-extrabold transition-colors duration-300 group-hover:text-amber sm:text-[1.8rem]">
                          {role.company}
                        </span>
                        <span className="text-[0.88rem] font-medium text-bronze-500">
                          {role.title}
                        </span>
                      </span>
                      <span className="mt-2 block max-w-2xl text-[0.92rem] leading-relaxed text-bronze-500">
                        {role.summary}
                      </span>
                    </span>

                    <span className="hidden shrink-0 pt-2 lg:block">
                      <span className="kicker text-bronze-400">{role.period}</span>
                    </span>

                    <span
                      className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-amber bg-amber text-white"
                          : "border-bronze-200 text-bronze-400 group-hover:border-amber group-hover:text-amber"
                      }`}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1v10M1 6h10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.28 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-8 sm:pl-14 md:grid-cols-12">
                          <ul className="space-y-3.5 md:col-span-8">
                            {role.bullets.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex gap-3.5 text-[0.94rem] leading-relaxed text-bronze-600"
                              >
                                <span className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-amber" />
                                <span className="max-w-2xl">{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap content-start gap-2 md:col-span-4">
                            {role.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-bronze-200 bg-paper px-3 py-1.5 text-[0.72rem] font-medium text-bronze-500"
                              >
                                {t}
                              </span>
                            ))}
                            <span className="mt-1 block w-full lg:hidden">
                              <span className="kicker text-bronze-400">
                                {role.period}
                              </span>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-bronze-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
