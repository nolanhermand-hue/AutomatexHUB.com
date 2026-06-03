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
      label: "Mandataires immobiliers",
      href: "/immobilier",
      desc: "IAD · SAFTI · Capifrance · Orne",
    },
  ],
  parBesoin: [
    { label: "Réponse aux leads", href: `/automatisations#${categoryToAnchor("Leads & réponses")}` },
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
      title: "Réponse en 90 secondes",
      desc: "Un lead arrive pendant votre visite. Réponse envoyée avant que vous sortiez.",
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

export const AUTOMATIONS_MENU = {
  immobilier: [
    { label: "Leads & réponses", href: `/automatisations#${categoryToAnchor("Leads & réponses")}` },
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
  { label: "Devis automatique Orne", href: "/devis-automatique-artisan-orne" },
  { label: "Automatisation BTP Orne", href: "/automatisation-btp-orne" },
] as const;
