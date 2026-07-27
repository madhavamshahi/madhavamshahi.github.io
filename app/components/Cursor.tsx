"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

/**
 * A ring that trails the pointer, plus a label pill over interactive elements.
 *
 * The native cursor is deliberately left visible — hiding it and drawing a
 * small dot instead made the pointer genuinely hard to find, particularly at
 * night. The ring is white with a dark outline on both edges, so it reads on
 * the cream sections and the near-black ones alike. (mix-blend-mode was the
 * obvious approach and doesn't work here: the fixed, z-indexed wrapper is its
 * own stacking context, so the ring would only blend against that wrapper's
 * transparent backdrop rather than the page.) The label pill is offset
 * down-right so it never covers the arrow you're trying to see.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = (e.target as HTMLElement)?.closest?.(
        "[data-cursor], a, button"
      ) as HTMLElement | null;

      if (!el) {
        setLabel(null);
        return;
      }
      setLabel(el.dataset.cursor ? el.dataset.cursorLabel ?? "View" : "");
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  // label === "" means "over something clickable, but unlabelled"
  const hovering = label !== null;
  const labelled = Boolean(label);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity .25s" }}
    >
      <motion.div
        className="absolute left-0 top-0 rounded-full border-2 border-white/90"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 0 0 1.5px rgba(33,30,29,0.5), inset 0 0 0 1.5px rgba(33,30,29,0.5)",
        }}
        animate={{
          width: hovering ? 46 : 30,
          height: hovering ? 46 : 30,
          scale: down ? 0.82 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      />

      <AnimatePresence>
        {labelled && (
          <motion.div
            key="label"
            className="absolute left-0 top-0"
            style={{ x: ringX, y: ringY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.18 }}
          >
            <span className="block translate-x-[1.6rem] translate-y-[1.1rem] whitespace-nowrap rounded-full bg-amber px-2.5 py-1 font-mono text-[0.58rem] font-medium uppercase tracking-[0.14em] text-white shadow-soft">
              {label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
