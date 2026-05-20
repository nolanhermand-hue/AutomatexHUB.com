import { NAP } from "@/lib/constants";

/** Page À propos — version transparente (légal / confiance). */
export const ABOUT_PAGE = {
  metaTitle: "À propos — Automatex · Flers, Normandie",
  metaDescription:
    "Automatex Hub : accompagnement et systèmes pour mandataires immobiliers et artisans BTP en Orne. Conçu à Flers, données OVHcloud France, RGPD.",
  h1: "Construit à Flers, pour les mandataires et artisans de l'Orne",
  facts: [
    { label: "Marque", value: NAP.brand },
    { label: "Éditeur", value: `${NAP.founder} — ${NAP.role}, 19 ans` },
    { label: "Création", value: "2026" },
    { label: "Siège", value: `${NAP.streetAddress}, ${NAP.postalCode} ${NAP.city}` },
    { label: "SIRET", value: NAP.siret },
    { label: "Code APE", value: `${NAP.ape} — ${NAP.apeLabel}` },
    {
      label: "Activité",
      value: "Systèmes automatiques + accompagnement pour mandataires immobiliers et artisans BTP",
    },
    { label: "Hébergement données", value: NAP.hostingProvider },
    { label: "Site", value: "Export statique Next.js · CDN Netlify" },
    { label: "Contact", value: `${NAP.email} · ${NAP.phoneDisplay}` },
  ],
  narrative: [
    "Nolan Hermand a passé des mois à échanger avec des mandataires indépendants et des artisans du BTP dans l'Orne — IAD, SAFTI, Capifrance, plombiers, électriciens, maçons — pour comprendre où leur activité perd du temps et de l'argent.",
    "Le constat revient souvent : les leads ou appels pendant le chantier, les devis qui traînent le soir, les mails qui s'accumulent, les documents introuvables au moment où le client rappelle.",
    "Automatex Hub est né de ce terrain-là, pas d'un pitch générique. Chaque configuration est construite manuellement, testée sur des scénarios réels, puis ajustée chaque mois avec vous.",
    "Si ça ne fonctionne pas pour vous dans les 30 premiers jours, vous êtes remboursé — frais d'installation et premier mois — sans discussion.",
  ],
  stats: [
    { value: "< 2 min", label: "Délai de réponse cible (leads)" },
    { value: "48 h", label: "Mise en place garantie" },
    { value: "30 j", label: "Satisfait ou remboursé" },
  ],
  directContact: "Une question avant de vous lancer ? Appelez :",
  storyHeading: "Pourquoi Automatex existe",
  storyParagraphs: [
    "Pendant des mois, j'ai discuté avec des mandataires IAD et SAFTI dans l'Orne, et avec des artisans — plombiers, électriciens, maçons — qui travaillent dans les mêmes coins que moi. Flers, Argentan, Alençon, les zones industrielles, les bourgs.",
    "À chaque fois, la même chose revenait : les leads qui arrivent pendant les visites, les devis qui traînent parce qu'on est trop fatigué le soir, les mails qui s'accumulent. Des problèmes simples. Des solutions qui n'existaient pas à un tarif accessible pour des indépendants.",
    "J'ai 19 ans. Je n'ai pas 10 ans d'expérience dans l'immobilier ou le BTP. Ce que j'ai, c'est la capacité à construire des systèmes qui fonctionnent, à rester joignable, et à m'adapter à la réalité terrain — pas à un PowerPoint.",
  ],
  storyFootnote:
    "Si ça ne fonctionne pas dans les 30 premiers jours, vous êtes remboursé. C'est la seule garantie honnête que je puisse vous donner au lancement.",
  concreteHeading: "Concrètement, ce que je fais",
  concreteSteps: [
    {
      step: "01",
      title: "Onboarding en 20 min",
      desc: "On se parle. Je comprends votre façon de travailler. Je construis la configuration sur votre vocabulaire, vos portails, votre réseau.",
    },
    {
      step: "02",
      title: "Mise en place en 48h",
      desc: "La configuration est active. On teste ensemble sur 2–3 scénarios réels. Vous voyez le résultat avant de payer quoi que ce soit de récurrent.",
    },
    {
      step: "03",
      title: "Point mensuel inclus",
      desc: "Chaque mois, je vous appelle. 20 minutes. On regarde ce qui fonctionne, ce qui peut être amélioré. J'ajuste immédiatement.",
    },
    {
      step: "04",
      title: "Joignable si ça coince",
      desc: "Un message Telegram ou un appel. Je réponds. Pas un ticket, pas un formulaire. C'est moi qui ai installé — c'est moi qui règle.",
    },
  ],
  launchTransparency: {
    title: "Transparence sur le lancement",
    body: "Automatex est en phase de lancement dans l'Orne. Il n'y a pas encore de dizaines de clients à vous montrer. Ce que je peux vous montrer, c'est le système en action sur votre propre cas — lors d'un appel de 20 minutes, gratuit, sans engagement. Les 5 premiers clients bénéficient d'un tarif fondateur bloqué à vie.",
    cta: "Voir si le tarif fondateur est encore ouvert →",
    href: "/btp#contact",
  },
} as const;
