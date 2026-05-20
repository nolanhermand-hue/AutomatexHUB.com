import { buildBtpServiceJsonLd } from "@/lib/json-ld";

export function BtpStructuredData({ path }: { path: string }) {
  const json = buildBtpServiceJsonLd(path);
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
