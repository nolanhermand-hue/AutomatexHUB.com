import { ImmobilierHome } from "@/components/funnels/ImmobilierHome";
import { META } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandataires immobiliers en Normandie",
  description: META.description,
  alternates: { canonical: "https://automatex-hub.com/immobilier" },
  openGraph: {
    title: META.ogTitle,
    description: META.ogDescription,
    url: "https://automatex-hub.com/immobilier",
  },
};

export default function ImmobilierPage() {
  return <ImmobilierHome />;
}
