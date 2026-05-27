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
  title: "Conditions générales de vente — Automatex",
  description:
    "CGV Automatex : offres Essentiel, Pro, Cabinet, paiement, garantie 30 jours, résiliation en ligne, sous-traitance RGPD, droit français.",
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
          {c.address}) et tout mandataire immobilier indépendant souscrivant une offre Automatex.
          Elles prévalent sur toute autre condition, sauf accord écrit contraire.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 2 — Description des services">
        <LegalP>
          <strong className="text-text">Essentiel</strong> — Installation 199 € HT · Formule 99 €
          HT / mois : réponse aux leads &lt; 2 min, notification téléphone, mise en place 48 h,
          onboarding et accompagnement 30 premiers jours.
        </LegalP>
        <LegalP>
          <strong className="text-text">Pro</strong> — Installation 499 € HT · Formule 199 € HT /
          mois : tout Essentiel + tri emails, brouillons, résumé Telegram, classement Drive.
        </LegalP>
        <LegalP>
          <strong className="text-text">Cabinet</strong> — Installation 999 € HT · Formule 449 € HT
          / mois : tout Pro + réponse prioritaire, note vocale post-visite, réglage mensuel et
          rapport d&apos;activité.
        </LegalP>
        <LegalP>
          Une offre <strong className="text-text">sur mesure</strong> peut être définie après
          entretien de cadrage (30 min) — devis écrit. Tarifs annuels : voir grille sur l&apos;
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
            "Appel découverte de 20 minutes",
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
          Drive fournis. Retard imputable au Prestataire &gt; 5 jours ouvrés : remboursement des
          frais d&apos;installation possible.
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

      <LegalSection title="Article 8 — Garantie 30 jours">
        <LegalP>
          À compter de l&apos;activation, remboursement intégral des frais d&apos;installation et
          du premier mois si le service ne convient pas. Demande par email à {c.email} sans motif,
          sans formulaire. Remboursement sous 7 jours ouvrés. Données restituées ou effacées sous 7
          jours ouvrés.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 9 — Résiliation">
        <LegalP>
          Le Client résilie à tout moment, sans frais, par email à {c.email}. Conformément à la loi
          n°2022-1158, une demande de résiliation peut aussi être initiée depuis le{" "}
          <Link href="/#contact?sujet=resiliation" className="text-primary underline">
            formulaire de contact
          </Link>{" "}
          (sujet : résiliation). Effet en fin de mois en cours. Données effacées sous 7 jours.
        </LegalP>
        <LegalP>
          Résiliation par le Prestataire : impayé après mise en demeure 15 jours, ou usage illicite
          — préavis 7 jours par email.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 10 — Données (sous-traitance RGPD)">
        <LegalP>
          Automatex accède aux outils du Client pour exécuter le contrat. Le Client reste
          responsable de traitement vis-à-vis de ses propres clients. Automatex s&apos;engage à
          traiter uniquement sur instruction, sans revente. {LEGAL_BUSINESS_DATA_ROUTING} Restitution /
          effacement sous 7 jours après fin de contrat, notification de violation sous 72 h. Voir{" "}
          <Link href="/politique-confidentialite" className="text-primary underline">
            politique de confidentialité
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 11 — Responsabilité">
        <LegalP>
          Responsabilité limitée aux dommages directs, plafonnée aux sommes versées sur les 3
          derniers mois. Force majeure exclue. Résultats commerciaux (leads, CA) non garantis —
          exemples indicatifs.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 12 — Propriété intellectuelle">
        <LegalP>
          Configurations et scripts restent la propriété de {c.founder}. Droit d&apos;usage non
          exclusif pour la durée du contrat. À la résiliation, retrait des scripts possible ; les
          données Client restent sa propriété.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 13 — Litiges">
        <LegalP>
          Droit français. Médiation préalable : {LEGAL.mediator.name} —{" "}
          <a className="text-primary underline" href={LEGAL.mediator.url} rel="noopener noreferrer">
            {LEGAL.mediator.url}
          </a>
          . À défaut, tribunaux de Flers (Orne), sauf règle impérative contraire.
        </LegalP>
      </LegalSection>

      <LegalSection title="Article 14 — Divers">
        <LegalP>
          Nullité partielle sans affecter le reste. Modifications CGV : information par email, 30
          jours de préavis ; maintien de la formule vaut acceptation.
        </LegalP>
      </LegalSection>
    </LegalPageShell>
  );
}
