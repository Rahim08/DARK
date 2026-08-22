"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Icon, { type IconName } from "@/components/ui/Icon";
import { usePointerFine, usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Magnetic hover: the button drifts gently toward the cursor and
 * springs back on leave. Disabled for touch + reduced motion.
 */
export function Magnetic({
  children,
  strength = 0.22,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    if (!fine || reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

interface BtnProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ink" | "outline-ink" | "ghost";
  size?: "md" | "sm";
  icon?: IconName | null;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

/** Pill button. Use inside <Magnetic> for the magnetic effect. */
export function Btn({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  icon = "arrow-right",
  className = "",
  type = "button",
  ariaLabel,
}: BtnProps) {
  const cls = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={16} className="btn-arrow" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

/** Convenience: magnetic + button in one. */
export function MagneticBtn(props: BtnProps) {
  return (
    <Magnetic>
      <Btn {...props} />
    </Magnetic>
  );
}
