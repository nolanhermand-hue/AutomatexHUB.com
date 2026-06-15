import { BRAND_FULL } from "@/lib/constants";
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
        `Sur le chantier, le client suivant ne patiente pas longtemps. ${BRAND_FULL} installe un système qui répond en moins de 2 minutes et t'aide à faire partir tes devis sans repartir sur la paperasse le soir.`,
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
        "Trois packs (Déclic 390 € + 99 €/mois · Système 990 € + 249 €/mois · Pilote 1690 € + 449 €/mois) après mise en place. Sans engagement. Chaque formule inclut un interlocuteur humain à Flers — pas une hotline.",
        "Le pack Pilote ajoute un point téléphonique mensuel avec Nolan, un ajustement par mois et une réponse sous 4 h en semaine.",
      ],
    },
    {
      title: `Nolan, basé à Flers — proche de ${city}`,
      paragraphs: [
        `${BRAND_FULL} est basé à Flers (61100). Nolan Hermand répond au 06 45 38 42 33. C'est lui qui installe, ajuste et rappelle chaque mois.`,
        distanceFromFlers ??
          "Pourquoi un prestataire local change tout : vous parlez à la même personne, en français, dans votre fuseau horaire — pas à un ticket ouvert à Paris.",
      ],
    },
  ];
}
