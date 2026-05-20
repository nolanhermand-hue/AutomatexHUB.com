/** Lazy loaders for scroll-triggered demos. */
export const loadAppelManque = () =>
  import("@/components/demo/demos/AppelManqueDemo").then((m) => ({ default: m.AppelManqueDemo }));
export const loadDevisAuto = () =>
  import("@/components/demo/demos/DevisAutoDemo").then((m) => ({ default: m.DevisAutoDemo }));
export const loadLeadImmobilier = () =>
  import("@/components/demo/demos/LeadImmobilierDemo").then((m) => ({
    default: m.LeadImmobilierDemo,
  }));
export const loadPointMensuel = () =>
  import("@/components/demo/demos/PointMensuelDemo").then((m) => ({
    default: m.PointMensuelDemo,
  }));

export const DEMO_STATIC = {
  appelManque: {
    src: "/assets/demos/appel-manque-static.png",
    alt: "Appel manqué traité par une réponse en 90 secondes",
  },
  devisAuto: {
    src: "/assets/demos/devis-auto-static.png",
    alt: "Dictée vocale transformée en devis PDF envoyé au client",
  },
  leadImmobilier: {
    src: "/assets/demos/lead-immobilier-static.png",
    alt: "Lead immobilier traité pendant une visite",
  },
  avantApres: {
    src: "/assets/demos/avant-apres-static.png",
    alt: "Journée avant et après Automatex",
  },
  pointMensuel: {
    src: "/assets/demos/point-mensuel-static.png",
    alt: "Point mensuel avec Nolan et rapport Telegram",
  },
} as const;
