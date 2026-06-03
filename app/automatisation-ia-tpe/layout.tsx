import { JsonLdLayout } from "@/components/seo/JsonLdLayout";
import { buildTpeAutomatisationJsonLd } from "@/lib/json-ld";
import type { ReactNode } from "react";

export default function AutomatisationIaTpeLayout({ children }: { children: ReactNode }) {
  const serviceLd = buildTpeAutomatisationJsonLd();
  return (
    <JsonLdLayout faqMode="tpe">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      {children}
    </JsonLdLayout>
  );
}
