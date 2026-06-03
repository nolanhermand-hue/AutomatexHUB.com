"use client";

import {
  JSON_LD_FAQ_MODE_BY_PATH,
  buildJsonLdGraph,
  type JsonLdFaqMode,
} from "@/lib/json-ld";
import { usePathname } from "next/navigation";

function faqModeForPath(pathname: string | null): JsonLdFaqMode {
  const normalized = pathname?.replace(/\/$/, "") ?? "";
  return JSON_LD_FAQ_MODE_BY_PATH[normalized] ?? "mandataires";
}

export function StructuredData() {
  const pathname = usePathname();
  const json = buildJsonLdGraph({ faqMode: faqModeForPath(pathname) });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
