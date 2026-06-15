import {
  LegalPageShell,
  LegalP,
  LegalSection,
  LegalUl,
  LegalInfraCallout,
} from "@/components/legal/LegalPageShell";
import { LEGAL_BUSINESS_DATA_ROUTING } from "@/lib/legal-infrastructure-copy";
import { LEGAL, legalContactBlock } from "@/lib/legal";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions générales de vente — AutomateX",
  description:
    "CGV AutomateX : packs Déclic, Système, Pilote, paiement, résiliation en ligne, sous-traitance RGPD, droit français.",
  alternates: { canonical: `${SITE_URL}/cgv` },
};

export default function CgvPage() {
  const c = legalContactBlock();

  return (
    <LegalPageShell title="Conditions générales de vente">
      <LegalInfraCallout />
      <LegalP>
        Prestataire : {c.founder} — {c.brand} · SIRET : {LEGAL.siret} · {LEGAL.tvaNotice}
      </LegalP>

      <LegalSection title="Article 1 — Objet">
        <LegalP>
          Les présentes CGV régissent les relations entre {c.founder} ({c.brand}, {LEGAL.status},
          {c.address}) et tout client professionnel (diagnostiqueur immobilier, artisan BTP, TPE ou PME)
          souscrivant une offre AutomateX. Elles prévalent sur toute autre condition, sauf accord
          écrit contraire.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 2 — Description des services">
        <LegalP>
          <strong className="text-text">Déclic</strong> — Mise en place 390 € HT (1er mois inclus) ·
          puis 99 € HT / mois : 1 automatisation sur-mesure, accompagnement Essentiel (hébergement
          RGPD, maintenance, point mensuel court).
        </LegalP>
        <LegalP>
          <strong className="text-text">Système</strong> — Mise en place 990 € HT (1er mois inclus)
          · puis 249 € HT / mois : 3 à 4 automatisations, accompagnement Suivi (point 20 min,
          ajustements continus).
        </LegalP>
        <LegalP>
          <strong className="text-text">Pilote</strong> — Mise en place 1690 € HT (1er mois inclus)
          · puis 449 € HT / mois : Ensemble de vos outils + fonction sur mesure, accompagnement Copilote (réponse 4
          h, optimisation proactive).
        </LegalP>
        <LegalP>
          Une offre <strong className="text-text">sur mesure</strong> peut être définie après
          entretien de cadrage (30 min) — devis écrit. Grille publique sur l&apos;
          <Link href="/#pricing" className="text-primary underline">
            accueil
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 3 — Commande">
        <LegalUl
          items={[
            "Demande via le formulaire ou contact direct",
            "Appel découverte de 30 minutes",
            "Validation écrite ou orale de l'offre",
            "Paiement des frais d'installation",
          ]}
        />
        <LegalP>Aucun contrat avant validation explicite des deux parties.</LegalP>
      </LegalSection>

      <LegalSection title="Article 4 — Paiement">
        <LegalP>
          Installation à la commande. Formule mensuelle prélevée à date anniversaire. Moyens :
          virement, prélèvement SEPA, carte (lien sécurisé). Retard : pénalités légales + 40 € de
          recouvrement (art. D441-5 Code de commerce).
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 5 — Délai">
        <LegalP>
          Service opérationnel sous 48 h ouvrées après l&apos;appel, si accès Gmail, Telegram et
          Drive fournis. Retard imputable au Prestataire &gt; 5 jours ouvrés : avoir sur les frais
          d&apos;installation possible.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 6 — Obligations du Prestataire">
        <LegalUl
          items={[
            "Fournir le service de l'offre souscrite",
            "Configurer et tester avant activation",
            "Assistance selon les délais de l'offre",
            "Exécuter les automatisations sur N8N Cloud (Francfort, UE) et Mistral AI (Paris, UE)",
            "Préavis 30 jours en cas de modification substantielle",
          ]}
        />
      </LegalSection>

      <LegalSection title="Article 7 — Obligations du Client">
        <LegalUl
          items={[
            "Fournir des accès valides aux outils nécessaires",
            "Ne pas partager les accès de configuration",
            "Signaler tout changement d'outil ou d'organisation",
            "Régler les échéances convenues",
          ]}
        />
      </LegalSection>

      <LegalSection title="Article 8 — Sans engagement">
        <LegalP>
          Les formules sont sans engagement. Le Client peut arrêter à tout moment, avec effet en fin
          de mois en cours, sur simple demande par email à {c.email}. Données restituées ou effacées
          sous 7 jours ouvrés.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 9 — Périmètre convenu et conformité du service">
        <LegalP>
          Le service est déployé conformément au périmètre validé lors de l&apos;audit de cadrage
          (scénarios, canaux, délais et messages types convenus). Les{" "}
          <strong className="text-text">ajustements mineurs</strong> nécessaires pour tenir ce
          périmètre sont inclus dans la mensualité, dans la limite des capacités techniques des
          outils connectés.
        </LegalP>
        <LegalP>
          Toute extension hors périmètre (nouveau canal, nouveau métier, volume non prévu) fait
          l&apos;objet d&apos;un devis complémentaire ou d&apos;un changement de formule. Le Client
          coopère à la mise en service (accès, tests, retours dans des délais raisonnables).{" "}
          <strong className="text-text">Aucun remboursement des frais de mise en place</strong> n&apos;est
          dû en cas de différend sur les résultats commerciaux ou sur un périmètre modifié après
          validation (voir article 12). En cas de résiliation, les modalités de l&apos;article 10
          s&apos;appliquent.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 10 — Résiliation">
        <LegalP>
          Le Client résilie à tout moment, sans frais, par email à {c.email}. Conformément à la loi
          n°2022-1158, une demande de résiliation peut aussi être initiée depuis le{" "}
          <Link href="/rendez-vous?sujet=resiliation" className="text-primary underline">
            formulaire de contact
          </Link>{" "}
          (sujet : résiliation). Effet en fin de mois en cours. Données effacées sous 7 jours.
        </LegalP>
        <LegalP>
          Résiliation par le Prestataire : impayé après mise en demeure 15 jours, ou usage illicite
          — préavis 7 jours par email.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 11 — Données (sous-traitance RGPD)">
        <LegalP>
          AutomateX accède aux outils du Client pour exécuter le contrat. Le Client reste
          responsable de traitement vis-à-vis de ses propres clients. AutomateX s&apos;engage à
          traiter uniquement sur instruction, sans revente. {LEGAL_BUSINESS_DATA_ROUTING} Restitution /
          effacement sous 7 jours après fin de contrat, notification de violation sous 72 h. Voir{" "}
          <Link href="/politique-confidentialite" className="text-primary underline">
            politique de confidentialité
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 12 — Responsabilité">
        <LegalP>
          Responsabilité limitée aux dommages directs, plafonnée aux sommes versées sur les 3
          derniers mois. Force majeure exclue. Résultats commerciaux (clients, CA) non garantis —
          exemples indicatifs.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 13 — Propriété intellectuelle">
        <LegalP>
          Configurations et scripts restent la propriété de {c.founder}. Droit d&apos;usage non
          exclusif pour la durée du contrat. À la résiliation, retrait des scripts possible ; les
          données Client restent sa propriété.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 14 — Litiges">
        <LegalP>
          Droit français. Médiation préalable : {LEGAL.mediator.name} —{" "}
          <a className="text-primary underline" href={LEGAL.mediator.url} rel="noopener noreferrer">
            {LEGAL.mediator.url}
          </a>
          . À défaut, tribunaux de Flers (Orne), sauf règle impérative contraire.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 15 — Divers">
        <LegalP>
          Nullité partielle sans affecter le reste. Modifications CGV : information par email, 30
          jours de préavis ; maintien de la formule vaut acceptation.
        </LegalP>
      </LegalSection>
    </LegalPageShell>
  );
}
