/**
 * KADR — all site content in one place.
 * Replace the placeholder copy and images here; the UI reads everything
 * from this file. Image paths point at /public/images/*.
 */

export const brand = {
  name: "KADR",
  legal: "KADR®",
  tagline: "YARADICILIQ İNSANLARI YAXIN EDİR",
  city: "BAKI, AZƏRBAYCAN",
  sub: "KREATİV PRODAKŞN EVİ",
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
  kicker: ["BAKI, AZƏRBAYCAN", "KREATİV PRODAKŞN EVİ"],
  title: ["İDEYANI", "KADRA", "ÇEVİR."],
  text: "Məkan, komanda, avadanlıq və kontent — hamısı bir KADR ekosistemində.",
  ctaPrimary: "Studiyanı bron et",
  ctaSecondary: "Layihəyə başla",
  showreel: "SHOWREEL İZLƏ",
  sideRail: [
    { label: "Studio", href: "#studio" },
    { label: "Production", href: "#production" },
    { label: "Media", href: "#media" },
    { label: "Gear", href: "#gear" },
  ],
  bottomRight: "DAHA ÇOX MÜMKÜNLÜK",
  image: "/images/hero-main.jpg",
};

export const overview = {
  index: "01",
  cards: [
    {
      no: "01",
      label: "KADR STUDIO",
      title: ["MƏKANLAR", "YARADICILIQ ÜÇÜN"],
      text: "Səkkiz fərqli səhnə — cyclorama, podkast otağı, mətbəx, yaşayış otağı və daha çoxu. Öz atmosferində, öz ritmində çək.",
      link: "Studiyalarımızı kəşf et",
      image: "/images/overview-studio.jpg",
      alt: "KADR Studio məkanı",
    },
    {
      no: "02",
      label: "KADR PRO",
      title: ["BİZNES ÜÇÜN", "KONTENT SİSTEMİ"],
      text: "Strategiyadan final montaja qədər bütün proses bir komandada. Brendiniz üçün ardıcıl, peşəkar kontent axını.",
      link: "Production ilə tanış ol",
      image: "/images/overview-pro.jpg",
      alt: "KADR Pro çəkiliş komandası",
    },
  ],
  advantages: [
    {
      no: "01",
      icon: "cube",
      title: "7+ MƏKAN",
      text: "Hər layihəyə uyğun səhnə və atmosfer.",
    },
    {
      no: "02",
      icon: "users",
      title: "PEŞƏKAR KOMANDA",
      text: "Operator, rejissor, montaj — bir yerdə.",
    },
    {
      no: "03",
      icon: "camera",
      title: "PREMIUM AVADANLIQ",
      text: "Sony, Profoto, Sennheiser və daha çoxu.",
    },
    {
      no: "04",
      icon: "diamond",
      title: "BİZNESLƏR ÜÇÜN HƏLLƏR",
      text: "Strategiyadan reklam publikasiyasına qədər.",
    },
    {
      no: "05",
      icon: "globe",
      title: "DAHA BÖYÜK TƏSİR",
      text: "Bir ekosistem, tam həll, ölçülə bilən nəticə.",
    },
  ],
};

export const locations = {
  index: "02",
  label: "KADR STUDIO — MƏKANLAR",
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
  index: "03",
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
      text: "İdeyadan hazır materiala qədər hər şeyi KADR edir.",
      image: "/images/wm-crew.jpg",
    },
  ],
};

export const production = {
  index: "04",
  label: "KADR PRO",
  title: ["MARKANIZ ÜÇÜN", "İŞLƏYƏN KONTENT"],
  text: [
    "Strategiya, çəkiliş, montaj,",
    "publikasiya və reklam —",
    "hamısı bir komandada.",
  ],
  cta: "Layihəyə başla",
  caseStudy: "CASE STUDY İZLƏ",
  steps: [
    {
      no: "01",
      title: "STRATEGİYA",
      text: "Hədəf auditoriya, mesaj və kontent planı.",
      image: "/images/prod-1.jpg",
    },
    {
      no: "02",
      title: "ÇƏKİLİŞ",
      text: "Məkan, komanda və avadanlıq — hamısı hazır.",
      image: "/images/prod-2.jpg",
    },
    {
      no: "03",
      title: "MONTAJ + PUBLİKASİYA",
      text: "Final material və tam rəqəmsal paylama.",
      image: "/images/prod-3.jpg",
    },
  ],
  overlay: ["DAHA ÇOX", "GÖRÜNÜRLÜK", "DAHA ÇOX", "NƏTİCƏ"],
  overlayImage: "/images/media-1.jpg",
};

export const media = {
  index: "05",
  label: "KADR MEDIA",
  title: ["TƏDBİRLƏR DAHA", "BÖYÜK HEKAYƏLƏRƏ", "LAYİQDİR"],
  text: ["Korporativ tədbirlər · Konfranslar · Açılışlar", "Aftermovie · Foto · Video"],
  cta: "Tədbiri planlaşdır",
  featured: {
    title: "AFTERMOVIE — AMAY AÇILIŞ 2025",
    tag: "Aftermovie",
    duration: "02:47",
    image: "/images/media-1.jpg",
    videoSrc: "",
  },
  videos: [
    {
      title: "KONFRANS HIGHLIGHTS",
      tag: "Konfrans",
      duration: "01:32",
      image: "/images/media-2.jpg",
      videoSrc: "",
    },
    {
      title: "BREND FİLMİ — QAYMAQ",
      tag: "Brend filmi",
      duration: "03:10",
      image: "/images/media-3.jpg",
      videoSrc: "",
    },
  ],
};

export const gear = {
  index: "06",
  label: "KADR GEAR",
  title: ["CREATORS ÜÇÜN", "DÜZGÜN ALƏTLƏR"],
  text: ["Kamera · Obyektiv · İşıq · Audio", "Aksesuarlar · Fonlar"],
  cta: "Mağazaya keç",
  items: [
    { name: "SONY FX3 / A7 IV", tag: "Kamera", image: "/images/gear-1.jpg" },
    { name: "GM OBYEKTİVLƏR", tag: "Obyektiv", image: "/images/gear-2.jpg" },
    { name: "PROFOTO / AMARAN", tag: "İşıq", image: "/images/gear-3.jpg" },
    { name: "SENNHEISER / DJI MIC", tag: "Audio", image: "/images/gear-4.jpg" },
    { name: "DJI RS4 STABİLİZATOR", tag: "Aksesuar", image: "/images/gear-5.jpg" },
    { name: "FONLAR / ÇARÇİVƏLƏR", tag: "Fon", image: "/images/gear-6.jpg" },
  ],
};

export const finalCta = {
  label: "NÖVBƏTİ LAYİHƏ",
  title: ["DAHA ÇOX", "MÜMKÜNLÜK"],
  text: "Növbəti layihəni birlikdə quraq — məkan, komanda və avadanlıq bir yerdə.",
  cta: "Layihəyə başla",
  phone: "010 411 02 11",
  email: "hello@kadr.az",
  image: "/images/cta-bg.jpg",
};

export const footer = {
  tagline: "YARADICILIQ İNSANLARI YAXIN EDİR.",
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
  email: "hello@kadr.az",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  bottom: ["© 2025 KADR. Bütün hüquqlar qorunur.", "DAHA ÇOX MÜMKÜNLÜK · HƏMİŞƏ"],
};
