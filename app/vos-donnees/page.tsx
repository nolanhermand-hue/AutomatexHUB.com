import { VosDonneesView } from "@/components/vos-donnees/VosDonneesView";
import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Vos données — Sécurité, RGPD, hébergement · Automatex Hub",
  },
  description:
    "Comment Automatex Hub traite vos données : N8N Cloud (Frankfurt, UE), Mistral AI (Paris), hébergement site Netlify. RGPD natif. Registre disponible sur demande.",
  alternates: { canonical: `${SITE_URL}/vos-donnees` },
  openGraph: {
    title: "Vos données en sécurité — Automatex Hub",
    description:
      "Hébergement européen pour les automatisations. Mistral français. RGPD. Aucune revente. Vous restez propriétaire.",
    url: `${SITE_URL}/vos-donnees`,
  },
};

const vosDonneesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Vos données — Automatex Hub",
  description:
    "Politique de sécurité et de traitement des données personnelles d'Automatex Hub",
  url: `${SITE_URL}/vos-donnees`,
  publisher: {
    "@type": "Organization",
    name: NAP.brand,
    legalName: `${NAP.founder} auto-entrepreneur`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "50 rue de l'Equerre",
      addressLocality: "Saint-Georges-des-Groseillers",
      postalCode: "61100",
      addressCountry: "FR",
    },
  },
};

export default function VosDonneesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vosDonneesSchema) }}
      />
      <VosDonneesView />
    </>
  );
}
