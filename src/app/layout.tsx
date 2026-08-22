import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Grain from "@/components/ui/Grain";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  style: "italic",
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DARK — Creative Production House | Bakı, Azərbaycan",
  description:
    "DARK — məkan, komanda, avadanlıq və kontent. Studio, Production, Media və Gear — hamısı bir ekosistemdə. Bakı, Azərbaycan.",
  openGraph: {
    title: "DARK — Creative Production House",
    description:
      "Məkan, komanda, avadanlıq və kontent — hamısı bir DARK ekosistemində.",
    type: "website",
    locale: "az_AZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="az"
      className={`${archivo.variable} ${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScroll />
          <Cursor />
          <Grain />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
