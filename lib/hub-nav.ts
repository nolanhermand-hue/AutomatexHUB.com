/** Navigation globale site vitrine (hub + landings). */
export const SITE_NAV = [
  { href: "/automatisation-ia-tpe", label: "TPE & PME" },
  { href: "/immobilier", label: "Immobilier" },
  { href: "/btp", label: "Artisans BTP" },
  { href: "/automatisations", label: "Automatisations" },
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/vos-donnees", label: "Vos données" },
  { href: "/a-propos", label: "À propos" },
] as const;

export function contactHref(pathname: string): string {
  if (pathname.startsWith("/automatisations") || pathname.startsWith("/automatisation-ia-tpe")) {
    return "/automatisation-ia-tpe#contact";
  }
  if (pathname.startsWith("/accompagnement")) {
    return "/accompagnement#contact";
  }
  if (
    pathname.startsWith("/btp") ||
    pathname.startsWith("/automatisation-artisan") ||
    pathname.startsWith("/automatisation-btp") ||
    pathname.startsWith("/devis-automatique")
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
  { href: "/devis-automatique-artisan-orne", label: "Devis auto Orne" },
  { href: "/devis-automatique-artisan", label: "Devis artisan" },
  { href: "/btp", label: "Landing BTP" },
] as const;
