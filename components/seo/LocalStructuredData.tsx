import { buildLocalMandatairesJsonLd } from "@/lib/json-ld";

type Props = {
  path: string;
  pageName: string;
  city: string;
  description: string;
};

export function LocalStructuredData({ path, pageName, city, description }: Props) {
  const json = buildLocalMandatairesJsonLd({ path, pageName, city, description });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
