import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { ReactNode } from "react";

export default function BtpLayout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="btp">{children}</JsonLdLayout>;
}
