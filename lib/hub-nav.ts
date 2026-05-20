/** Navigation globale site vitrine (hub + landings). */
export const SITE_NAV = [
  { href: "/immobilier", label: "Immobilier" },
  { href: "/btp", label: "Artisans BTP" },
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/a-propos", label: "À propos" },
] as const;

export function contactHref(pathname: string): string {
  if (
    pathname.startsWith("/btp") ||
    pathname.startsWith("/automatisation") ||
    pathname.startsWith("/devis-automatique") ||
    pathname.startsWith("/accompagnement")
  ) {
    return "/btp#contact";
  }
  if (pathname.startsWith("/immobilier") || pathname.startsWith("/mandataires")) {
    return "/immobilier#contact";
  }
  if (pathname === "/") {
    return "/immobilier#contact";
  }
  return "/immobilier#contact";
}

export const FOOTER_BTP_LOCAL_LINKS = [
  { href: "/automatisation-btp-orne", label: "BTP Orne" },
  { href: "/automatisation-artisan-flers", label: "Artisans Flers" },
  { href: "/automatisation-artisan-alencon", label: "Artisans Alençon" },
  { href: "/automatisation-artisan-argentan", label: "Artisans Argentan" },
  { href: "/devis-automatique-artisan", label: "Devis artisan" },
  { href: "/btp", label: "Landing BTP" },
] as const;
