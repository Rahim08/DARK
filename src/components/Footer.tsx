"use client";

import { footer, brand } from "@/lib/content";
import { Rise } from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

const socialIcons: Record<string, IconName> = {
  Instagram: "instagram",
  YouTube: "youtube",
  TikTok: "tiktok",
  LinkedIn: "linkedin",
};

export default function Footer() {
  return (
    <footer id="haqqimizda" className="scroll-mt-20 bg-ivory text-ink">
      <div className="container-x pt-16 md:pt-24">
        {/* Big wordmark */}
        <Rise>
          <div className="flex items-end justify-between gap-6">
            <h2 className="display-xl text-ink">{brand.name}</h2>
            <span className="hidden font-display text-[0.6875rem] font-bold tracking-[0.24em] text-mut-l md:block">
              ®
            </span>
          </div>
          <p className="mt-4 max-w-sm font-serif text-lg italic leading-snug text-mut-l">
            {footer.tagline.toLowerCase()}
          </p>
        </Rise>

        {/* Columns */}
        <div className="hair-t mt-14 grid gap-12 py-14 md:grid-cols-12">
          {/* Sitemap */}
          <nav aria-label="Alt naviqasiya" className="md:col-span-4">
            <p className="eyebrow text-mut-l">KEÇİDLƏR</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {footer.links.map((l) => (
                <li key={l.href + l.label}>
                  <a
                    href={l.href}
                    className="link-u font-display text-[0.8125rem] font-bold tracking-[0.12em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow text-mut-l">ƏLAQƏ</p>
            <ul className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-mut-l">
              <li className="flex items-start gap-3">
                <Icon name="pin" size={17} className="mt-0.5 shrink-0" />
                <span>
                  {footer.address[0]}
                  <br />
                  {footer.address[1]}
                  <br />
                  {footer.address[2]}
                </span>
              </li>
              <li>
                <a href={`tel:${footer.phone.replace(/\s/g, "")}`} className="link-u flex items-center gap-3">
                  <Icon name="phone" size={17} />
                  {footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.email}`} className="link-u flex items-center gap-3">
                  <Icon name="mail" size={17} />
                  {footer.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 md:justify-self-end">
            <p className="eyebrow text-mut-l">SOSİAL</p>
            <ul className="mt-6 flex items-center gap-3">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line-l text-mut-l transition-all duration-500 hover:border-ink hover:bg-ink hover:text-ivory"
                  >
                    <Icon name={socialIcons[s.label]} size={17} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[220px] font-display text-[0.625rem] font-bold leading-relaxed tracking-[0.22em] text-mut-l">
              {brand.city}
              <br />
              {brand.sub}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hair-t flex flex-col items-center justify-between gap-3 py-7 text-2xs tracking-[0.18em] text-mut-l md:flex-row">
          <p>{footer.bottom[0]}</p>
          <p className="font-display font-bold tracking-[0.28em]">{footer.bottom[1]}</p>
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="text-outline-l -mb-[0.24em] whitespace-nowrap text-center font-display text-[clamp(6rem,22vw,20rem)] font-black leading-none tracking-tight">
          {brand.name}
        </p>
      </div>
    </footer>
  );
}
