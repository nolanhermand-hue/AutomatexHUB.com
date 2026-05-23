import { BtpLanding } from "@/components/funnels/BtpLanding";
import { BtpStructuredData } from "@/components/seo/BtpStructuredData";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const ogImage = `${SITE_URL}/assets/brand/og-image-btp.png`;

export const metadata: Metadata = {
  title: "Artisans BTP · devis & appels automatiques · Orne · Automatex Hub",
  description:
    "Vos devis partent tout seuls, vos clients ont une réponse en 90 secondes. Système automatique pour artisans BTP dans l'Orne — accompagnement mensuel Nolan à Flers.",
  openGraph: {
    title: "Artisans BTP · Plus jamais un chantier perdu à cause d'un devis tardif · Automatex",
    description:
      "Appels manqués traités en 90 secondes. Devis envoyés depuis une note vocale. Résumé Telegram chaque soir. Dès 99€/mois · Setup 199€ · Sans engagement.",
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
    title: "Plus jamais un chantier perdu à cause d'un devis tardif · Automatex Orne",
    description:
      "Appels manqués traités en 90s · devis depuis note vocale · résumé Telegram · dès 99€/mois.",
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
