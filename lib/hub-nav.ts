/** Navigation globale site vitrine (hub + landings). */
export const SITE_NAV = [
  { href: "/automatisation-pour-artisans", label: "Automatisations pro" },
  { href: "/normandie", label: "Normandie" },
  { href: "/faq", label: "FAQ" },
  { href: "/automatisation-ia-tpe", label: "TPE & PME" },
  { href: "/immobilier", label: "Immobilier" },
  { href: "/btp", label: "Artisans BTP" },
  { href: "/automatisations", label: "Automatisations" },
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/vos-donnees", label: "Vos données" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const RENDEZ_VOUS_PATH = "/rendez-vous" as const;

type RendezVousParams = {
  offre?: string;
  sujet?: string;
};

/** URL canonique prise de rendez-vous / formulaire prospect. */
export function rendezVousHref(params?: RendezVousParams): string {
  if (!params?.offre && !params?.sujet) return RENDEZ_VOUS_PATH;
  const search = new URLSearchParams();
  if (params.offre) search.set("offre", params.offre);
  if (params.sujet) search.set("sujet", params.sujet);
  const q = search.toString();
  return q ? `${RENDEZ_VOUS_PATH}?${q}` : RENDEZ_VOUS_PATH;
}

/** CTA nav / header — toujours la page Rendez-vous (plus de hash funnel). */
export function contactHref(pathname: string): string {
  void pathname;
  return RENDEZ_VOUS_PATH;
}

export const FOOTER_BTP_LOCAL_LINKS = [
  { href: "/automatisation-btp-orne", label: "BTP Orne" },
  { href: "/automatisation-artisan-flers", label: "Artisans Flers" },
  { href: "/automatisation-artisan-alencon", label: "Artisans Alençon" },
  { href: "/automatisation-artisan-argentan", label: "Artisans Argentan" },
  { href: "/automatisation-pour-artisans/relance-devis-automatique", label: "Relance devis" },
  { href: "/automatisation-pour-artisans/sms-appel-manque", label: "SMS appel manqué" },
  { href: "/btp", label: "Landing BTP" },
] as const;
