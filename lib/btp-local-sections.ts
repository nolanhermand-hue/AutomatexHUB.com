import type { BtpLocalPageDef } from "@/lib/btp-copy";

export type BtpLocalSection = {
  title: string;
  paragraphs: string[];
};

export function buildBtpLocalSections(page: BtpLocalPageDef): BtpLocalSection[] {
  const { city, localHook, localDetail, distanceFromFlers } = page;
  return [
    {
      title: `Ce que les artisans de ${city} perdent chaque semaine`,
      paragraphs: [
        `${localHook} ${localDetail}`,
        "Un devis envoyé après 24 h a peu de chances d'être signé. Automatex Hub installe un système qui répond en 90 secondes et envoie vos devis pendant que vous finissez la journée sur le terrain.",
      ],
    },
    {
      title: "Comment ça marche concrètement",
      paragraphs: [
        "Nolan configure le système sur vos outils actuels : téléphone, messagerie, Telegram pour le résumé du soir. Vous n'installez rien, vous ne suivez pas de formation.",
        "Exemple : un client appelle pendant que vous posez une dalle — il reçoit un SMS personnalisé. Vous dictez le devis en sortant du chantier — le PDF part le même jour. À 18 h, un message Telegram résume la journée.",
      ],
    },
    {
      title: `Les artisans de ${city} que ça concerne`,
      paragraphs: [
        "Maçons, plombiers, électriciens, couvreurs, menuisiers, peintres, carreleurs : solo ou 1 à 5 salariés, CA 150 k à 500 k €, peu à l'aise avec l'ordinateur mais à l'aise avec le smartphone.",
        "Si vous reconnaissez la phrase « je le ferai ce soir » pour un devis qui ne part jamais, ce système est fait pour vous.",
      ],
    },
    {
      title: "Tarifs et accompagnement",
      paragraphs: [
        "Trois packs (Déclic 390€+99€/mois · Système 990€+249€/mois · Pilote 1690€+449€/mois) après mise en place. Pas d'engagement annuel. Chaque formule inclut un interlocuteur humain à Flers — pas une hotline.",
        "Le pack Pilote ajoute un point téléphonique mensuel avec Nolan, un ajustement par mois et une réponse sous 4 h en semaine.",
      ],
    },
    {
      title: `Nolan, basé à Flers — proche de ${city}`,
      paragraphs: [
        "Automatex Hub est basé à Flers (61100). Nolan Hermand répond au 06 45 38 42 33. C'est lui qui installe, ajuste et rappelle chaque mois.",
        distanceFromFlers ??
          "Pourquoi un prestataire local change tout : vous parlez à la même personne, en français, dans votre fuseau horaire — pas à un ticket ouvert à Paris.",
      ],
    },
  ];
}
