import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Grain } from "./components/Grain";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://fragrancestudios.ng";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fragrance Studios — A Recording House in Abuja",
    template: "%s · Fragrance Studios",
  },
  description:
    "A recording, production, mixing and mastering studio in Abuja, Nigeria. Producing records with the patience of a craftsman and the ear of a listener.",
  applicationName: "Fragrance Studios",
  keywords: [
    "Fragrance Studios",
    "Abuja recording studio",
    "Nigerian music producer",
    "mixing and mastering Abuja",
    "Godwin Owulo",
    "Afrobeat production",
    "Gospel music studio Nigeria",
  ],
  authors: [{ name: "Fragrance Studios" }],
  creator: "Fragrance Studios",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Fragrance Studios",
    title: "Fragrance Studios — A Recording House in Abuja",
    description:
      "Recording. Production. Mixing. Mastering. Made with the patience of a craftsman and the ear of a listener.",
    images: [
      {
        url: "/brand/logo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fragrance Studios — Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fragrance Studios — A Recording House in Abuja",
    description:
      "Recording, production, mixing and mastering in Abuja, Nigeria.",
    images: ["/brand/logo-og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-gold focus:text-paper focus:px-4 focus:py-2 focus:mono focus:text-[11px] focus:tracking-[0.22em] focus:uppercase"
        >
          Skip to content
        </a>
        <JsonLd />
        <Grain />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
