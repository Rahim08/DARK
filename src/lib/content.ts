/**
 * DARK — all site content in one place.
 * Replace the placeholder copy and images here; the UI reads everything
 * from this file. Image paths point at /public/images/*.
 */

export const brand = {
  name: "DARK",
  legal: "DARK®",
  tagline: "YARADICILIQ İNSANLARI DAHA YAXIN EDİR.",
  city: "BAKI, AZƏRBAYCAN",
  sub: "CREATIVE PRODUCTION HOUSE",
  descriptor: ["CREATIVE", "PEOPLE", "CREATE", "POSSIBILITIES"],
};

export const nav = {
  links: [
    { label: "Studio", href: "#studio" },
    { label: "Production", href: "#production" },
    { label: "Media", href: "#media" },
    { label: "Gear", href: "#gear" },
    { label: "İşlərimiz", href: "#islerimiz" },
    { label: "Haqqımızda", href: "#haqqimizda" },
  ],
  contact: "Əlaqə",
  locales: ["AZ", "RU", "EN"],
  soon: "Tezliklə",
};

export const hero = {
  kicker: ["BAKI, AZƏRBAYCAN", "CREATIVE PRODUCTION HOUSE"],
  title: ["İDEYANI", "KADRA", "ÇEVİR."],
  text: "Məkan, komanda, avadanlıq və kontent — hamısı bir DARK ekosistemində.",
  ctaPrimary: "Studiyanı bron et",
  ctaSecondary: "Layihəyə başla",
  showreel: "SHOWREEL İZLƏ",
  sideRail: [
    { label: "Studio", href: "#studio" },
    { label: "Production", href: "#production" },
    { label: "Media", href: "#media" },
    { label: "Gear", href: "#gear" },
    { label: "Community", href: "#haqqimizda" },
  ],
  quote: "GOOD\nSTORIES\nBRING\nUS\nTOGETHER",
  pagination: "01 / 06",
  bottomRight: "DAHA ÇOX MÜMKÜNLÜK",
  image: "/images/hero-main.jpg",
};

export const overview = {
  cards: [
    {
      no: "01",
      label: "DARK STUDIO",
      title: ["MƏKANLAR", "YARADICILIQ ÜÇÜN"],
      link: "Studiyalarımızı kəşf et",
      image: "/images/overview-studio.jpg",
      alt: "DARK Studio məkanı",
    },
    {
      no: "02",
      label: "DARK PRO",
      title: ["BİZNES ÜÇÜN", "KONTENT SİSTEMİ"],
      link: "Production ilə tanış ol",
      image: "/images/overview-pro.jpg",
      alt: "DARK Pro çəkiliş komandası",
    },
  ],
  advantages: [
    { icon: "cube", title: "7+ MƏKAN" },
    { icon: "users", title: "PEŞƏKAR KOMANDA" },
    { icon: "camera", title: "PREMIUM AVADANLIQ" },
    { icon: "diamond", title: "BİZNESLƏR ÜÇÜN HƏLLƏR" },
    { icon: "globe", title: "DAHA BÖYÜK TƏSİR" },
  ],
};

export const locations = {
  label: "DARK STUDIO",
  title: ["HƏR LAYİHƏ ÜÇÜN", "DOĞRU MƏKAN"],
  rightText: ["Sizə uyğun atmosfer,", "sonsuz imkanlar."],
  cta: "Bütün məkanları gör",
  items: [
    {
      no: "01",
      name: "CYCLORAMA",
      tags: "Moda · Reklam · Video",
      image: "/images/loc-cyclorama.jpg",
    },
    {
      no: "02",
      name: "PODCAST ROOM",
      tags: "Podkast · Müsahibə · YouTube",
      image: "/images/loc-podcast.jpg",
    },
    {
      no: "03",
      name: "KITCHEN",
      tags: "Qida · Reels · Sosial media",
      image: "/images/loc-kitchen.jpg",
    },
    {
      no: "04",
      name: "LIVING ROOM",
      tags: "Lifestyle · Ailə · Brend",
      image: "/images/loc-living.jpg",
    },
    {
      no: "05",
      name: "BLACK BOX",
      tags: "Sonsuz yaradıcılıq",
      image: "/images/loc-blackbox.jpg",
    },
  ],
};

