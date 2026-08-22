import type { Variants } from "motion/react";

/** Signature easing: fast start, luxurious settle. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.25, 1, 0.5, 1] as const;

/** Masked line reveal — each line slides up from inside an overflow clip. */
export const lineVariants: Variants = {
  hidden: { y: "112%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 1, ease: EASE, delay: 0.12 * i },
  }),
};

/** Simple rise + fade. */
export const riseVariants: Variants = {
  hidden: { y: 36, opacity: 0 },
  show: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.1 * i },
  }),
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.1 * i },
  }),
};

export const scaleVariants: Variants = {
  hidden: { scale: 0.94, opacity: 0 },
  show: (i: number = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.08 * i },
  }),
};

/** Image clip reveal — a wipe from the bottom. */
export const clipVariants: Variants = {
  hidden: { clipPath: "inset(12% 4% 12% 4%)", scale: 1.06 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.3, ease: EASE },
  },
};
