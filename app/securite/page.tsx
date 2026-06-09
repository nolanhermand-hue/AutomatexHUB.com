import {
  LegalInfraCallout,
  LegalPageShell,
  LegalP,
  LegalSection,
  LegalUl,
} from "@/components/legal/LegalPageShell";
import { LEGAL_BUSINESS_DATA_ROUTING, LEGAL_SITE_CDN_TRANSPARENCY } from "@/lib/legal-infrastructure-copy";
import { legalContactBlock } from "@/lib/legal";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sécurité des données — Automatex | RGPD artisans & TPE",
  description:
    "Où sont hébergées vos données, qui y accède, effacement à la résiliation, continuité si arrêt du service.",
  alternates: { canonical: `${SITE_URL}/securite` },
};

export default function SecuritePage() {
  const c = legalContactBlock();

  return (
    <LegalPageShell title="Comment Automatex protège vos données clients">
      <LegalInfraCallout />
      <LegalP>
        En tant que mandataire ou artisan, vous traitez des données de clients. Voici comment{" "}
        {c.brand} protège votre périmètre.
      </LegalP>

      <LegalSection title="Où sont vos données ?" code="01 // PÉRIMÈTRE">
        <LegalP>{LEGAL_SITE_CDN_TRANSPARENCY}</LegalP>
        <LegalP>{LEGAL_BUSINESS_DATA_ROUTING}</LegalP>
      </LegalSection>

      <LegalSection title="Qui peut y accéder ?" code="02 // ACCÈS">
        <LegalP>
          Accès limité à {c.founder} pour exécuter la prestation, avec authentification renforcée
          (MFA) sur les environnements de production. Pas de revente ni de partage commercial des
          données.
        </LegalP>
      </LegalSection>

      <LegalSection title="Si vous partez" code="03 // RÉSILIATION">
        <LegalUl
          items={[
            "Effacement sous 7 jours ouvrés",
            "Confirmation écrite sur demande",
            "Aucune conservation au-delà sans obligation légale",
          ]}
        />
        <LegalP>
          Procédure :{" "}
          <Link href="/rendez-vous?sujet=resiliation" className="text-primary underline">
            demande de résiliation
          </Link>{" "}
          ou email {c.email}.
        </LegalP>
      </LegalSection>

      <LegalSection title="Si Automatex cesse son activité" code="04 // CONTINUITÉ">
        <LegalP>
          Vos comptes Gmail, Drive et Telegram restent les vôtres. Vous conservez emails et
          documents ; seules les automatisations configurées par Automatex cesseraient de tourner.
        </LegalP>
      </LegalSection>

      <LegalP>
        <Link href="/politique-confidentialite" className="text-primary underline">
          Politique de confidentialité complète
        </Link>
        {" · "}
        <Link href="/cgv" className="text-primary underline">
          CGV
        </Link>
        {" · "}
        <Link href="/vos-donnees" className="text-primary underline">
          Vos données
        </Link>
      </LegalP>
    </LegalPageShell>
  );
}