export const workModel = {
  label: "YOUR SHOOT. YOUR WAY.",
  title: ["KOMANDANI GƏTİR.", "YA DA BİZİMKİNİ SEÇ."],
  rightText: ["Eyni məkanda", "3 fərqli imkan."],
  link: "Necə işləyir?",
  items: [
    {
      no: "01",
      title: "YALNIZ MƏKAN",
      text: "Öz komandanla gəl, məkandan maksimum faydalan.",
      image: "/images/wm-space.jpg",
    },
    {
      no: "02",
      title: "MƏKAN + AVADANLIQ",
      text: "Peşəkar işıq, kamera, səs və digər texnika.",
      image: "/images/wm-gear.jpg",
    },
    {
      no: "03",
      title: "TAM PRODAKŞN",
      text: "İdeyadan hazır materiala qədər hər şeyi DARK edir.",
      image: "/images/wm-crew.jpg",
    },
  ],
};

export const production = {
  label: "DARK PRO",
  title: ["MARKANIZ ÜÇÜN", "İŞLƏYƏN KONTENT"],
  text: "Strategiya, çəkiliş, montaj, publikasiya və reklam — hamısı bir komandada.",
  cta: "Layihəyə başla",
  caseStudy: "CASE STUDY İZLƏ",
  overlay: ["DAHA ÇOX", "GÖRÜNÜRLÜK", "DAHA ÇOX", "NƏTİCƏ"],
  mosaic: [
    { image: "/images/prod-1.jpg", alt: "Qida çəkilişi" },
    { image: "/images/prod-2.jpg", alt: "Moda çəkilişi" },
    { image: "/images/prod-3.jpg", alt: "BTS" },
    { image: "/images/media-1.jpg", alt: "Brend filmi" },
    { image: "/images/media-2.jpg", alt: "Restoran" },
    { image: "/images/media-3.jpg", alt: "Yaradıcı" },
  ],
};

export const mediaGear = {
  media: {
    label: "DARK MEDIA",
    title: ["TƏDBİRLƏR DAHA", "BÖYÜK HEKAYƏLƏRƏ", "LAYİQDİR"],
    text: "Korporativ tədbirlər · Konfranslar · Açılışlar\nAftermovie · Foto · Video",
    cta: "Tədbiri planlaşdır",
    image: "/images/media-1.jpg",
  },
  gear: {
    label: "DARK GEAR",
    title: ["CREATORS ÜÇÜN", "DÜZGÜN ALƏTLƏR"],
    text: "Kamera · Obyektiv · İşıq · Audio\nAksesuarlar · Creator gear",
    cta: "Mağazaya keç",
    image: "/images/gear-1.jpg",
  },
};

export const finalCta = {
  label: "NÖVBƏTİ LAYİHƏ",
  title: ["DAHA ÇOX", "MÜMKÜNLÜK"],
  text: "Növbəti layihəni birlikdə quraq — məkan, komanda və avadanlıq bir yerdə.",
  cta: "Layihəyə başla",
  phone: "010 411 02 11",
  email: "hello@dark.az",
  image: "/images/cta-bg.jpg",
};

export const footer = {
  tagline: "YARADICILIQ İNSANLARI DAHA YAXIN EDİR.",
  links: [
    { label: "Studio", href: "#studio" },
    { label: "Production", href: "#production" },
    { label: "Media", href: "#media" },
    { label: "Gear", href: "#gear" },
    { label: "İşlərimiz", href: "#islerimiz" },
    { label: "Haqqımızda", href: "#haqqimizda" },
  ],
  address: ["8 Noyabr prospekti 23,", "Amay Business Center,", "Bakı, Azərbaycan"],
  phone: "010 411 02 11",
  email: "hello@dark.az",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  bottom: ["© 2026 DARK. Bütün hüquqlar qorunur.", "DAHA ÇOX MÜMKÜNLÜK · HƏMİŞƏ"],
};
