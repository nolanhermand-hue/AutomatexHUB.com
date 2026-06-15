import { BtpLanding } from "@/components/funnels/BtpLanding";
import { BtpStructuredData } from "@/components/seo/BtpStructuredData";
import { BRAND_FULL, BRAND_SHORT, SITE_URL } from "@/lib/constants";
import { PUBLIC_HOSTING_ONE_LINER } from "@/lib/legal-infrastructure-copy";
import type { Metadata } from "next";

const ogImage = `${SITE_URL}/assets/brand/og-image-btp.png`;

export const metadata: Metadata = {
  title: `Artisans BTP · devis & appels automatiques · Orne · ${BRAND_FULL}`,
  description:
    "Tes devis partent tout seuls, tes clients ont une réponse en moins de 2 minutes. Système automatique pour artisans BTP dans l'Orne — accompagnement mensuel Nolan à Flers.",
  openGraph: {
    title: `Artisans BTP Orne · SMS automatique + devis vocal | ${BRAND_FULL}`,
    description:
      `Un client appelle pendant ton chantier ? Il reçoit un SMS en moins de 2 minutes. Nolan Hermand, Flers (61). ${PUBLIC_HOSTING_ONE_LINER} · Sans engagement.`,
    url: `${SITE_URL}/btp`,
    type: "website",
    locale: "fr_FR",
    siteName: BRAND_SHORT,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND_SHORT} — Artisans BTP dans l'Orne — devis automatiques et appels manqués traités`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Artisans BTP Orne · SMS automatique + devis vocal | ${BRAND_FULL}`,
    description:
      `Un client appelle pendant ton chantier ? Il reçoit un SMS en moins de 2 minutes. Nolan Hermand, Flers (61). ${PUBLIC_HOSTING_ONE_LINER} · Sans engagement.`,
    images: [ogImage],
  },
  alternates: { canonical: `${SITE_URL}/btp` },
};

export default function BtpPage() {
  return (
    <>
      <BtpStructuredData path="/btp" />
      <BtpLanding />
    </>
  );
}
