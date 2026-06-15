import { HomePage } from "@/components/home/HomePage";
import { StructuredDataServer } from "@/components/seo/StructuredDataServer";
import { BRAND_FULL } from "@/lib/constants";
import { HOME_META } from "@/lib/home-copy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `${HOME_META.title} · ${BRAND_FULL}`,
  },
  description: HOME_META.description,
  alternates: { canonical: "https://automatex-hub.com/" },
  openGraph: {
    title: HOME_META.title,
    description: HOME_META.description,
    url: "https://automatex-hub.com/",
  },
};

export default function Page() {
  return (
    <>
      <StructuredDataServer faqMode="home" />
      <HomePage />
    </>
  );
}
