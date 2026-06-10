import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { ReactNode } from "react";

export default function AutomatisationCestQuoiLayout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="none">{children}</JsonLdLayout>;
}
