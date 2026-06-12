import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="diagnostiqueur">{children}</JsonLdLayout>;
}
