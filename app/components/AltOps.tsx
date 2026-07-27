"use client";

import { LogoMark, Reveal, MaskLines, Magnetic, ArrowOut } from "./Primitives";
import { venture, profile } from "../lib/content";

export function AltOps() {
  return (
    <section id="altops" className="relative py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-cream">
        <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(100%_60%_at_50%_0%,#000,transparent)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] opacity-80"
          style={{
            background:
              "radial-gradient(30rem 18rem at 20% 20%, rgba(229,72,77,0.22), transparent 68%), radial-gradient(28rem 16rem at 76% 6%, rgba(217,164,65,0.18), transparent 68%)",
          }}
        />

        <div className="relative mx-auto max-w-[80rem] px-5 py-16 sm:px-10 sm:py-20">
          <Reveal className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="kicker text-amber">What I&apos;m working on</span>
            <span className="kicker text-cream/30">{venture.period}</span>
            <span className="kicker text-cream/30">{venture.role}</span>
          </Reveal>

          <Reveal delay={0.05} className="mt-9 flex items-center gap-3.5">
            <LogoMark className="h-10 w-10 sm:h-12 sm:w-12" />
            <span className="font-display text-[2.2rem] sm:text-[2.8rem]">
              <span className="font-extrabold">Alt</span>
              <span className="font-medium text-cream/65">Ops</span>
            </span>
          </Reveal>

          <MaskLines
            as="h2"
            className="mt-7 max-w-4xl font-display text-[clamp(1.9rem,5.2vw,4rem)] font-extrabold"
            lines={[
              venture.headline[0],
              <span key="g" className="text-gradient">
                {venture.headline[1]}
              </span>,
            ]}
            stagger={0.09}
          />

          <div className="mt-12 grid gap-10 border-t border-cream/10 pt-10 md:grid-cols-12 md:gap-14">
            <div className="space-y-5 md:col-span-7">
              {venture.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <p className="max-w-2xl text-[1rem] leading-relaxed text-cream/60">
                    {p}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={0.18}>
                <Magnetic strength={0.28} className="inline-block pt-2">
                  <a
                    href={profile.links.altops}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    data-cursor-label="Visit"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-cream px-5 py-3 text-[0.85rem] font-medium text-ink"
                  >
                    altops.co
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowOut />
                    </span>
                  </a>
                </Magnetic>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <ul className="space-y-6">
                {venture.facts.map((f, i) => (
                  <Reveal key={i} delay={0.08 + i * 0.08}>
                    <li className="border-l-2 border-amber/60 pl-4 text-[0.98rem] leading-relaxed text-cream/70">
                      {f}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
