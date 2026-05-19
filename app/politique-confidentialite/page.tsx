import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'Automatex : données collectées, finalités, durée de conservation, droits RGPD, mesure d'audience Plausible.",
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
};

/**
 * J12 — Politique de confidentialité RGPD complète :
 * - Finalités, base légale (art. 6 RGPD)
 * - Données collectées par catégorie
 * - Destinataires
 * - Durée de conservation
 * - Droits utilisateurs (accès, rectification, effacement, portabilité, opposition)
 * - Procédure de réclamation CNIL
 */
export default function PolitiqueConfidentialitePage() {
  return (
    <article className="mx-auto max-w-content px-gutter py-16">
      <h1 className="font-heading text-4xl text-text">Politique de confidentialité</h1>
      <div className="mt-8 space-y-8 text-[16px] leading-[1.7] text-muted">
        <section>
          <h2 className="font-heading text-2xl text-text">1. Responsable du traitement</h2>
          <p className="mt-3">
            <strong className="text-text">{NAP.brand}</strong>, représentée par {NAP.founder},
            domiciliée à {NAP.city} ({NAP.postalCode}), {NAP.region}, France.
            <br />
            Contact :{" "}
            <a className="text-primary underline" href={`mailto:${NAP.email}`}>
              {NAP.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">2. Données collectées et finalités</h2>
          <p className="mt-3">
            Le formulaire de contact collecte les données suivantes :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Prénom (identification)</li>
            <li>Adresse email professionnelle (prise de contact)</li>
            <li>Numéro de téléphone (rappel pour la démo)</li>
            <li>Réseau mandataire (qualification de la demande)</li>
            <li>Offre choisie (préparation de l&apos;échange)</li>
          </ul>
          <p className="mt-3">
            <strong className="text-text">Finalité :</strong> planifier un entretien de
            démonstration de 15 à 20 minutes et préparer la mise en place du service Automatex
            adapté à votre activité.
          </p>
          <p className="mt-2">
            <strong className="text-text">Base légale :</strong> consentement de la personne
            concernée (article 6.1.a RGPD) ou mesures précontractuelles (article 6.1.b RGPD).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">3. Destinataires</h2>
          <p className="mt-3">
            Les données sont accessibles uniquement à {NAP.founder} (fondateur) et ne font
            l&apos;objet d&apos;aucune revente ni cession à des tiers commerciaux.
          </p>
          <p className="mt-3">
            <strong className="text-text">Sous-traitants techniques :</strong>
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong className="text-text">Netlify, Inc.</strong> (hébergement du formulaire et
              du site statique) — clauses contractuelles types RGPD.
            </li>
            <li>
              <strong className="text-text">{NAP.hostingProvider}</strong> (hébergement des données
              opérationnelles côté Automatex).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">4. Durée de conservation</h2>
          <p className="mt-3">
            Les données du formulaire sont conservées <strong className="text-text">3 ans</strong>{" "}
            à compter du dernier contact (recommandation CNIL pour la prospection commerciale BtoB),
            sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">5. Mesure d&apos;audience</h2>
          <p className="mt-3">
            Le site utilise <strong className="text-text">Plausible Analytics</strong>, solution
            européenne d&apos;analyse d&apos;audience sans cookie et anonymisée. Aucun identifiant
            unique n&apos;est créé, aucune donnée n&apos;est partagée avec des tiers, et la solution
            est exemptée de consentement par la CNIL (délibération du 17 septembre 2020).
          </p>
          <p className="mt-3">
            Google Analytics 4 peut également être utilisé en mode anonymisé (anonymize_ip),
            sous réserve d&apos;une mise en conformité par bandeau de consentement le cas échéant.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">6. Vos droits</h2>
          <p className="mt-3">Vous disposez à tout moment des droits suivants :</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, écrivez à{" "}
            <a className="text-primary underline" href={`mailto:${NAP.email}`}>
              {NAP.email}
            </a>{" "}
            ou par courrier à {NAP.brand}, {NAP.city} {NAP.postalCode}. Une réponse vous sera
            apportée sous 30 jours maximum.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-text">7. Réclamation CNIL</h2>
          <p className="mt-3">
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
            réclamation auprès de la{" "}
            <a
              className="text-primary underline"
              href="https://www.cnil.fr/fr/plaintes"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL (Commission nationale de l&apos;informatique et des libertés)
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-muted/70">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}.
        </p>
      </div>
    </article>
  );
}
