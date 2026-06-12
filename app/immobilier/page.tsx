import { ImmobilierHome } from "@/components/funnels/ImmobilierHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostiqueur immo · Orne — réponse agences 2 min · Automatex",
  description:
    "Automatex répond aux demandes agences en moins de 2 minutes pendant vos missions DPE ou amiante. Diagnostiqueurs indépendants en Normandie. Sans engagement, résiliable en 1 mail.",
  alternates: { canonical: "https://automatex-hub.com/immobilier" },
  openGraph: {
    title: "Diagnostiqueur immo · Orne — réponse agences 2 min · Automatex",
    description:
      "Automatex répond aux demandes agences en moins de 2 minutes pendant vos missions DPE ou amiante. Diagnostiqueurs indépendants en Normandie. Sans engagement, résiliable en 1 mail.",
    url: "https://automatex-hub.com/immobilier",
  },
};

export default function ImmobilierPage() {
  return <ImmobilierHome />;
}
