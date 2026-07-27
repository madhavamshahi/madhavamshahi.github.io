"use client";

import { motion } from "motion/react";
import { LogoMark, Magnetic, MaskLines, Reveal, ArrowOut } from "./Primitives";
import { profile } from "../lib/content";

const LINKS = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "LinkedIn", href: profile.links.linkedin, value: "in/madhavamshahi" },
  { label: "GitHub", href: profile.links.github, value: "@madhavamshahi" },
  { label: "AltOps", href: profile.links.altops, value: "altops.co" },
];

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-ink text-cream">
        <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(90%_70%_at_50%_100%,#000,transparent)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[26rem] opacity-80"
          style={{
            background:
              "radial-gradient(28rem 16rem at 28% 70%, rgba(229,72,77,0.26), transparent 68%), radial-gradient(26rem 15rem at 72% 55%, rgba(232,137,58,0.22), transparent 68%), radial-gradient(22rem 13rem at 52% 90%, rgba(217,164,65,0.18), transparent 68%)",
          }}
        />

        <div className="relative mx-auto max-w-[80rem] px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
          <Reveal>
            <span className="kicker text-cream/30">04 — Contact</span>
          </Reveal>

          <MaskLines
            as="h2"
            className="mt-6 font-display text-[clamp(2rem,6vw,5rem)] font-extrabold"
            lines={[
              "If any of this is",
              <span key="g" className="text-gradient">
                interesting, email me.
              </span>,
            ]}
            stagger={0.09}
          />

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.3}>
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor="mail"
                  data-cursor-label="Email"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cream px-6 py-3.5 text-[0.92rem] font-medium text-ink"
                >
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                  <span className="relative transition-colors duration-500 group-hover:text-white">
                    {profile.email}
                  </span>
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-ink-2 p-5 transition-colors duration-500 hover:bg-bronze-800"
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-ember via-amber to-gold transition-transform duration-700 group-hover:scale-x-100" />
                <p className="kicker text-cream/30">{l.label}</p>
                <p className="mt-2 flex items-center gap-2 break-all text-[0.92rem] font-medium text-cream/85 transition-colors group-hover:text-amber">
                  {l.value}
                  <span className="opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:opacity-100">
                    <ArrowOut />
                  </span>
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-5 py-6 sm:px-8">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-4 w-4" />
            <span className="text-[0.8rem] text-cream/35">
              Madhavam Shahi — {profile.location}
            </span>
          </div>
          <a
            href="#top"
            className="group -m-2 flex min-h-11 items-center gap-2 p-2 text-[0.8rem] text-cream/35 transition-colors hover:text-cream"
          >
            Back to top
            <span className="grid h-5 w-5 place-items-center rounded-full border border-cream/20 transition-transform duration-500 group-hover:-translate-y-0.5">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 9V1M1.5 4.5 5 1l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
