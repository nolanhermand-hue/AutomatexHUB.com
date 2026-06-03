/** Chemins publics des assets marque — source unique pour head, JSON-LD, UI. */
export const BRAND = {
  /** Symbole rond officiel (WebP) */
  symbolCircle: "/assets/brand/logo-automatex-circle.webp",
  symbolCircle2x: "/assets/brand/logo-automatex-circle@2x.webp",
  symbolSvg: "/assets/brand/logo-orbit-symbol-on-bg.svg",
  symbolTransparentSvg: "/assets/brand/logo-orbit-symbol.svg",
  /** Affichage UI / JSON-LD — cercle WebP */
  symbol128: "/assets/brand/logo-automatex-circle.webp",
  symbolTransparent: "/assets/brand/logo-automatex-circle.webp",
  lockupLight: "/assets/brand/logo-orbit-lockup-light.png",
  lockupLight2x: "/assets/brand/logo-orbit-lockup-light@2x.png",
  lockupDark: "/assets/brand/logo-orbit-lockup-dark.png",
  lockupDark2x: "/assets/brand/logo-orbit-lockup-dark@2x.png",
  ogImage: "/assets/brand/og-image.png",
  ogImageSvg: "/assets/brand/og-image.svg",
  manifest: "/site.webmanifest",
  themeColor: "#080D1A",
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
