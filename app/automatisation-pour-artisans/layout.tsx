import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { ReactNode } from "react";

export default function AutomatisationPourArtisansLayout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="none">{children}</JsonLdLayout>;
}
