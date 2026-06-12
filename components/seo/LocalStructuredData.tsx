import { buildLocalDiagnostiqueurJsonLd } from "@/lib/json-ld";

type Props = {
  path: string;
  pageName: string;
  city: string;
  description: string;
};

export function LocalStructuredData({ path, pageName, city, description }: Props) {
  const json = buildLocalDiagnostiqueurJsonLd({ path, pageName, city, description });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
