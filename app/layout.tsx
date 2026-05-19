import { LayoutChrome } from "@/components/layout/LayoutChrome";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { Plausible } from "@/components/seo/Plausible";
import { StructuredData } from "@/components/seo/StructuredData";
import { META, SITE_URL } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

/**
 * G9 — Subset latin + latin-ext uniquement (drop cyrillic/greek etc.)
 * G1 — display: optional pour ne pas bloquer le LCP avec un FOUT visible
 *      Plus Jakarta Sans est utilisée pour le corps → display: swap suffit
 *      Cormorant Garamond (headings) reste swap pour éviter flash long
 */
const heading = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * H2 — title ≤ 60 car / description ≤ 160 car, keyword local en début
 * H8 — canonical absolu
 * H12 — OG complet og:image 1200x630
 * H13 — Twitter Card summary_large_image
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META.title,
    template: "%s | Automatex",
  },
  description: META.description,
  keywords: [
    "mandataire immobilier Normandie",
    "automatisation mandataire IAD",
    "réponse leads SeLoger",
    "Flers Orne 61",
    "RGPD France",
  ],
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
        url: "/assets/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Automatex — mandataires immobiliers en Normandie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.ogTitle,
    description: META.ogDescription,
    images: ["/assets/brand/og-image.png"],
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/assets/brand/favicons/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/brand/favicons/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

/** G3 — Empêche le CLS via theme-color + viewport meta */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04342C",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <head>
        {/* G7 — preconnect + dns-prefetch pour assets externes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/brand/favicons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/brand/favicons/favicon-16.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Theme restoration sans flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var v=['confiance'];var t=localStorage.getItem('ax-theme');if(t&&v.includes(t))document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <StructuredData />
        <GoogleAnalytics />
        <Plausible />
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
