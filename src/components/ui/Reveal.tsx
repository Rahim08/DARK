"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

/** Fade up on scroll — the workhorse entrance. */
export function Rise({
  children,
  delay = 0,
  y = 36,
  duration = 0.9,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Simple opacity-only reveal. */
export function Fade({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line-by-line reveal for display headlines. */
export function Lines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "p";
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            initial={{ y: "112%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
