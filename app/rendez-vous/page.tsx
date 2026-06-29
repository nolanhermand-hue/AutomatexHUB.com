import { Contact } from "@/components/sections/Contact";
import { SITE_URL } from "@/lib/constants";
import { buildRendezVousHowToJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prendre rendez-vous · Audit 30 min",
  description:
    "Réserve un appel avec Nolan (Flers, Orne) : audit 30 minutes sur ton cas, sans engagement. Artisan, immobilier ou TPE.",
  alternates: { canonical: `${SITE_URL}/rendez-vous` },
  openGraph: {
    title: "Prendre rendez-vous",
    description:
      "Audit gratuit 30 min sur ton cas · Nolan te rappelle sous 24 h · Sans engagement.",
    url: `${SITE_URL}/rendez-vous`,
  },
};

export default function RendezVousPage() {
  const howToJsonLd = buildRendezVousHowToJsonLd();

  return (
    <div className="funnel-surface pb-16 pt-[88px] md:pt-[100px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="mx-auto max-w-content px-gutter pb-2 pt-4 md:pb-4">
        <h1 className="font-heading text-3xl text-text md:text-4xl">
          Réserve ton audit de 30 minutes sur ton cas
        </h1>
      </div>
      <Contact variant="hub" />
    </div>
  );
}
