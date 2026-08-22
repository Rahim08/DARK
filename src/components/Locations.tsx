"use client";

import { useRef } from "react";
import Image from "next/image";
import { locations } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function LocationCard({
  item,
}: {
  item: (typeof locations.items)[number];
}) {
  return (
    <article className="group relative flex-none w-[280px] md:w-[300px] lg:w-[320px] border border-line-l bg-ivory">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt ?? item.name}
          fill
          sizes="320px"
          className="object-cover transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
          style={{ objectPosition: item.objectPosition ?? "center" }}
        />
        <span className="absolute left-4 top-4 bg-ivory px-2 py-1 font-display text-[0.5625rem] font-bold tracking-[0.24em] text-ink">
          {item.no}
        </span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Icon name="arrow-up-right" size={16} className="transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </div>
      <div className="flex flex-col gap-4 p-5">
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="locations" className="scroll-mt-20 bg-ivory text-ink">
      <div className="container-x section-pad">
        {/* Header */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Rise>
              <p className="eyebrow text-mut-l">{locations.label}</p>
            </Rise>
            <Lines
              as="h2"
              lines={locations.title}
              className="display-lg mt-6"
              delay={0.1}
              stagger={0.12}
            />
          </div>
          <div className="flex items-end justify-between gap-8">
            <Rise delay={0.2}>
              <p className="text-base leading-relaxed text-mut-l">
                {locations.rightText[0]}
                <br />
                {locations.rightText[1]}
              </p>
            </Rise>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll(-1)}
                aria-label="Əvvəlki məkan"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line-l transition-colors duration-500 hover:bg-ink hover:text-ivory"
              >
                <Icon name="arrow-left" size={17} />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Növbəti məkan"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line-l transition-colors duration-500 hover:bg-ink hover:text-ivory"
              >
                <Icon name="arrow-right" size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))] pb-4 md:px-[max(1.25rem,calc((100vw-1440px)/2+1rem))]"
        data-cursor
        data-cursor-label="SÜRÜŞ"
      >
        {locations.items.map((item) => (
          <LocationCard key={item.no} item={item} />
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
