import { CriticalAboveFoldStyles } from "@/components/seo/CriticalAboveFoldStyles";
import { LayoutChrome } from "@/components/layout/LayoutChrome";
import { NetlifyFormsDetection } from "@/components/seo/NetlifyFormsDetection";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { Plausible } from "@/components/seo/Plausible";
import { StructuredData } from "@/components/seo/StructuredData";
import { BRAND, brandAbsolute } from "@/lib/brand";
import { META, META_KEYWORDS, NAP, SITE_URL } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  display: "swap",
  weight: ["400", "600"],
  preload: false,
  adjustFontFallback: true,
});

const ogImageUrl = brandAbsolute(BRAND.ogImage, SITE_URL);

const gscVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Automatex",
  ...(gscVerification
    ? { verification: { google: gscVerification } }
    : {}),
  title: {
    default: META.title,
    template: "%s · Automatex Hub",
  },
  description: META.description,
  keywords: [...META_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Automatex",
    title: META.ogTitle,
    description: META.ogDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Automatex — mandataires immobiliers en Normandie",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.ogTitle,
    description: META.ogDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: BRAND.manifest,
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: "Automatex",
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": BRAND.themeColor,
    "msapplication-TileImage": BRAND.favicons.android192,
    "geo.region": "FR-61",
    "geo.placename": `${NAP.city}, ${NAP.department}, ${NAP.region}, France`,
    "geo.position": "48.7483;-0.5711",
    ICBM: "48.7483, -0.5711",
    language: "fr-FR",
    author: `${NAP.brand} — ${NAP.city}, ${NAP.region}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: BRAND.themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <CriticalAboveFoldStyles />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href={BRAND.manifest} />
        <link rel="mask-icon" href={BRAND.symbolTransparentSvg} color="#FF6B2B" />
        <meta name="theme-color" content="#080D1A" />
      </head>
      <body className="min-h-screen font-body antialiased">
        <StructuredData />
        <GoogleAnalytics />
        <Plausible />
        <LayoutChrome>{children}</LayoutChrome>
        <NetlifyFormsDetection />
      </body>
    </html>
  );
}
