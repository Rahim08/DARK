"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { production } from "@/lib/content";
import { Lines, Rise, Fade } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function StepPanel({ step }: { step: (typeof production.steps)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const capY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className="relative flex min-h-[92svh] flex-col justify-center py-20">
      <span
        className="text-outline-d pointer-events-none absolute right-0 top-8 select-none font-display text-[clamp(5rem,14vw,10rem)] font-black leading-none"
        aria-hidden="true"
      >
        {step.no}
      </span>

      <Rise>
        <p className="eyebrow text-mut-d">
          {step.no} / {String(production.steps.length).padStart(2, "0")}
        </p>
      </Rise>
      <Lines as="h3" lines={[step.title]} className="display-md mt-5 max-w-xl" delay={0.1} />
      <Rise delay={0.2}>
        <p className="mt-4 max-w-md text-base leading-relaxed text-mut-d">{step.text}</p>
      </Rise>

      {/* Parallax image */}
      <div className="relative mt-10 aspect-[4/3] overflow-hidden">
        <motion.div style={{ y: imgY }} className="h-full w-full will-change-transform">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(min-width: 1024px) 52vw, 92vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Caption — moves at its own speed */}
      <motion.div
        style={{ y: capY }}
        className="mt-5 flex items-center justify-between opacity-80"
      >
        <span className="text-2xs font-display font-bold tracking-[0.26em] text-mut-d">
          KADR PRO — ÇƏKİLİŞ {step.no}
        </span>
        <span className="h-px w-16 bg-line-d" />
      </motion.div>
    </div>
  );
}

export default function Production() {
  const rightRef = useRef<HTMLDivElement>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const { scrollYProgress: pageP } = useScroll();
  const overlayScale = useTransform(pageP, [0, 1], [1, 1.1]);

  const { scrollYProgress } = useScroll({
    target: rightRef,
    offset: ["start 0.6", "end 0.6"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      production.steps.length - 1,
      Math.max(0, Math.round(v * (production.steps.length - 1)))
    );
    setStepIdx(idx);
  });

  return (
    <section id="production" className="scroll-mt-20 bg-ink text-ivory">
      <div className="container-x section-pad">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Sticky narrative — left */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-20 lg:flex lg:h-[calc(100svh-12rem)] lg:flex-col lg:justify-center">
              <Rise className="flex items-baseline justify-between">
                <p className="eyebrow text-mut-d">{production.label}</p>
                <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-d">
                  {production.index} / 06
                </span>
              </Rise>
              <Lines
                as="h2"
                lines={production.title}
                className="display-lg mt-7"
                delay={0.1}
                stagger={0.12}
              />
              <Rise delay={0.25}>
                <p className="mt-7 max-w-sm text-base leading-relaxed text-mut-d">
                  {production.text[0]}
                  <br />
                  {production.text[1]}
                  <br />
                  <span className="text-ivory">{production.text[2]}</span>
                </p>
              </Rise>
              <Rise delay={0.35}>
                <div className="mt-9">
                  <Magnetic>
                    <Btn href="#elaqe" variant="outline">
                      {production.cta}
                    </Btn>
                  </Magnetic>
                </div>
              </Rise>

              {/* Step progress */}
              <Rise delay={0.45} className="mt-14 hidden lg:block">
                <div className="flex flex-col gap-4">
                  {production.steps.map((s, i) => (
                    <button
                      key={s.no}
                      onClick={() => {
                        rightRef.current
                          ?.querySelectorAll("[data-step]")
                          [i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      className="group flex items-center gap-4 text-left"
                    >
                      <span
                        className={`h-px transition-all duration-700 ${
                          i === stepIdx ? "w-10 bg-ivory" : "w-6 bg-line-d group-hover:w-10"
                        }`}
                      />
                      <span
                        className={`font-display text-[0.625rem] font-bold tracking-[0.24em] transition-colors duration-500 ${
                          i === stepIdx ? "text-ivory" : "text-faint-d group-hover:text-mut-d"
                        }`}
                      >
                        0{i + 1} — {s.title}
                      </span>
                    </button>
                  ))}
                </div>
              </Rise>
            </div>
          </div>

          {/* Changing panels — right */}
          <div ref={rightRef} className="lg:col-span-7">
            {production.steps.map((s) => (
              <div key={s.no} data-step>
                <StepPanel step={s} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case-study overlay band */}
      <div className="relative h-[72svh] min-h-[480px] overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ scale: overlayScale }}>
          <Image
            src={production.overlayImage}
            alt="KADR Pro case study"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="container-x relative flex h-full flex-col items-center justify-center text-center">
          <Fade>
            <p className="eyebrow justify-center text-mut-d">{production.label}</p>
          </Fade>
          <Lines
            as="p"
            lines={production.overlay}
            className="display-lg mt-6"
            delay={0.15}
            stagger={0.1}
          />
          <Fade delay={0.4}>
            <a
              href="#media"
              className="group mt-10 inline-flex items-center gap-4"
              data-cursor
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/50 transition-all duration-500 group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink">
                <Icon name="play" size={17} className="translate-x-[1px]" />
              </span>
              <span className="font-display text-[0.6875rem] font-bold tracking-[0.22em] text-mut-d transition-colors duration-500 group-hover:text-ivory">
                {production.caseStudy}
              </span>
            </a>
          </Fade>
        </div>
      </div>
    </section>
  );
}
