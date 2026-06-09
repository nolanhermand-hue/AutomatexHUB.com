import { AutomatisationCoconPainTemplate } from "@/components/automatisation-cocon/AutomatisationCoconPainTemplate";
import { SITE_URL } from "@/lib/constants";
import { getAllCoconPainSlugs, getCoconPainBySlug } from "@/lib/automatisation-cocon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ douleur: string }> };

export function generateStaticParams() {
  return getAllCoconPainSlugs().map((douleur) => ({ douleur }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { douleur: slug } = await params;
  const page = getCoconPainBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}${page.path}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}${page.path}`,
    },
  };
}

export default async function CoconPainPage({ params }: PageProps) {
  const { douleur: slug } = await params;
  const page = getCoconPainBySlug(slug);
  if (!page) notFound();
  return <AutomatisationCoconPainTemplate page={page} />;
}
