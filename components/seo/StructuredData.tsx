import { StructuredDataServer } from "@/components/seo/StructuredDataServer";
import type { JsonLdFaqMode } from "@/lib/json-ld";

/** @deprecated Use StructuredDataServer in route layouts (static export). */
export function StructuredData({ faqMode = "diagnostiqueur" }: { faqMode?: JsonLdFaqMode }) {
  return <StructuredDataServer faqMode={faqMode} />;
}
