"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { finalCta } from "@/lib/content";
import { Lines, Rise, Fade } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="elaqe" ref={ref} className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink text-ivory">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src={finalCta.image}
          alt="DARK — final çağırış fonu"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="container-x relative py-32 text-center">
        <Rise className="flex justify-center">
          <p className="eyebrow justify-center text-mut-d">{finalCta.label}</p>
        </Rise>

        <Lines
          as="h2"
          lines={finalCta.title}
          className="display-xl mt-8"
          delay={0.15}
          stagger={0.14}
        />

        <Rise delay={0.35}>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-mut-d">
            {finalCta.text}
          </p>
        </Rise>

        <Rise delay={0.5}>
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <Btn href="#top" variant="solid" size="md">
                {finalCta.cta}
              </Btn>
            </Magnetic>
          </div>
        </Rise>

        <Fade delay={0.65}>
          <div className="mt-16 flex flex-col items-center justify-center gap-3 text-sm tracking-[0.14em] text-mut-d sm:flex-row sm:gap-10">
            <a href={`tel:${finalCta.phone.replace(/\s/g, "")}`} className="link-u inline-flex items-center gap-2.5">
              <Icon name="phone" size={15} />
              {finalCta.phone}
            </a>
            <span className="hidden h-4 w-px bg-line-d sm:block" />
            <a href={`mailto:${finalCta.email}`} className="link-u inline-flex items-center gap-2.5">
              <Icon name="mail" size={15} />
              {finalCta.email}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
