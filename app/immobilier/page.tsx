import { ImmobilierHome } from "@/components/funnels/ImmobilierHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandataires IAD · SAFTI · Orne — réponse leads en 90s · Automatex",
  description:
    "Automatex répond à vos leads SeLoger et LBC en moins de 90 secondes pendant vos visites. Mandataires IAD, SAFTI, Capifrance en Normandie. 30j satisfait ou remboursé.",
  alternates: { canonical: "https://automatex-hub.com/immobilier" },
  openGraph: {
    title: "Mandataires IAD · SAFTI · Orne — réponse leads en 90s · Automatex",
    description:
      "Automatex répond à vos leads SeLoger et LBC en moins de 90 secondes pendant vos visites. Mandataires IAD, SAFTI, Capifrance en Normandie. 30j satisfait ou remboursé.",
    url: "https://automatex-hub.com/immobilier",
  },
};

export default function ImmobilierPage() {
  return <ImmobilierHome />;
}
