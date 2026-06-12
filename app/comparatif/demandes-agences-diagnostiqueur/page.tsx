import { ComparatifPageView } from "@/components/comparatif/ComparatifPageView";
import { buildComparatifPageJsonLd } from "@/lib/json-ld";
import { COMPARATIF_DEMANDES_AGENCES } from "@/lib/comparatif-demandes-agences-diagnostiqueur";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

const PAGE = COMPARATIF_DEMANDES_AGENCES;

export const metadata: Metadata = {
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  alternates: { canonical: `${SITE_URL}${PAGE.path}` },
};

export default function ComparatifDemandesAgencesPage() {
  const jsonLd = buildComparatifPageJsonLd({
    path: PAGE.path,
    name: PAGE.h1,
    description: PAGE.metaDescription,
    dateModified: PAGE.lastModified,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComparatifPageView content={PAGE} />
    </>
  );
}
