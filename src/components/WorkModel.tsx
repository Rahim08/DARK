"use client";

import { useState } from "react";
import Image from "next/image";
import { workModel } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function WorkModel() {
  const [active, setActive] = useState(1);
  const { items } = workModel;

  return (
    <section className="bg-ivory text-ink">
      {/* Header */}
      <div className="container-x pt-20 md:pt-28">
        <Rise className="flex items-baseline justify-between">
          <p className="eyebrow text-mut-l">{workModel.label}</p>
          <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-l">
            {workModel.index} / 06
          </span>
        </Rise>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Lines as="h2" lines={workModel.title} className="display-lg max-w-4xl" delay={0.15} stagger={0.11} />
          <div className="flex items-end justify-between gap-8">
            <p className="text-base leading-relaxed text-mut-l">
              {workModel.rightText[0]}
              <br />
              {workModel.rightText[1]}
            </p>
            <a
              href="#production"
              className="link-u hidden whitespace-nowrap font-display text-[0.75rem] font-bold tracking-[0.16em] md:inline-flex md:items-center md:gap-2"
            >
              {workModel.link}
              <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Split panels */}
      <div className="container-x mt-12 pb-20 md:pb-28">
        <div className="flex flex-col gap-4 md:flex-row md:gap-px md:bg-line-l">
          {items.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.no}
                onClick={() => setActive(isActive ? -1 : i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={isActive}
                className="group relative block w-full overflow-hidden bg-ink text-left text-ivory transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:flex-1 md:last:flex-1"
                style={{
                  flexGrow: isActive ? 2.3 : 1,
                  minHeight: "420px",
                  height: isActive ? "520px" : "420px",
                }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    transform: isActive ? "scale(1.03)" : "scale(1.01)",
                    filter: isActive ? "none" : "saturate(0.6) brightness(0.82)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 transition-opacity duration-700" />
                <div
                  className={`absolute inset-0 bg-ink transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-25"
                  }`}
                />

                {/* Giant index */}
                <span
                  className="text-outline-d absolute right-6 top-5 font-display text-[4rem] font-black leading-none transition-all duration-700 md:text-[5.5rem]"
                  style={{ opacity: isActive ? 0.9 : 0.35 }}
                >
                  {item.no}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3
                    className="display-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      transform: isActive ? "translateY(0)" : "translateY(14px)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{
                      maxHeight: isActive ? 120 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-mut-d">
                      {item.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-[0.6875rem] font-bold tracking-[0.18em] text-ivory">
                      Seç
                      <Icon name="arrow-right" size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Hairline divider on desktop */}
                <span className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-px bg-line-d/40 md:block" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
