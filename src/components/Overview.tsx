"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { overview } from "@/lib/content";
import Icon, { type IconName } from "@/components/ui/Icon";

export default function Overview() {
  return (
    <section id="studio" className="scroll-mt-20 bg-ink text-ivory">
      {/* Two editorial cards — 50/50 split */}
      <div className="grid md:grid-cols-2">
        {overview.cards.map((card, i) => (
          <article
            key={card.no}
            className={`group relative overflow-hidden ${
              i === 0 ? "border-b md:border-b-0 md:border-r border-line-d" : "border-b border-line-d md:border-b-0"
            }`}
          >
            {/* Image — full-bleed */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-[transform,filter] duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                {/* Top: index + label */}
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[0.625rem] font-bold tracking-[0.24em] text-faint-d">
                    {card.no}
                  </span>
                  <span className="font-display text-[0.625rem] font-bold tracking-[0.24em] text-faint-d">
                    — {card.label}
                  </span>
                </div>

                {/* Bottom: headline + CTA */}
                <div>
                  <h2 className="display-md text-ivory">
                    {card.title.map((line, li) => (
                      <span key={li} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <a
                    href={i === 0 ? "#locations" : "#production"}
                    className="link-u mt-6 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold tracking-[0.16em] text-ivory"
                  >
                    {card.link}
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capabilities strip — 5 columns, dark, compact */}
      <div className="hair-t border-line-d bg-ink-2">
        <div className="container-x">
          <ul className="grid grid-cols-2 md:grid-cols-5">
            {overview.advantages.map((a, i) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: i * 0.06 }}
                className={`group flex flex-col items-center gap-4 px-4 py-8 text-center ${
                  i < overview.advantages.length - 1 ? "md:border-r md:border-line-d" : ""
                } ${i === 1 ? "border-b md:border-b-0 border-line-d" : ""} ${
                  i === 0 ? "border-b md:border-b-0 border-line-d" : ""
                }`}
              >
                <Icon
                  name={a.icon as IconName}
                  size={24}
                  className="text-mut-d transition-colors duration-500 group-hover:text-ivory"
                />
                <span className="font-display text-[0.6875rem] font-bold tracking-[0.18em] text-mut-d transition-colors duration-500 group-hover:text-ivory">
                  {a.title}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
