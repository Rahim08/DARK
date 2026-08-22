"use client";

import Image from "next/image";
import { workModel } from "@/lib/content";
import { Lines, Rise } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function WorkModel() {
  const { items } = workModel;

  return (
    <section className="bg-ivory text-ink">
      {/* Header */}
      <div className="container-x pt-16 md:pt-24">
        <Rise>
          <p className="eyebrow text-mut-l">{workModel.label}</p>
        </Rise>
        <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Lines as="h2" lines={workModel.title} className="display-lg max-w-4xl" delay={0.15} stagger={0.11} />
          <div className="flex items-end justify-between gap-8">
            <Rise delay={0.2}>
              <p className="text-base leading-relaxed text-mut-l">
                {workModel.rightText[0]}
                <br />
                {workModel.rightText[1]}
              </p>
            </Rise>
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

      {/* Three dark photo panels */}
      <div className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-px md:bg-line-l">
          {items.map((item) => (
            <article
              key={item.no}
              className="group relative overflow-hidden bg-ink text-left text-ivory"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-[transform,filter] duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/15" />

                {/* Giant index number */}
                <span
                  className="text-outline-d absolute right-5 top-4 font-display text-[4rem] font-black leading-none md:text-[5.5rem]"
                  aria-hidden="true"
                >
                  {item.no}
                </span>

                {/* Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="display-md text-ivory">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-mut-d">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
