"use client";

import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { LogoMark, Magnetic } from "./Primitives";
import { profile } from "../lib/content";

const SECTIONS = [
  { id: "altops", label: "AltOps" },
  { id: "work", label: "Work" },
  { id: "built", label: "Built" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });
  const [lifted, setLifted] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Freeze the page behind the mobile menu, and let Escape close it.
  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ember via-amber to-gold"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-40"
      >
        <div
          className={`mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 ${
            lifted ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#top"
            aria-label="Back to top"
            className="group -m-2 flex shrink-0 items-center gap-2.5 p-2"
          >
            <LogoMark className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
            <span
              className={`hidden whitespace-nowrap font-display text-[1rem] font-extrabold transition-opacity duration-300 sm:inline ${
                lifted ? "opacity-100" : "opacity-0"
              }`}
            >
              Madhavam Shahi
            </span>
          </a>

          <nav
            className={`hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 transition-all duration-500 md:flex ${
              lifted
                ? "bg-paper/80 shadow-soft ring-1 ring-bronze-200/70 backdrop-blur-md"
                : ""
            }`}
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full px-3.5 py-2.5 text-[0.82rem] font-medium text-bronze-600 transition-colors hover:bg-bronze-100 hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.28}>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="mail"
                data-cursor-label="Say hi"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-[0.82rem] font-medium text-cream shadow-soft"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <span className="relative">Get in touch</span>
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
              className="grid h-10 w-10 place-items-center rounded-full border border-bronze-200 bg-paper/80 md:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-4 bg-ink" />
                <span className="block h-px w-4 bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col bg-ink text-cream"
            >
              <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-50" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-60"
                style={{
                  background:
                    "radial-gradient(18rem 12rem at 30% 80%, rgba(229,72,77,0.35), transparent 70%), radial-gradient(16rem 11rem at 78% 70%, rgba(232,137,58,0.30), transparent 70%)",
                }}
              />

              <div className="relative flex items-center justify-between px-5 py-5">
                <div className="flex items-center gap-2.5">
                  <LogoMark className="h-5 w-5" />
                  <span className="font-display text-[1rem] font-extrabold">
                    Madhavam Shahi
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenu(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 1l12 12M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="relative flex flex-1 flex-col justify-center px-5 pb-16">
                {SECTIONS.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setMenu(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.16 + i * 0.055,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-baseline gap-4 border-b border-cream/10 py-4 font-display text-[2.1rem] font-extrabold"
                  >
                    <span className="kicker text-cream/25">0{i + 1}</span>
                    {s.label}
                  </motion.a>
                ))}
                <motion.a
                  href={`mailto:${profile.email}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.48 }}
                  className="mt-8 text-[0.9rem] text-cream/50 underline decoration-cream/25 underline-offset-4"
                >
                  {profile.email}
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
