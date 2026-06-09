import { ImmobilierHome } from "@/components/funnels/ImmobilierHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandataires IAD · SAFTI · Orne — réponse clients en 90 s · Automatex",
  description:
    "Automatex répond à vos demandes SeLoger et LBC en moins de 90 secondes pendant vos visites. Mandataires IAD, SAFTI, Capifrance en Normandie. Sans engagement, résiliable en 1 mail.",
  alternates: { canonical: "https://automatex-hub.com/immobilier" },
  openGraph: {
    title: "Mandataires IAD · SAFTI · Orne — réponse clients en 90 s · Automatex",
    description:
      "Automatex répond à vos demandes SeLoger et LBC en moins de 90 secondes pendant vos visites. Mandataires IAD, SAFTI, Capifrance en Normandie. Sans engagement, résiliable en 1 mail.",
    url: "https://automatex-hub.com/immobilier",
  },
};

export default function ImmobilierPage() {
  return <ImmobilierHome />;
}
