import { buildJsonLdGraph } from "@/lib/json-ld";

export function StructuredData() {
  const json = buildJsonLdGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
