"use client";

import { buildJsonLdGraph } from "@/lib/json-ld";
import { usePathname } from "next/navigation";

const OMIT_GLOBAL_FAQ_PATHS = ["/automatisation-ia-tpe", "/btp"] as const;

export function StructuredData() {
  const pathname = usePathname();
  const omitFaqPage =
    pathname != null &&
    (OMIT_GLOBAL_FAQ_PATHS as readonly string[]).includes(pathname);
  const json = buildJsonLdGraph({ omitFaqPage });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
