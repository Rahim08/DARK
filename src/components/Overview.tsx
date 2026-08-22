"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { overview } from "@/lib/content";
import { Lines, Rise, Fade } from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

function AdvantageCard({ a, i }: { a: (typeof overview.advantages)[number]; i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: i * 0.08 }}
      className="group flex flex-col gap-6 px-5 py-9 first:pl-0 last:pr-0 sm:px-7 md:border-l md:border-line-d md:first:border-l-0"
    >
      <div className="flex items-baseline justify-between">
        <Icon
          name={a.icon as IconName}
          size={26}
          className="text-ivory transition-transform duration-700 ease-out group-hover:-translate-y-1"
        />
        <span className="font-display text-[0.625rem] font-bold tracking-[0.2em] text-faint-d">
          {a.no}
        </span>
      </div>
      <div>
        <h3 className="font-display text-[0.9375rem] font-bold tracking-[0.14em] text-ivory">
          {a.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mut-d">{a.text}</p>
      </div>
    </motion.li>
  );
}

export default function Overview() {
  return (
    <section id="studio" className="scroll-mt-20 bg-ink text-ivory">
      {/* Two editorial cards */}
      <div className="container-x section-pad grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
        {overview.cards.map((card, i) => (
          <article key={card.no} className="group">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-[0.6875rem] font-bold tracking-[0.24em] text-faint-d">
                {overview.index} — {card.label}
              </span>
              <span className="font-display text-[3.5rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgba(244,241,234,0.28)] transition-all duration-700 group-hover:[-webkit-text-stroke-color:rgba(244,241,234,0.7)] md:text-[4.5rem]">
                {card.no}
              </span>
            </div>

            {/* Image with clip reveal + hover zoom */}
            <motion.div
              initial={{ clipPath: "inset(8% 5% 8% 5%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mt-6 overflow-hidden ${i === 0 ? "aspect-[4/5] md:aspect-[4/4.6]" : "aspect-[4/3.4] md:mt-16"}`}
            >
              <motion.div
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 46vw, 92vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            </motion.div>

            <div className="mt-8">
              <p className="eyebrow text-mut-d">{card.label}</p>
              <Lines as="h2" lines={card.title} className="display-md mt-5" delay={0.1 + i * 0.1} />
              <Rise delay={0.25}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-mut-d">
                  {card.text}
                </p>
                <a
                  href={i === 0 ? "#locations" : "#production"}
                  className="link-u mt-7 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold tracking-[0.16em] text-ivory"
                >
                  {card.link}
                  <Icon
                    name="arrow-right"
                    size={15}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </a>
              </Rise>
            </div>
          </article>
        ))}
      </div>

      {/* Advantages strip */}
      <div className="hair-t bg-ink-2">
        <div className="container-x py-2 md:py-4">
          <ul className="grid grid-cols-2 gap-x-4 md:grid-cols-5 md:gap-0">
            {overview.advantages.map((a, i) => (
              <AdvantageCard key={a.no} a={a} i={i} />
            ))}
          </ul>
        </div>
      </div>

      {/* Quiet close line */}
      <Fade className="container-x">
        <div className="flex items-center gap-4 py-10">
          <span className="h-px flex-1 bg-line-d" />
          <p className="font-display text-[0.5625rem] font-bold tracking-[0.34em] text-faint-d">
            STUDIO · PRO · MEDIA · GEAR
          </p>
          <span className="h-px flex-1 bg-line-d" />
        </div>
      </Fade>
    </section>
  );
}
