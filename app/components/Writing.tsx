"use client";

import { motion } from "motion/react";
import { Reveal, SectionLabel, MaskLines, ArrowOut } from "./Primitives";
import { publications } from "../lib/content";

export function Writing() {
  return (
    <section id="writing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <SectionLabel index="03" title="Writing" />

        <div className="mt-7 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <MaskLines
              as="h2"
              className="font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-extrabold"
              lines={["Things I wrote while", "I was learning them."]}
            />
          </div>
          <Reveal delay={0.12} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[0.96rem] leading-relaxed text-bronze-500">
              Flutter and Dart, all from 2021, back when writing something down
              was how I made sure I actually understood it. GeeksforGeeks
              published a couple of them.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12">
          {publications.map((p, i) => (
            <motion.li
              key={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 0.65,
                delay: Math.min(i, 4) * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-t border-bronze-200 last:border-b"
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="read"
                data-cursor-label="Read"
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="kicker shrink-0 pt-1 text-bronze-300 transition-colors group-hover:text-amber sm:w-9">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[1.05rem] font-semibold tracking-tight transition-colors duration-300 group-hover:text-amber sm:text-[1.2rem]">
                      {p.title}
                    </span>
                    <span className="text-[0.82rem] text-bronze-400">
                      {p.outlet}
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-2xl text-[0.92rem] leading-relaxed text-bronze-500">
                    {p.blurb}
                  </span>
                </span>

                <span className="flex shrink-0 items-center gap-2 sm:pt-1">
                  <span className="kicker text-bronze-400">{p.date}</span>
                  <ArrowOut className="text-bronze-300 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
