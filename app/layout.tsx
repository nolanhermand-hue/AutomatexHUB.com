import { LayoutChrome } from "@/components/layout/LayoutChrome";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { Plausible } from "@/components/seo/Plausible";
import { StructuredData } from "@/components/seo/StructuredData";
import { BRAND, brandAbsolute } from "@/lib/brand";
import { META, META_KEYWORDS, NAP, SITE_URL } from "@/lib/constants";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

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
    template: "%s | Automatex",
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
      { url: BRAND.faviconSvg, type: "image/svg+xml" },
      { url: BRAND.favicons[16], sizes: "16x16", type: "image/png" },
      { url: BRAND.favicons[32], sizes: "32x32", type: "image/png" },
      { url: BRAND.favicons[48], sizes: "48x48", type: "image/png" },
      { url: BRAND.favicons[96], sizes: "96x96", type: "image/png" },
      { url: BRAND.favicons.android192, sizes: "192x192", type: "image/png" },
      { url: BRAND.favicons.android512, sizes: "512x512", type: "image/png" },
    ],
    shortcut: BRAND.rootFaviconIco,
    apple: [
      { url: BRAND.rootAppleTouch, sizes: "180x180", type: "image/png" },
      { url: BRAND.favicons.apple, sizes: "180x180", type: "image/png" },
    ],
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
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <link rel="icon" type="image/svg+xml" href={BRAND.faviconSvg} />
        <link rel="icon" href={BRAND.rootFaviconIco} sizes="32x32" />
        <link rel="icon" type="image/png" sizes="32x32" href={BRAND.favicons[32]} />
        <link rel="icon" type="image/png" sizes="16x16" href={BRAND.favicons[16]} />
        <link rel="apple-touch-icon" sizes="180x180" href={BRAND.rootAppleTouch} />
        <link rel="manifest" href={BRAND.manifest} />
        <link rel="mask-icon" href={BRAND.symbolTransparentSvg} color="#0F6E56" />
        <meta name="theme-color" content={BRAND.themeColor} />
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
