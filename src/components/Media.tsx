"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { media } from "@/lib/content";
import { Lines, Rise, Fade } from "@/components/ui/Reveal";
import { Magnetic, Btn } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

type VideoItem = (typeof media.featured) | (typeof media.videos)[number];

function VideoCard({
  item,
  large,
  onPlay,
}: {
  item: VideoItem;
  large?: boolean;
  onPlay: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const hoverPlay = () => {
    const v = videoRef.current;
    if (v && item.videoSrc && !v.paused) return;
    v?.play().catch(() => {});
  };
  const hoverPause = () => {
    const v = videoRef.current;
    if (v && item.videoSrc) v.pause();
  };

  return (
    <button
      ref={ref}
      onClick={onPlay}
      onMouseEnter={hoverPlay}
      onMouseLeave={hoverPause}
      className="group relative block w-full overflow-hidden text-left"
      data-cursor
      data-cursor-label="OYNAT"
      aria-label={`${item.title} — video izlə`}
    >
      {/* Media */}
      <div
        className={`relative w-full overflow-hidden ${large ? "aspect-video" : "aspect-[4/3]"}`}
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0 will-change-transform">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes={large ? "100vw" : "(min-width: 768px) 46vw, 92vw"}
            className="object-cover transition-[transform,filter] duration-[1600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.06]"
            style={{ filter: "saturate(0.88)" }}
          />
          {/* Muted hover preview — plays only when videoSrc is provided */}
          {item.videoSrc && (
            <video
              ref={videoRef}
              src={item.videoSrc}
              poster={item.image}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-90" />

        {/* Play button */}
        <span
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/60 bg-ink/30 backdrop-blur-[2px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink ${
            large ? "h-20 w-20" : "h-14 w-14"
          }`}
        >
          <Icon name="play" size={large ? 24 : 17} className="translate-x-[1px]" />
        </span>

        {/* Meta */}
        <span className="absolute bottom-4 left-5 flex items-center gap-3">
          <span className="bg-ivory px-2 py-1 font-display text-[0.5625rem] font-bold tracking-[0.2em] text-ink">
            {item.tag}
          </span>
          <span className="font-display text-[0.625rem] font-bold tracking-[0.24em] text-ivory/80">
            {item.duration}
          </span>
        </span>
      </div>

      {/* Caption — layered, moves at its own pace */}
      <div className="mt-5 flex items-baseline justify-between gap-6">
        <h3 className={`${large ? "display-sm" : "font-display text-base font-bold tracking-[0.08em]"} transition-colors duration-500 group-hover:text-sand`}>
          {item.title}
        </h3>
        <span className="h-px w-10 shrink-0 bg-line-d transition-all duration-700 group-hover:w-20 group-hover:bg-ivory" />
      </div>
    </button>
  );
}

export default function Media() {
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  return (
    <section id="media" className="scroll-mt-20 bg-ink-2 text-ivory">
      <div className="container-x section-pad">
        {/* Header */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <Rise className="flex items-baseline justify-between">
              <p className="eyebrow text-mut-d">{media.label}</p>
              <span className="font-display text-[0.625rem] font-bold tracking-[0.3em] text-mut-d lg:hidden">
                {media.index} / 06
              </span>
            </Rise>
            <Lines
              as="h2"
              lines={media.title}
              className="display-lg mt-7"
              delay={0.1}
              stagger={0.1}
            />
          </div>
          <Rise delay={0.2} className="lg:text-right">
            <p className="text-base leading-relaxed text-mut-d">
              {media.text[0]}
              <br />
              {media.text[1]}
            </p>
            <div className="mt-6">
              <Magnetic>
                <Btn href="#elaqe" variant="outline" size="sm">
                  {media.cta}
                </Btn>
              </Magnetic>
            </div>
          </Rise>
        </div>

        {/* Featured video */}
        <div className="mt-14">
          <Rise>
            <VideoCard item={media.featured} large onPlay={() => setPlaying(media.featured)} />
          </Rise>
        </div>

        {/* Two smaller cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8">
          {media.videos.map((v, i) => (
            <Fade key={v.title} delay={i * 0.15}>
              <VideoCard item={v} onPlay={() => setPlaying(v)} />
            </Fade>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-ink/92 p-5 backdrop-blur-sm"
            onClick={() => setPlaying(null)}
            role="dialog"
            aria-modal="true"
            aria-label={playing.title}
          >
            <motion.div
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full overflow-hidden border border-line-d">
                {playing.videoSrc ? (
                  <video
                    src={playing.videoSrc}
                    poster={playing.image}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={playing.image}
                      alt={playing.title}
                      fill
                      className="object-cover"
                      sizes="80vw"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/45 text-center">
                      <Icon name="play" size={30} className="mb-4 text-ivory/70" />
                      <p className="font-display text-[0.6875rem] font-bold tracking-[0.24em] text-ivory/80">
                        TEASER — TEZLİKLƏ
                      </p>
                      <p className="mt-3 max-w-sm text-xs leading-relaxed text-ivory/55">
                        Bu kartın videosu hazırlanır. Layihə versiyasında burada səssiz önizləmə və tam oynatma işləyir.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold tracking-[0.1em]">{playing.title}</p>
                  <p className="mt-1 text-xs tracking-[0.12em] text-mut-d">
                    {playing.tag} · {playing.duration}
                  </p>
                </div>
                <button
                  onClick={() => setPlaying(null)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-d transition-colors duration-500 hover:bg-ivory hover:text-ink"
                  aria-label="Bağla"
                >
                  <Icon name="close" size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
