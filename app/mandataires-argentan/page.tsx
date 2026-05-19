import { MandatairesLocalPage } from "@/components/templates/MandatairesLocalPage";
import { getLocalPageBySlug } from "@/lib/local-pages";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
const page = getLocalPageBySlug("argentan")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE_URL}${page.path}` },
};

export default function MandatairesArgentanPage() {
  return <MandatairesLocalPage page={page} />;
}
