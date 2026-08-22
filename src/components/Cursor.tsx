"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor: a small dot with a trailing ring.
 * The ring expands over links/buttons and shows a context label
 * (e.g. "SÜRÜŞ", "OYNAT") when the target carries data-cursor-label.
 * Disabled entirely for touch devices and reduced motion.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [idle, setIdle] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 320, damping: 28, mass: 0.5 });
  const ry = useSpring(my, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    const armIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      setIdle(false);
      idleTimer = setTimeout(() => {
        setHovering(false);
        setLabel(null);
        setIdle(true);
      }, 2400);
    };

    const move = (e: MouseEvent) => {
      setEnabled(true);
      armIdle();
      mx.set(e.clientX);
      my.set(e.clientY);
      const t = (e.target as HTMLElement).closest(
        "a, button, [role='button'], [data-cursor]"
      ) as HTMLElement | null;
      setHovering(!!t);
      setLabel(t?.dataset.cursorLabel ?? null);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[120] h-[7px] w-[7px] rounded-full bg-ivory mix-blend-difference"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hovering ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[119] flex items-center justify-center rounded-full border border-ivory/50"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 76 : hovering ? 46 : 30,
          height: label ? 76 : hovering ? 46 : 30,
          backgroundColor: label ? "rgba(244,241,234,1)" : "rgba(244,241,234,0)",
          opacity: idle ? 0 : 1,
        }}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      >
        {label && (
          <span className="font-display text-[9px] font-bold tracking-[0.2em] text-ink">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
