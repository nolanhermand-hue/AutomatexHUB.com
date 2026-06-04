import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function MerciLayout({ children }: { children: ReactNode }) {
  return <JsonLdLayout faqMode="none">{children}</JsonLdLayout>;
}
