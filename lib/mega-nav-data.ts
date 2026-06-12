import { AUTOMATISATION_CEST_QUOI_PATH } from "@/lib/automatisation-cest-quoi";
import { CATEGORY_SUIVI_RAPPORTS, categoryToAnchor } from "@/lib/automations-catalog";

export { categoryToAnchor };

export const SOLUTIONS_MENU = {
  parMetier: [
    {
      label: "TPE & PME (tous secteurs)",
      href: "/automatisation-ia-tpe",
      desc: "Packs Déclic · Système · Pilote",
    },
    {
      label: "Artisans BTP",
      href: "/btp",
      desc: "Maçon · Plombier · Électricien · Orne",
    },
    {
      label: "Diagnostiqueurs immobiliers",
      href: "/immobilier",
      desc: "DPE · amiante · agences · Orne",
    },
  ],
  parBesoin: [
    { label: "Réponse aux demandes", href: `/automatisations#${categoryToAnchor("Demandes & réponses")}` },
    { label: "Devis automatiques", href: `/automatisations#${categoryToAnchor("Dictée & terrain")}` },
    { label: "Relances clients", href: `/automatisations#${categoryToAnchor("Relances & suivi")}` },
    { label: "Documents & Drive", href: `/automatisations#${categoryToAnchor("Documents & Drive")}` },
    { label: "Programme & résumé", href: `/automatisations#${categoryToAnchor("Résumés & planning")}` },
    {
      label: "Suivi & Rapports Métier",
      href: `/automatisations#${categoryToAnchor(CATEGORY_SUIVI_RAPPORTS)}`,
    },
  ],
  alaUne: [
    {
      icon: "⚡",
      title: "Réponse en moins de 2 minutes",
      desc: "Une demande arrive pendant votre visite. Réponse envoyée avant que vous sortiez.",
      href: "/immobilier#demo",
    },
    {
      icon: "📄",
      title: "Devis depuis note vocale",
      desc: "Vous dictez 2 minutes. Le devis est mis en page et envoyé avant que vous soyez rentré.",
      href: "/btp#demo",
    },
  ],
} as const;

/** Page pédagogique — visible dans Mega Nav (Solutions + Automatisations + mobile). */
export const MEGA_NAV_PEDAGOGIE = {
  label: "C'est quoi une automatisation ?",
  href: AUTOMATISATION_CEST_QUOI_PATH,
  desc: "Définition simple, exemples terrain, sans jargon",
} as const;

export const AUTOMATIONS_MENU = {
  immobilier: [
    { label: "Demandes & réponses", href: `/automatisations#${categoryToAnchor("Demandes & réponses")}` },
    { label: "Mails & tri intelligent", href: `/automatisations#${categoryToAnchor("Mails & tri")}` },
    { label: "Documents & Drive", href: `/automatisations#${categoryToAnchor("Documents & Drive")}` },
    { label: "Résumés & planning", href: `/automatisations#${categoryToAnchor("Résumés & planning")}` },
    { label: "Relances & suivi", href: `/automatisations#${categoryToAnchor("Relances & suivi")}` },
    {
      label: "Suivi & Rapports Métier",
      href: `/automatisations#${categoryToAnchor(CATEGORY_SUIVI_RAPPORTS)}`,
    },
  ],
  btp: [
    { label: "Appels manqués", href: `/automatisations#${categoryToAnchor("Appels & terrain BTP")}` },
    { label: "Devis automatiques", href: `/automatisations#${categoryToAnchor("Dictée & terrain")}` },
    { label: "Relances devis", href: `/automatisations#${categoryToAnchor("Relances & suivi")}` },
    { label: "Résumés & planning", href: `/automatisations#${categoryToAnchor("Résumés & planning")}` },
    {
      label: "Suivi & Rapports Métier",
      href: `/automatisations#${categoryToAnchor(CATEGORY_SUIVI_RAPPORTS)}`,
    },
  ],
} as const;

export type MegaDropdownKey = "solutions" | "automatisations" | null;

export const BTP_GEO_INTERNAL_LINKS = [
  { label: "Artisans Flers", href: "/automatisation-artisan-flers" },
  { label: "Artisans Alençon", href: "/automatisation-artisan-alencon" },
  { label: "Artisans Argentan", href: "/automatisation-artisan-argentan" },
  { label: "Relance devis", href: "/automatisation-pour-artisans/relance-devis-automatique" },
  { label: "Automatisation BTP Orne", href: "/automatisation-btp-orne" },
] as const;
