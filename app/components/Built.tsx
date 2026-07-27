"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useRef } from "react";
import { Reveal, SectionLabel, MaskLines, ArrowOut } from "./Primitives";
import { projects, type Project } from "../lib/content";

const ACCENT: Record<Project["accent"], string> = {
  ember: "rgba(229,72,77,0.20)",
  amber: "rgba(232,137,58,0.20)",
  gold: "rgba(217,164,65,0.20)",
};

function Card({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 150, damping: 20 });
  const smy = useSpring(my, { stiffness: 150, damping: 20 });
  const glowX = useTransform(smx, (v) => `${(v * 100).toFixed(2)}%`);
  const glowY = useTransform(smy, (v) => `${(v * 100).toFixed(2)}%`);
  const glow = useMotionTemplate`radial-gradient(20rem 16rem at ${glowX} ${glowY}, ${ACCENT[project.accent]}, transparent 70%)`;

  const Wrapper = (project.href ? "a" : "div") as "a";

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.8,
        delay: (index % 2) * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      // min-w-0 lets the grid item shrink below its content's intrinsic width;
      // without it a long link label pushed the card past the viewport at 320px.
      className="group relative min-w-0"
    >
      <Wrapper
        href={project.href}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noopener noreferrer" : undefined}
        data-cursor={project.href ? "open" : undefined}
        data-cursor-label="Open"
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-bronze-200 bg-paper p-6 shadow-soft transition-shadow duration-500 group-hover:shadow-lift sm:p-7"
      >
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[1.6rem] font-extrabold transition-colors duration-300 group-hover:text-amber sm:text-[1.85rem]">
              {project.name}
            </h3>
            <p className="mt-2 max-w-sm text-[0.94rem] font-medium leading-snug text-bronze-600">
              {project.blurb}
            </p>
          </div>
          <span className="kicker shrink-0 pt-2 text-bronze-400">
            {project.year}
          </span>
        </div>

        <p className="relative mt-4 flex-1 text-[0.9rem] leading-relaxed text-bronze-500">
          {project.detail}
        </p>

        <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-bronze-200 pt-5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-bronze-100 px-2.5 py-1 text-[0.7rem] font-medium text-bronze-500"
            >
              {t}
            </span>
          ))}
          {project.href && (
            <span className="ml-auto flex items-center gap-1.5 break-all text-[0.78rem] font-medium text-bronze-400 transition-colors group-hover:text-amber">
              {project.linkLabel ?? "Visit"}
              <span className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowOut />
              </span>
            </span>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export function Built() {
  return (
    <section id="built" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <SectionLabel index="02" title="Built" />

        <div className="mt-7 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <MaskLines
              as="h2"
              className="font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-extrabold"
              lines={[
                "Things I made",
                <span key="g" className="text-gradient">
                  on my own time.
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.12} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[0.96rem] leading-relaxed text-bronze-500">
              Some of these worked, some didn&apos;t. One of them helped people
              find oxygen during a pandemic, which still means the most to me.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
