import { BtpLanding } from "@/components/funnels/BtpLanding";
import { BtpStructuredData } from "@/components/seo/BtpStructuredData";
import { SITE_URL } from "@/lib/constants";
import { PUBLIC_HOSTING_ONE_LINER } from "@/lib/legal-infrastructure-copy";
import type { Metadata } from "next";

const ogImage = `${SITE_URL}/assets/brand/og-image-btp.png`;

export const metadata: Metadata = {
  title: "Artisans BTP · devis & appels automatiques · Orne · Automatex Hub",
  description:
    "Vos devis partent tout seuls, vos clients ont une réponse en 90 secondes. Système automatique pour artisans BTP dans l'Orne — accompagnement mensuel Nolan à Flers.",
  openGraph: {
    title: "Artisans BTP Orne · SMS automatique + devis vocal | Automatex Hub",
    description:
      `Un client appelle pendant votre chantier ? Il reçoit un SMS en 90 secondes. Nolan Hermand, Flers (61). ${PUBLIC_HOSTING_ONE_LINER} · Sans engagement.`,
    url: `${SITE_URL}/btp`,
    type: "website",
    locale: "fr_FR",
    siteName: "Automatex",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Automatex — Artisans BTP dans l'Orne — devis automatiques et appels manqués traités",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisans BTP Orne · SMS automatique + devis vocal | Automatex Hub",
    description:
      `Un client appelle pendant votre chantier ? Il reçoit un SMS en 90 secondes. Nolan Hermand, Flers (61). ${PUBLIC_HOSTING_ONE_LINER} · Sans engagement.`,
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
