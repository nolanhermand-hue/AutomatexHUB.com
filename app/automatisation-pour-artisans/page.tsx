import { AutomatisationCoconPilierTemplate } from "@/components/automatisation-cocon/AutomatisationCoconPilierTemplate";
import { COCON_PILIER } from "@/lib/automatisation-cocon";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: COCON_PILIER.metaTitle,
  description: COCON_PILIER.metaDescription,
  alternates: { canonical: `${SITE_URL}${COCON_PILIER.path}` },
  openGraph: {
    title: COCON_PILIER.metaTitle,
    description: COCON_PILIER.metaDescription,
    url: `${SITE_URL}${COCON_PILIER.path}`,
  },
};

export default function AutomatisationPourArtisansPage() {
  return <AutomatisationCoconPilierTemplate />;
}
