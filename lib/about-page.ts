import { NAP, SETUP_48H_NUANCE } from "@/lib/constants";

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
    {
      label: "LinkedIn",
      value: "Profil professionnel de Nolan Hermand",
      href: NAP.linkedinUrl,
    },
  ],
  narrative: [
    "Nolan Hermand a passé plusieurs années sur les chantiers (menuiserie puis couverture) à Flers, tout en se formant en autodidacte à l'automatisation, puis des mois à échanger avec des mandataires indépendants et des artisans de l'Orne — IAD, SAFTI, Capifrance, plombiers, électriciens, maçons — pour comprendre où leur activité perd du temps et de l'argent.",
    "Le constat revient souvent : les leads ou appels pendant le chantier, les devis qui traînent le soir, les mails qui s'accumulent, les documents introuvables au moment où le client rappelle.",
    "Automatex Hub est né de ce terrain-là, pas d'un pitch générique. Chaque configuration est construite manuellement, testée sur des scénarios réels, puis ajustée chaque mois avec vous.",
    "Sans engagement : vous pouvez arrêter à tout moment avec un simple mail.",
  ],
  stats: [
    { value: "< 2 min", label: "Délai de réponse cible (leads)" },
    { value: "48 h", label: "Mise en place après validation périmètre" },
    { value: "Sans engagement", label: "Résiliable en 1 mail" },
  ],
  directContact: "Une question avant de vous lancer ? Appelez :",
  storyHeading: "Pourquoi Automatex existe",
  storyParagraphs: [
    "Pendant des mois, j'ai discuté avec des mandataires IAD et SAFTI dans l'Orne, et avec des artisans — plombiers, électriciens, maçons — qui travaillent dans les mêmes coins que moi. Flers, Argentan, Alençon, les zones industrielles, les bourgs.",
    "À chaque fois, la même chose revenait : les leads qui arrivent pendant les visites, les devis qui traînent parce qu'on est trop fatigué le soir, les mails qui s'accumulent. Des problèmes simples. Des solutions qui n'existaient pas à un tarif accessible pour des indépendants.",
    "Sur les chantiers, j'ai vu le temps perdu en paperasse, devis et appels manqués — alors je me suis formé en parallèle à l'automatisation pour régler ça. J'ai 19 ans, plusieurs années terrain (menuiserie puis couverture). En immobilier, j'apprends en échangeant avec les mandataires. Ce que j'apporte : des systèmes qui tiennent, être joignable, m'adapter à ta réalité — pas à un PowerPoint.",
  ],
  storyFootnote:
    "Sans engagement et résiliable en un mail : vous gardez la main à tout moment.",
  concreteHeading: "Concrètement, ce que je fais",
  concreteSteps: [
    {
      step: "01",
      title: "Onboarding en 20 min",
      desc: "On se parle. Je comprends votre façon de travailler. Je construis la configuration sur votre vocabulaire, vos portails, votre réseau.",
    },
    {
      step: "02",
      title: "Mise en place",
      desc: `${SETUP_48H_NUANCE}. On teste ensemble sur 2–3 scénarios réels. Vous validez le ton avant envoi réel.`,
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
    href: "/rendez-vous",
  },
} as const;
