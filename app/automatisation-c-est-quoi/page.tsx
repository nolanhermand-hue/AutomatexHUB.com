import { AutomatisationCestQuoiPage } from "@/components/automatisation-cest-quoi/AutomatisationCestQuoiPage";
import {
  AUTOMATISATION_CEST_QUOI_META,
  AUTOMATISATION_CEST_QUOI_PATH,
} from "@/lib/automatisation-cest-quoi";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: AUTOMATISATION_CEST_QUOI_META.title,
  description: AUTOMATISATION_CEST_QUOI_META.description,
  alternates: { canonical: `${SITE_URL}${AUTOMATISATION_CEST_QUOI_PATH}` },
  openGraph: {
    title: AUTOMATISATION_CEST_QUOI_META.title,
    description: AUTOMATISATION_CEST_QUOI_META.description,
    url: `${SITE_URL}${AUTOMATISATION_CEST_QUOI_PATH}`,
  },
};

export default function Page() {
  return <AutomatisationCestQuoiPage />;
}
