import {
  LegalPageShell,
  LegalP,
  LegalSection,
  LegalUl,
} from "@/components/legal/LegalPageShell";
import { legalContactBlock } from "@/lib/legal";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sécurité des données — Automatex | RGPD mandataires",
  description:
    "Où sont hébergées vos données, qui y accède, effacement à la résiliation, continuité si arrêt du service.",
  alternates: { canonical: `${SITE_URL}/securite` },
};

export default function SecuritePage() {
  const c = legalContactBlock();

  return (
    <LegalPageShell title="Comment Automatex protège vos données clients">
      <LegalP>
        En tant que mandataire, vous traitez des données de vendeurs et d&apos;acquéreurs. Voici
        comment {c.brand} protège votre périmètre.
      </LegalP>

      <LegalSection title="Où sont vos données ?">
        <LegalP>
          OVHcloud, Roubaix, France — datacenter européen. Les traitements Automatex ne reposent
          pas sur un stockage de fichiers clients aux États-Unis. Le site public est servi en
          statique via Netlify (sans données métier clients).
        </LegalP>
      </LegalSection>

      <LegalSection title="Qui peut y accéder ?">
        <LegalP>
          Accès limité à {c.founder} pour exécuter la prestation, avec authentification renforcée
          (MFA) sur les environnements de production. Pas de revente ni de partage commercial des
          données.
        </LegalP>
      </LegalSection>

      <LegalSection title="Si vous partez">
        <LegalUl
          items={[
            "Effacement sous 7 jours ouvrés",
            "Confirmation écrite sur demande",
            "Aucune conservation au-delà sans obligation légale",
          ]}
        />
        <LegalP>
          Procédure :{" "}
          <Link href="/#contact?sujet=resiliation" className="text-primary underline">
            demande de résiliation
          </Link>{" "}
          ou email {c.email}.
        </LegalP>
      </LegalSection>

      <LegalSection title="Si Automatex cesse son activité">
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
      </LegalP>
    </LegalPageShell>
  );
}
