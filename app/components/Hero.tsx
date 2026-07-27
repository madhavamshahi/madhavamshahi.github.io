"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useEffect } from "react";
import { LogoMark, Magnetic } from "./Primitives";
import { profile } from "../lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  // Pointer-tracked warm light. Springs so it trails the cursor rather than
  // snapping, which reads as light instead of as an object following you.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.35);
  const gx = useSpring(px, { stiffness: 55, damping: 22 });
  const gy = useSpring(py, { stiffness: 55, damping: 22 });
  const glowX = useTransform(gx, (v) => `${(v * 100).toFixed(2)}%`);
  const glowY = useTransform(gy, (v) => `${(v * 100).toFixed(2)}%`);
  const glow = useMotionTemplate`radial-gradient(46rem 34rem at ${glowX} ${glowY}, rgba(232,137,58,0.22), transparent 60%), radial-gradient(34rem 26rem at 84% 8%, rgba(229,72,77,0.13), transparent 62%), radial-gradient(36rem 26rem at 8% 88%, rgba(217,164,65,0.15), transparent 62%)`;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth);
      py.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py]);

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center overflow-hidden pb-16 pt-32 sm:pt-36"
    >
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(120%_80%_at_50%_25%,#000,transparent)]" />
      {/* Soft radial washes — no blur() filter, which is what made this
          repaint expensively on scroll. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: glow }}
      />

      <div className="relative mx-auto w-full max-w-[80rem] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="kicker text-bronze-500">{profile.role}</span>
          <span className="h-3 w-px bg-bronze-300" />
          <span className="kicker text-bronze-400">{profile.location}</span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.8rem,9.5vw,7.5rem)] font-extrabold">
          {["Madhavam", "Shahi"].map((word, i) => (
            <span key={word} className="mask-line">
              <motion.span
                className={`block ${i === 1 ? "text-gradient" : ""}`}
                initial={{ y: "112%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, delay: 0.28 + i * 0.09, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-8 border-t border-bronze-200 pt-8 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.62, ease: EASE }}
            className="md:col-span-5"
          >
            <div className="flex items-start gap-2.5">
              <LogoMark className="mt-1.5 h-4 w-4 shrink-0" />
              <p className="max-w-md text-[1.3rem] font-medium leading-[1.3] tracking-tight text-bronze-700 sm:text-[1.5rem]">
                {profile.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.72, ease: EASE }}
            className="md:col-span-5 md:col-start-8"
          >
            <p className="max-w-lg text-[0.98rem] leading-relaxed text-bronze-500">
              {profile.intro}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.3}>
                <a
                  href="#altops"
                  data-cursor="scroll"
                  data-cursor-label="Look"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-5 py-3 text-[0.85rem] font-medium shadow-soft transition-colors hover:border-amber/50"
                >
                  What I&apos;m working on
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:translate-y-0.5">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M5 1v8M1.5 5.5 5 9l3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </Magnetic>
              {/* Grouped so the two wrap together rather than one stranding
                  itself on the next line at narrow widths. */}
              <div className="flex items-center gap-4">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex min-h-11 items-center text-[0.88rem] text-bronze-500"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex min-h-11 items-center text-[0.88rem] text-bronze-500"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
