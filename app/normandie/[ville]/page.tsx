import { NormandieVilleTemplate } from "@/components/normandie/NormandieVilleTemplate";
import { SITE_URL } from "@/lib/constants";
import {
  getAllNormandieVilleSlugs,
  getNormandieVilleBySlug,
} from "@/lib/villes-normandie";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return getAllNormandieVilleSlugs().map((ville) => ({ ville }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getNormandieVilleBySlug(slug);
  if (!ville) return {};
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: `${SITE_URL}${ville.path}` },
    openGraph: {
      title: ville.metaTitle,
      description: ville.metaDescription,
      url: `${SITE_URL}${ville.path}`,
    },
  };
}

export default async function NormandieVillePage({ params }: PageProps) {
  const { ville: slug } = await params;
  const ville = getNormandieVilleBySlug(slug);
  if (!ville) notFound();
  return <NormandieVilleTemplate ville={ville} />;
}
