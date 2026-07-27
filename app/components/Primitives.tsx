"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useId, useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ───────────────────────────── Logo ───────────────────────────── */

/** The AltOps mark — hexagon with an upward peak cut out of it. */
export function LogoMark({
  className = "",
  fill,
}: {
  className?: string;
  fill?: string;
}) {
  const id = useId();
  const useGradient = !fill;
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      {useGradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e5484d" />
            <stop offset="0.55" stopColor="#e8893a" />
            <stop offset="1" stopColor="#d9a441" />
          </linearGradient>
        </defs>
      )}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M110 60 L85 103.3 L35 103.3 L10 60 L35 16.7 L85 16.7 Z M60 34 L83 85 L37 85 Z"
        fill={useGradient ? `url(#${id})` : fill}
      />
    </svg>
  );
}

/* ─────────────────────── Scroll-triggered reveal ─────────────────────── */

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Line-by-line mask reveal — each line rides up from behind a clipped box.
 *
 * The in-view trigger lives on the outer tag, not the lines. Each line starts
 * translated fully below its own clipping wrapper, and an IntersectionObserver
 * clips against ancestor overflow — so a line watching itself would report
 * zero intersection forever and never fire.
 */
export function MaskLines({
  lines,
  className = "",
  delay = 0,
  stagger = 0.08,
  as = "div",
}: {
  lines: (string | ReactNode)[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "h1" | "h2" | "p";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.9, delay: delay + i * stagger, ease: EASE },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ───────────────────────────── Magnetic ───────────────────────────── */

/** Pulls toward the pointer, springs back on exit. Transform only. */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────── Section chrome ───────────────────────── */

export function SectionLabel({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={`flex items-baseline gap-4 ${className}`}>
      <span className="kicker text-amber">{index}</span>
      <span className="kicker text-bronze-500">{title}</span>
    </Reveal>
  );
}

export function ArrowOut({ className = "" }: { className?: string }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2 8 8 2M3.4 2H8v4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
