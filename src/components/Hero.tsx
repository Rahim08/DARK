"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { hero, brand } from "@/lib/content";
import { useScrollSpy } from "@/lib/hooks";
import { EASE } from "@/lib/motion";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

/** One headline line, masked, revealed on load. */
function TitleLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.15, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const active = useScrollSpy(hero.sideRail.map((s) => s.href.slice(1)));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const pageProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-ivory"
    >
      {/* Background — slow push-in + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <div className="hero-push absolute inset-0">
          <Image
            src={hero.image}
            alt="KADR studiya səhnəsi"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_40%,rgba(19,18,16,0.55)_100%)]" />

      {/* Right-edge page progress */}
      <motion.div
        className="absolute right-0 top-0 z-20 hidden h-full w-px bg-line-d md:block"
        style={{ scaleY: pageProgress, originY: 0 }}
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 bg-ivory"
          style={{ scaleY: pageProgress, originY: 0 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: fgY, opacity: fadeOut }}
        className="container-x relative z-10 flex h-full flex-col justify-end pb-14 pt-32 md:pb-16"
      >
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          className="eyebrow text-mut-d"
        >
          {hero.kicker[0]}
          <span className="inline-block h-1 w-1 rounded-full bg-clay" />
          {hero.kicker[1]}
        </motion.p>

        {/* Headline */}
        <h1 className="display-xl mt-6 text-ivory">
          <TitleLine delay={0.65}>{hero.title[0]}</TitleLine>
          <TitleLine delay={0.78}>{hero.title[1]}</TitleLine>
          <TitleLine delay={0.91}>
            {hero.title[2]}{" "}
            <span className="font-serif font-medium italic tracking-normal text-sand">
              {brand.name}
            </span>
          </TitleLine>
        </h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.25 }}
          className="mt-7 max-w-md text-base leading-relaxed text-mut-d md:text-lg"
        >
          {hero.text}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.45 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Btn href="#elaqe" variant="solid">
              {hero.ctaPrimary}
            </Btn>
          </Magnetic>
          <Magnetic>
            <Btn href="#elaqe" variant="outline">
              {hero.ctaSecondary}
            </Btn>
          </Magnetic>
        </motion.div>

        {/* Showreel */}
        <motion.a
          href="#media"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="group mt-10 inline-flex items-center gap-4"
          data-cursor
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/40 transition-all duration-500 group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink">
            <Icon
              name="play"
              size={15}
              className="translate-x-[1px] transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span className="font-display text-[0.6875rem] font-bold tracking-[0.22em] text-mut-d transition-colors duration-500 group-hover:text-ivory">
            {hero.showreel}
          </span>
        </motion.a>
      </motion.div>

      {/* Right side rail — the four directions */}
      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 1.5 }}
        style={{ opacity: fadeOut }}
        className="absolute right-12 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-6 xl:flex"
        aria-label="Bölmələr"
      >
        <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-d">
          01 / 06
        </span>
        {hero.sideRail.map((s, i) => {
          const isActive = active === s.href.slice(1);
          return (
            <a
              key={s.href}
              href={s.href}
              className={`group flex items-center gap-3 transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
            >
              <span className="font-display text-[0.5625rem] font-bold tracking-[0.2em] text-mut-d">
                0{i + 1}
              </span>
              <span
                className={`font-display text-[0.6875rem] font-bold tracking-[0.3em] transition-colors duration-500 ${
                  isActive ? "text-ivory" : "text-mut-d group-hover:text-ivory"
                }`}
              >
                {s.label.toUpperCase()}
              </span>
              <span
                className={`h-px bg-ivory transition-all duration-500 ${
                  isActive ? "w-8" : "w-0 group-hover:w-8"
                }`}
              />
            </a>
          );
        })}
      </motion.aside>

      {/* Bottom-right tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="absolute bottom-9 right-8 z-10 hidden font-display text-[0.5625rem] font-bold tracking-[0.34em] text-mut-d md:block xl:right-12"
      >
        {hero.bottomRight}
      </motion.p>
    </section>
  );
}
