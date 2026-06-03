import { buildJsonLdGraph, type JsonLdFaqMode } from "@/lib/json-ld";

/** Server-only JSON-LD graph (correct FAQ per route at static export). */
export function StructuredDataServer({ faqMode }: { faqMode: JsonLdFaqMode }) {
  const json = buildJsonLdGraph({ faqMode });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
