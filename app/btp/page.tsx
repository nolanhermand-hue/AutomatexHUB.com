import { BtpLanding } from "@/components/funnels/BtpLanding";
import { BtpStructuredData } from "@/components/seo/BtpStructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisans BTP · devis & appels · Orne",
  description:
    "Vos devis partent tout seuls, vos clients ont une réponse en 90 secondes. Système automatique pour artisans du BTP dans l'Orne — accompagnement Nolan à Flers.",
  alternates: { canonical: "https://automatex-hub.com/btp" },
};

export default function BtpPage() {
  return (
    <>
      <BtpStructuredData path="/btp" />
      <BtpLanding />
    </>
  );
}
