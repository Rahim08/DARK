"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { gear } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { usePointerFine, usePrefersReducedMotion } from "@/lib/hooks";

function TiltCard({ item }: { item: (typeof gear.items)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduce = usePrefersReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16, mass: 0.3 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16, mass: 0.3 });

  const onMove = (e: React.MouseEvent) => {
    if (!fine || reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(py * -2.6);
    ry.set(px * 3);
    ref.current.style.setProperty("--lx", `${(px + 0.5) * 100}%`);
    ref.current.style.setProperty("--ly", `${(py + 0.5) * 100}%`);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
      className="group relative flex flex-col border border-line-d bg-ink-2"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        {/* Cursor-follow light */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--lx, 50%) var(--ly, 50%), rgba(244,241,234,0.16), transparent 65%)",
          }}
        />
        <span className="absolute left-4 top-4 bg-ink/70 px-2 py-1 font-display text-[0.5625rem] font-bold tracking-[0.24em] text-ivory backdrop-blur-sm">
          {item.tag}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-6" style={{ transform: "translateZ(24px)" }}>
        <h3 className="display-sm">{item.name}</h3>
        <div className="flex items-center justify-between">
          <a
            href="#elaqe"
            className="link-u font-display text-[0.6875rem] font-bold tracking-[0.18em] text-mut-d"
          >
            İcarəyə götür
          </a>
          <Icon
            name="arrow-up-right"
            size={16}
            className="text-faint-d transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ivory"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Gear() {
  return (
    <section id="gear" className="scroll-mt-20 bg-ink text-ivory">
      <div className="container-x section-pad">
        {/* Header */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Rise className="flex items-baseline justify-between">
              <p className="eyebrow text-mut-d">{gear.label}</p>
              <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-d lg:hidden">
                {gear.index} / 06
              </span>
            </Rise>
            <Lines as="h2" lines={gear.title} className="display-lg mt-7" delay={0.1} />
          </div>
          <Rise delay={0.2} className="lg:text-right">
            <p className="text-base leading-relaxed text-mut-d">
              {gear.text[0]}
              <br />
              {gear.text[1]}
            </p>
            <div className="mt-6">
              <Magnetic>
                <Btn href="#elaqe" variant="outline" size="sm">
                  {gear.cta}
                </Btn>
              </Magnetic>
            </div>
          </Rise>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {gear.items.map((item) => (
            <TiltCard key={item.name} item={item} />
          ))}
        </div>

        {/* Quiet note */}
        <Rise className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-line-d" />
          <p className="font-display text-[0.5625rem] font-bold tracking-[0.3em] text-faint-d">
            AVADANLIQ BRONU — STOK MƏHDUDDUR
          </p>
          <span className="h-px flex-1 bg-line-d" />
        </Rise>
      </div>
    </section>
  );
}
