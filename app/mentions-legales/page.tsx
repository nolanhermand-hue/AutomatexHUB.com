import {
  LegalPageShell,
  LegalP,
  LegalSection,
  LegalUl,
  LegalInfraCallout,
} from "@/components/legal/LegalPageShell";
import { LEGAL_BUSINESS_DATA_ROUTING, LEGAL_SITE_CDN_TRANSPARENCY } from "@/lib/legal-infrastructure-copy";
import { LEGAL, legalContactBlock } from "@/lib/legal";
import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Automatex | Saint-Georges-des-Groseillers (61100), Orne",
  description:
    "Mentions légales LCEN : éditeur Nolan Hermand (EI), hébergeurs Netlify et OVHcloud, propriété intellectuelle, RGPD, Plausible Analytics.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  const c = legalContactBlock();

  return (
    <LegalPageShell title="Mentions légales">
      <LegalInfraCallout />

      <LegalSection title="Éditeur du site" code="01 // ÉDITEUR">
        <LegalP>
          Le site automatex-hub.com est édité par :
        </LegalP>
        <LegalP>
          <strong className="text-text">{c.founder}</strong>
          <br />
          {LEGAL.status}
          <br />
          {c.street}
          <br />
          {NAP.postalCode} {NAP.city}, {NAP.region}, France
          <br />
          Email :{" "}
          <a className="text-primary underline" href={`mailto:${c.email}`}>
            {c.email}
          </a>
          <br />
          Téléphone :{" "}
          <a className="text-primary underline" href={`tel:${c.phoneE164}`}>
            {c.phone}
          </a>
          <br />
          SIRET : {LEGAL.siret}
          <br />
          Code APE : {LEGAL.ape} — {LEGAL.apeLabel}
          <br />
          NIC : {LEGAL.nic}
        </LegalP>
        <LegalP>
          Directeur de la publication : {c.founder}
        </LegalP>
      </LegalSection>

      <LegalSection title="Hébergement" code="02 // TRACABILITÉ">
        <LegalP>
          Le site automatex-hub.com est hébergé par :
        </LegalP>
        <LegalP>
          <strong className="text-text">{LEGAL.netlify.name}</strong>
          <br />
          {LEGAL.netlify.street}
          <br />
          {LEGAL.netlify.city} — {LEGAL.netlify.country}
          <br />
          <a className="text-primary underline" href={LEGAL.netlify.url} rel="noopener noreferrer">
            {LEGAL.netlify.url}
          </a>
        </LegalP>
        <LegalP>{LEGAL_SITE_CDN_TRANSPARENCY}</LegalP>
        <LegalP>
          Les données personnelles collectées via les formulaires et les automatisations ne sont
          pas stockées sur Netlify. {LEGAL_BUSINESS_DATA_ROUTING}{" "}
          <Link href="/vos-donnees" className="text-primary underline">
            Vos données
          </Link>
          .
        </LegalP>
        <LegalP>
          Infrastructure complémentaire historique (site et registres) :{" "}
          <strong className="text-text">{LEGAL.ovh.name}</strong>, {LEGAL.ovh.city} —{" "}
          <a className="text-primary underline" href={LEGAL.ovh.url} rel="noopener noreferrer">
            {LEGAL.ovh.url}
          </a>
        </LegalP>
      </LegalSection>

      <LegalSection title="Activité" code="03 // SERVICE">
        <LegalP>
          {NAP.brand} est un service d&apos;automatisation pour mandataires immobiliers
          indépendants. Il connecte les outils du quotidien (Gmail, Telegram, Google Drive,
          SeLoger, Leboncoin) pour répondre aux demandes entrantes, trier les emails et classer les
          documents.
        </LegalP>
        <LegalP>
          Le service est proposé sous forme de formules mensuelles sans engagement de durée, avec
          installation personnalisée depuis {NAP.localityLabel}. Voir les{" "}
          <Link href="/cgv" className="text-primary underline">
            conditions générales de vente
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle" code="04 // PI">
        <LegalP>
          L&apos;ensemble du contenu de ce site (textes, visuels, logo, structure) est la
          propriété exclusive de {c.founder} / {c.brand}, sauf mention contraire.
        </LegalP>
        <LegalP>
          Toute reproduction, représentation, modification, publication ou transmission du contenu
          de ce site, par quelque moyen que ce soit, est interdite sans autorisation préalable
          écrite de {c.founder}.
        </LegalP>
      </LegalSection>

      <LegalSection title="Données personnelles" code="05 // RGPD">
        <LegalP>
          Le traitement des données personnelles collectées sur ce site est décrit dans la{" "}
          <Link href="/politique-confidentialite" className="text-primary underline">
            politique de confidentialité
          </Link>
          .
        </LegalP>
        <LegalP>
          Conformément au RGPD (Règlement UE 2016/679), vous disposez d&apos;un droit d&apos;accès,
          de rectification, d&apos;effacement et d&apos;opposition. Contact :{" "}
          <a className="text-primary underline" href={`mailto:${c.email}`}>
            {c.email}
          </a>
        </LegalP>
      </LegalSection>

      <LegalSection title="Cookies et analytics" code="06 // MESURE">
        <LegalP>
          Ce site utilise Plausible Analytics, solution respectueuse de la vie privée. Plausible ne
          dépose aucun cookie et ne collecte aucune donnée personnelle identifiable. Il est exempté
          de consentement conformément aux recommandations de la CNIL (délibération n°2020-091 du
          17 septembre 2020).
        </LegalP>
        <LegalP>Aucun autre cookie de traçage publicitaire n&apos;est utilisé sur ce site.</LegalP>
      </LegalSection>

      <LegalSection title="Liens hypertextes" code="07 // LIENS">
        <LegalP>
          Ce site peut contenir des liens vers des sites tiers (SeLoger, Leboncoin, OVHcloud,
          etc.). {NAP.brand} n&apos;est pas responsable du contenu ou des pratiques de ces sites.
        </LegalP>
      </LegalSection>

      <LegalSection title="Loi applicable" code="08 // DROIT">
        <LegalP>
          Les présentes mentions légales sont soumises au droit français. Tout litige relatif à
          l&apos;utilisation du site sera soumis aux tribunaux compétents du ressort de Flers
          (Orne), sous réserve d&apos;une compétence spécifique imposée par la loi.
        </LegalP>
      </LegalSection>

      <LegalSection title="Contact" code="09 // CONTACT">
        <LegalUl
          items={[
            `Email : ${c.email}`,
            `Téléphone : ${c.phone}`,
            `Adresse : ${c.address}`,
          ]}
        />
      </LegalSection>
    </LegalPageShell>
  );
}
