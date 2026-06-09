import { NormandiePilierTemplate } from "@/components/normandie/NormandiePilierTemplate";
import { SITE_URL } from "@/lib/constants";
import { NORMANDIE_PILIER } from "@/lib/villes-normandie";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: NORMANDIE_PILIER.metaTitle,
  description: NORMANDIE_PILIER.metaDescription,
  alternates: { canonical: `${SITE_URL}${NORMANDIE_PILIER.path}` },
  openGraph: {
    title: NORMANDIE_PILIER.metaTitle,
    description: NORMANDIE_PILIER.metaDescription,
    url: `${SITE_URL}${NORMANDIE_PILIER.path}`,
  },
};

export default function NormandiePilierPage() {
  return <NormandiePilierTemplate />;
}
