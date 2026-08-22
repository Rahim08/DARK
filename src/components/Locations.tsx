"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { locations } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function LocationCard({
  item,
  dim,
  className = "",
}: {
  item: (typeof locations.items)[number];
  dim?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group flex flex-col border border-line-l bg-ivory transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${className} ${
        dim ? "opacity-70" : "opacity-100"
      }`}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 44vw, 78vw"
          className="object-cover transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
          style={{ filter: dim ? "saturate(0.75) brightness(0.92)" : "none" }}
        />
        <span className="absolute left-5 top-5 bg-ivory px-2 py-1 font-display text-[0.5625rem] font-bold tracking-[0.24em] text-ink">
          {item.no}
        </span>
        <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Icon name="arrow-up-right" size={16} className="transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <h3 className="display-sm">{item.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.08em] text-mut-l">{item.tags}</p>
          <span className="h-px w-8 bg-line-l transition-all duration-700 group-hover:w-14" />
        </div>
      </div>
    </article>
  );
}

export default function Locations() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [active, setActive] = useState(0);
  const { items } = locations;

  // ---- Curtain ------------------------------------------------
  const { scrollYProgress: curtainP } = useScroll({
    target: curtainRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(curtainP, [0, 0.5], ["101vh", "0vh"]);
  const backdropY = useTransform(curtainP, [0, 0.5], ["0%", "-14%"]);

  // ---- Desktop scroll-jacked gallery ---------------------------
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const w = trackRef.current.scrollWidth;
      const pad = window.innerWidth >= 1280 ? 72 : 56;
      setMaxX(Math.max(0, w + pad - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress: galleryP } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(galleryP, [0, 1], [0, -maxX]);

  useMotionValueEvent(galleryP, "change", (v) => {
    setActive(Math.round(v * (items.length - 1)));
  });

  const step = (dir: 1 | -1) => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;
    const range = scene.offsetHeight - window.innerHeight;
    if (range <= 0) return;
    const base = scene.offsetTop + range * (active / (items.length - 1));
    const next = Math.min(
      Math.max(0, base + dir * (range / (items.length - 1))),
      scene.offsetTop + range
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: next, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="locations" className="scroll-mt-20 bg-ivory text-ink">
      {/* ============ Cinematic dark → ivory curtain ============ */}
      <div ref={curtainRef} className="curtain-scene relative h-[200vh]">
        <div className="curtain-sticky sticky top-0 h-[100svh] overflow-hidden">
          {/* Dark backdrop */}
          <div className="curtain-backdrop absolute inset-0 bg-ink">
            <motion.div
              style={{ y: backdropY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p
                className="text-outline-d whitespace-nowrap font-display text-[clamp(5rem,18vw,16rem)] font-black leading-none tracking-tight"
                aria-hidden="true"
              >
                STUDIO
              </p>
              <p className="absolute bottom-10 left-10 font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-d">
                {locations.index} — {locations.label}
              </p>
            </motion.div>
          </div>

          {/* Rising ivory panel — carries the section header */}
          <motion.div
            style={{ y: panelY }}
            className="curtain-panel absolute inset-0 flex items-center bg-ivory text-ink"
          >
            <div className="container-x w-full">
              <Rise delay={0.15} className="flex items-baseline justify-between">
                <p className="eyebrow text-mut-l">{locations.label}</p>
                <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-l">
                  {locations.index} / 06
                </span>
              </Rise>

              <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <Lines
                  as="h2"
                  lines={locations.title}
                  className="display-lg"
                  delay={0.2}
                  stagger={0.12}
                />
                <div className="flex items-end justify-between gap-8 lg:flex-col lg:items-end">
                  <p className="text-base leading-relaxed text-mut-l">
                    {locations.rightText[0]}
                    <br />
                    {locations.rightText[1]}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => step(-1)}
                      aria-label="Əvvəlki məkan"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-line-l transition-colors duration-500 hover:bg-ink hover:text-ivory"
                    >
                      <Icon name="arrow-left" size={17} />
                    </button>
                    <button
                      onClick={() => step(1)}
                      aria-label="Növbəti məkan"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-line-l transition-colors duration-500 hover:bg-ink hover:text-ivory"
                    >
                      <Icon name="arrow-right" size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ Desktop — scroll-driven horizontal gallery ============ */}
      <div ref={sceneRef} className="hscroll-scene relative hidden md:block" style={{ height: "280vh" }}>
        <div className="hscroll-sticky sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="hscroll-track flex items-center gap-6 will-change-transform"
            data-cursor
            data-cursor-label="SÜRÜŞ"
          >
            {items.map((item, i) => (
              <div
                key={item.no}
                className="flex-none"
                style={{ width: "min(44vw, 560px)", transform: `scale(${i === active ? 1 : 0.88})` }}
              >
                <LocationCard item={item} dim={i !== active} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============ Mobile — natural swipe ============ */}
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:hidden">
        {items.map((item) => (
          <div key={item.no} className="w-[80vw] max-w-[340px] flex-none snap-center">
            <LocationCard item={item} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="container-x flex justify-center py-14 md:py-16">
        <Magnetic>
          <Btn href="#elaqe" variant="ink" icon="arrow-up-right">
            {locations.cta}
          </Btn>
        </Magnetic>
      </div>
    </section>
  );
}
