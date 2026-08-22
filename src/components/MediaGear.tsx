"use client";

import Image from "next/image";
import { mediaGear } from "@/lib/content";
import { Rise } from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function MediaGear() {
  const { media, gear } = mediaGear;

  return (
    <section id="media" className="scroll-mt-20 bg-ink text-ivory">
      <div className="grid md:grid-cols-2 md:gap-px md:bg-line-d">
        {/* DARK MEDIA */}
        <article className="group relative overflow-hidden">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[680px]">
            <Image
              src={media.image}
              alt="DARK Media tədbir çəkilişi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-[transform,filter] duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/15" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
              <div>
                <Rise>
                  <p className="eyebrow text-mut-d">{media.label}</p>
                </Rise>
              </div>

              <div>
                <Rise delay={0.1}>
                  <h2 className="display-md text-ivory">
                    {media.title.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h2>
                </Rise>
                <Rise delay={0.2}>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mut-d whitespace-pre-line">
                    {media.text}
                  </p>
                </Rise>
                <Rise delay={0.3}>
                  <a
                    href="#elaqe"
                    className="link-u mt-6 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold tracking-[0.16em] text-ivory"
                  >
                    {media.cta}
                    <Icon name="arrow-right" size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </Rise>
              </div>
            </div>
          </div>
        </article>

        {/* DARK GEAR */}
        <article className="group relative overflow-hidden">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] lg:h-[680px]">
            <Image
              src={gear.image}
              alt="DARK Gear avadanlıq"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-[transform,filter] duration-[1800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/15" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
              <div>
                <Rise delay={0.05}>
                  <p className="eyebrow text-mut-d">{gear.label}</p>
                </Rise>
              </div>

              <div>
                <Rise delay={0.15}>
                  <h2 className="display-md text-ivory">
                    {gear.title.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h2>
                </Rise>
                <Rise delay={0.25}>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mut-d whitespace-pre-line">
                    {gear.text}
                  </p>
                </Rise>
                <Rise delay={0.35}>
                  <a
                    href="#elaqe"
                    className="link-u mt-6 inline-flex items-center gap-2 font-display text-[0.75rem] font-bold tracking-[0.16em] text-ivory"
                  >
                    {gear.cta}
                    <Icon name="arrow-right" size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </Rise>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
