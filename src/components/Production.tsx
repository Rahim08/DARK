"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { production } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Production() {
  return (
    <section id="production" className="scroll-mt-20 bg-ink text-ivory">
      <div className="section-pad">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left — text content */}
            <div className="lg:col-span-5 lg:pr-8">
              <Rise>
                <p className="eyebrow text-mut-d">{production.label}</p>
              </Rise>
              <Lines
                as="h2"
                lines={production.title}
                className="display-lg mt-7"
                delay={0.1}
                stagger={0.12}
              />
              <Rise delay={0.25}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-mut-d">
                  {production.text}
                </p>
              </Rise>
              <Rise delay={0.35}>
                <div className="mt-8">
                  <Magnetic>
                    <Btn href="#elaqe" variant="outline">
                      {production.cta}
                    </Btn>
                  </Magnetic>
                </div>
              </Rise>
            </div>

            {/* Right — editorial mosaic */}
            <div className="lg:col-span-7">
              <div className="relative grid grid-cols-3 grid-rows-2 gap-1 md:gap-2" style={{ aspectRatio: "4/3" }}>
                {/* Mosaic images */}
                {production.mosaic.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                    className={`relative overflow-hidden ${
                      i === 0 ? "col-span-1 row-span-2" : ""
                    } ${i === 3 ? "col-span-2" : ""}`}
                  >
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 90vw"
                      className="object-cover transition-[transform,filter] duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04]"
                    />
                  </motion.div>
                ))}

                {/* Text overlay — "DAHA ÇOX GÖRÜNÜRLÜK" */}
                <div className="absolute left-3 top-3 z-10 md:left-5 md:top-5">
                  <p className="font-display text-[0.625rem] font-bold leading-[1.7] tracking-[0.22em] text-ivory mix-blend-difference">
                    {production.overlay.slice(0, 2).map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                    <span className="block text-faint-d">
                      {production.overlay.slice(2).map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </span>
                  </p>
                </div>

                {/* Text overlay — "BRANDS PEOPLE IMPACT" */}
                <div className="absolute bottom-3 right-3 z-10 md:bottom-5 md:right-5">
                  <p className="font-display text-[0.5625rem] font-bold leading-[1.7] tracking-[0.24em] text-ivory/70 mix-blend-difference">
                    <span className="block">BRANDS</span>
                    <span className="block">PEOPLE</span>
                    <span className="block">IMPACT</span>
                  </p>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <a
                    href="#media"
                    className="group flex items-center gap-3 rounded-full border border-ivory/40 bg-ink/30 px-5 py-3 backdrop-blur-[2px] transition-all duration-500 hover:border-ivory hover:bg-ivory hover:text-ink"
                    data-cursor
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/50 transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
                      <Icon name="play" size={13} className="translate-x-[1px]" />
                    </span>
                    <span className="font-display text-[0.625rem] font-bold tracking-[0.22em] text-mut-d transition-colors duration-500 group-hover:text-ink">
                      {production.caseStudy}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
