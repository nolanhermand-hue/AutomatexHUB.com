import { StructuredDataServer } from "@/components/seo/StructuredDataServer";
import type { JsonLdFaqMode } from "@/lib/json-ld";
import type { ReactNode } from "react";

export function JsonLdLayout({
  faqMode,
  children,
}: {
  faqMode: JsonLdFaqMode;
  children: ReactNode;
}) {
  return (
    <>
      <StructuredDataServer faqMode={faqMode} />
      {children}
    </>
  );
}
