"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav as navContent, brand } from "@/lib/content";
import { useScrolled, useScrollSpy } from "@/lib/hooks";
import { EASE } from "@/lib/motion";
import { Magnetic, Btn } from "@/components/ui/Button";

const SPY_IDS = ["studio", "production", "media", "gear", "islerimiz", "haqqimizda"];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="KADR — baş səhifə">
      <span className="font-display text-[1.45rem] font-black tracking-tight leading-none">
        KADR
      </span>
      <span className="hidden flex-col text-[0.4375rem] font-semibold leading-[1.35] tracking-[0.28em] text-mut-d sm:flex">
        <span>YARADICILIQ</span>
        <span>İNSANLARI YAXIN</span>
        <span>EDİR</span>
      </span>
    </a>
  );
}

function LocaleSwitcher({ light }: { light?: boolean }) {
  const [active, setActive] = useState("AZ");
  const [soon, setSoon] = useState(false);

  const pick = (l: string) => {
    if (l === active) return;
    setActive(l);
    if (l !== "AZ") {
      setSoon(true);
      window.setTimeout(() => setSoon(false), 1800);
    }
  };

  return (
    <div className="relative flex items-center gap-1.5">
      {navContent.locales.map((l) => (
        <button
          key={l}
          onClick={() => pick(l)}
          aria-label={`Dil: ${l}`}
          className={`font-display text-[0.6875rem] font-bold tracking-[0.14em] transition-colors duration-300 ${
            active === l
              ? light
                ? "text-ink"
                : "text-ivory"
              : light
                ? "text-mut-l hover:text-ink"
                : "text-mut-d hover:text-ivory"
          }`}
        >
          {l}
        </button>
      ))}
      <AnimatePresence>
        {soon && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap border border-line-d bg-ink px-2.5 py-1 font-display text-[0.5625rem] font-bold tracking-[0.2em] text-ivory"
          >
            {navContent.soon}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav() {
  const scrolled = useScrolled(48);
  const active = useScrollSpy(SPY_IDS);
  const [open, setOpen] = useState(false);

  // lock body scroll while the menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const onClose = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1.1 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-line-d bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <Logo />

          {/* Center links — lg+ */}
          <nav aria-label="Əsas naviqasiya" className="hidden items-center gap-7 lg:flex">
            {navContent.links.slice(0, 4).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-display text-[0.6875rem] font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
                  active === l.href.slice(1) ? "text-ivory" : "text-mut-d hover:text-ivory"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-ivory transition-all duration-500 ${
                    active === l.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex">
              <LocaleSwitcher />
            </div>
            <Magnetic className="hidden md:block">
              <Btn href="#elaqe" size="sm" variant="outline">
                {navContent.contact}
              </Btn>
            </Magnetic>

            {/* Hamburger — md and below */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="relative block h-[14px] w-[22px]">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-ivory transition-all duration-500 ${
                    open ? "top-1/2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-px w-full bg-ivory transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-full bg-ivory transition-all duration-500 ${
                    open ? "bottom-1/2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[99] flex flex-col bg-ink lg:hidden"
          >
            <div className="container-x flex flex-1 flex-col justify-center gap-1 pt-24">
              {navContent.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.07 }}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="font-display text-[0.625rem] font-bold tracking-[0.2em] text-mut-d">
                    0{i + 1}
                  </span>
                  <span className="display-lg text-ivory transition-colors group-hover:text-sand">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="container-x flex flex-col gap-6 pb-10"
            >
              <div className="hair-t pt-6">
                <LocaleSwitcher light={false} />
              </div>
              <div>
                <Btn href="#elaqe" variant="solid" onClick={onClose}>
                  {navContent.contact}
                </Btn>
              </div>
              <p className="text-2xs tracking-[0.24em] text-mut-d">
                {brand.city} · {brand.sub}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
