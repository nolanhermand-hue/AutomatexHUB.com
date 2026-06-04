import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { ReactNode } from "react";

export default function FaqLayout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="master">{children}</JsonLdLayout>;
}
