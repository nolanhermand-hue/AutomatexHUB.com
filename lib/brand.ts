/** Chemins publics des assets marque — source unique pour head, JSON-LD, UI. */
export const BRAND = {
  /** Symbole direction X (SVG unique déposé) */
  symbolCircle: "/logo-mono.svg",
  symbolCircle2x: "/logo-mono.svg",
  symbolSvg: "/favicon.svg",
  symbolTransparentSvg: "/logo-mono.svg",
  /** Affichage UI / JSON-LD */
  symbol128: "/logo-mono.svg",
  symbolTransparent: "/logo-mono.svg",
  /** Pas de lockup horizontal — même symbole (nav/footer en variant symbol) */
  lockupLight: "/logo-mono.svg",
  lockupLight2x: "/logo-mono.svg",
  lockupDark: "/logo-mono.svg",
  lockupDark2x: "/logo-mono.svg",
  ogImage: "/assets/brand/og-image.png",
  ogImageSvg: "/assets/brand/og-image.svg",
  manifest: "/site.webmanifest",
  themeColor: "#070D1B",
  faviconSvg: "/favicon.svg",
  favicons: {
    16: "/assets/brand/favicons/favicon-16.png",
    32: "/assets/brand/favicons/favicon-32.png",
    48: "/assets/brand/favicons/favicon-48.png",
    96: "/assets/brand/favicons/favicon-96.png",
    apple: "/assets/brand/favicons/apple-touch-icon.png",
    android192: "/assets/brand/favicons/android-chrome-192.png",
    android512: "/assets/brand/favicons/android-chrome-512.png",
  },
  /** Raccourcis à la racine (hébergeurs / navigateurs legacy) */
  rootFavicon: "/favicon.png",
  rootAppleTouch: "/apple-touch-icon.png",
  rootFaviconIco: "/favicon.ico",
} as const;

export function brandAbsolute(path: string, siteUrl: string): string {
  return `${siteUrl.replace(/\/$/, "")}${path}`;
}
