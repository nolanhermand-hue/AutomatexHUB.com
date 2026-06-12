import {
  LegalPageShell,
  LegalP,
  LegalSection,
  LegalUl,
  LegalInfraCallout,
} from "@/components/legal/LegalPageShell";
import { LEGAL_BUSINESS_DATA_ROUTING } from "@/lib/legal-infrastructure-copy";
import { LEGAL, legalContactBlock } from "@/lib/legal";
import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Automatex | RGPD · UE",
  description:
    "Politique RGPD Automatex : données collectées, sous-traitants, durées, droits, sécurité, Plausible sans cookie, contact CNIL.",
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
};

const SUBPROCESSORS: ReadonlyArray<{
  name: string;
  role: string;
  location: string;
  guarantees: string;
}> = [
  { name: "N8N Cloud", role: "Moteur d'automatisation (enchaînements)", location: "Francfort, Allemagne (UE)", guarantees: "RGPD, DPA" },
  { name: "Mistral AI", role: "Traitement linguistique", location: "Paris, France (UE)", guarantees: "RGPD, données UE" },
  { name: "Google Workspace", role: "Email, Drive, Calendar", location: "Compte client", guarantees: "CGU Google du client" },
  { name: "Telegram", role: "Notifications", location: "Compte client", guarantees: "CGU Telegram du client" },
  { name: "Plausible Analytics", role: "Statistiques site", location: "Union européenne", guarantees: "Exempté CNIL, sans cookie" },
  { name: "Netlify", role: "CDN site statique", location: "États-Unis / Edge global", guarantees: "Fichiers publics uniquement, sans données client" },
];

export default function PolitiqueConfidentialitePage() {
  const c = legalContactBlock();

  return (
    <LegalPageShell title="Politique de confidentialité">
      <LegalInfraCallout />
      <LegalP>
        Responsable du traitement : {c.founder} — {c.brand}. Contact :{" "}
        <a className="text-primary underline" href={`mailto:${c.email}`}>
          {c.email}
        </a>
        .
      </LegalP>

      <LegalSection title="1. Qui sommes-nous ?">
        <LegalP>
          {NAP.brand} est un service d&apos;automatisation pour diagnostiqueurs immobiliers,
          artisans BTP et TPE, édité par {c.founder} ({LEGAL.status}), basé à {NAP.city}, Orne (
          {NAP.postalCode}).
        </LegalP>
        <LegalP>
          Site : {LEGAL.siteUrl} · Email : {c.email} · Téléphone : {c.phone}
        </LegalP>
      </LegalSection>

      <LegalSection title="2. Quelles données collectons-nous ?">
        <LegalP>
          <strong className="text-text">2.1 Formulaire de contact / demande de démo</strong>
        </LegalP>
        <LegalUl
          items={[
            "Prénom",
            "Adresse email professionnelle",
            "Numéro de téléphone",
            "Offre ou sujet de demande (ex. démo, résiliation)",
            "Paramètres UTM le cas échéant (source de visite)",
          ]}
        />
        <LegalP>
          Base légale : mesures précontractuelles (art. 6.1.b RGPD). Durée : 3 ans à compter du
          dernier contact.
        </LegalP>
        <LegalP>
          <strong className="text-text">2.2 Utilisation du service (clients)</strong>
        </LegalP>
        <LegalP>
          Dans le cadre de la prestation, Automatex accède aux outils que vous autorisez : emails
          entrants (lecture), calendrier Google (lecture), Google Drive (lecture et création de
          dossiers), notifications Telegram (envoi). Ces données servent uniquement à exécuter la
          prestation. Elles ne sont ni vendues ni cédées. {LEGAL_BUSINESS_DATA_ROUTING}{" "}
          <Link href="/vos-donnees" className="text-primary underline">
            Vos données
          </Link>
          .
        </LegalP>
        <LegalP>
          Base légale : exécution du contrat (art. 6.1.b RGPD). Durée : durée du contrat + 30
          jours après résiliation (effacement sous 7 jours sur demande — voir{" "}
          <Link href="/cgv" className="text-primary underline">
            CGV
          </Link>
          ).
        </LegalP>
        <LegalP>
          <strong className="text-text">2.3 Statistiques du site</strong>
        </LegalP>
        <LegalP>
          Plausible Analytics : aucun cookie, pas de données personnelles identifiables, statistiques
          agrégées (pages vues, pays). Exempté de consentement CNIL (délibération n°2020-091).
        </LegalP>
      </LegalSection>

      <LegalSection title="3. Sous-traitants">
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-card text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-3 py-2">Sous-traitant</th>
                <th className="px-3 py-2">Rôle</th>
                <th className="px-3 py-2">Localisation</th>
                <th className="px-3 py-2">Garanties</th>
              </tr>
            </thead>
            <tbody>
              {SUBPROCESSORS.map((row) => (
                <tr key={row.name} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 font-medium text-text">{row.name}</td>
                  <td className="px-3 py-2">{row.role}</td>
                  <td className="px-3 py-2">{row.location}</td>
                  <td className="px-3 py-2">{row.guarantees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Aucune donnée n&apos;est transmise à des pays tiers sans garanties appropriées, hors
          comptes Google/Telegram que vous maîtrisez.
        </p>
      </LegalSection>

      <LegalSection title="4. Vos droits">
        <LegalUl
          items={[
            "Droit d'accès, rectification, effacement, opposition",
            "Droit à la portabilité et à la limitation du traitement",
            "Droit de retirer votre consentement lorsque le traitement repose sur celui-ci",
          ]}
        />
        <LegalP>
          Exercice :{" "}
          <a className="text-primary underline" href={`mailto:${c.email}`}>
            {c.email}
          </a>{" "}
          — réponse sous 30 jours maximum.
        </LegalP>
        <LegalP>
          Réclamation CNIL :{" "}
          <a
            className="text-primary underline"
            href="https://www.cnil.fr/fr/plaintes"
            rel="noopener noreferrer"
          >
            www.cnil.fr/fr/plaintes
          </a>
        </LegalP>
      </LegalSection>

      <LegalSection title="5. Sécurité">
        <LegalUl
          items={[
            "Chiffrement en transit (HTTPS / TLS)",
            "Données métier hébergées en Union européenne (automatisations Francfort, traitement linguistique Paris/UE)",
            "Accès restreint aux configurations de production",
            "Authentification renforcée (MFA) sur les comptes de production",
            "Sauvegardes sur infrastructure UE",
            "Notification en cas de violation sous 72 h (art. 33 RGPD)",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Cookies">
        <LegalP>
          Pas de cookies publicitaires ni de traceurs tiers. Plausible exempté. Le formulaire ne
          dépose pas de cookie de session persistant.
        </LegalP>
      </LegalSection>

      <LegalSection title="7. Modifications">
        <LegalP>
          Cette politique peut évoluer. La date en tête de page est mise à jour. En cas de
          modification substantielle, les clients actifs sont informés par email.
        </LegalP>
      </LegalSection>

      <LegalSection title="8. Contact">
        <LegalP>
          {c.founder} — {c.brand}
          <br />
          {c.email} · {c.phone}
          <br />
          {c.address}
        </LegalP>
        <LegalP>
          Voir aussi :{" "}
          <Link href="/securite" className="text-primary underline">
            comment Automatex protège vos données
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalPageShell>
  );
}
