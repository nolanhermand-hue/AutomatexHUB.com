import { BRAND_FULL } from "@/lib/constants";
import { MasterFaqPage } from "@/components/faq/MasterFaqPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — 40 réponses · artisans & TPE Normandie",
  description:
    `Réponses sur automatisation, RGPD, tarifs, mise en place et accompagnement. ${BRAND_FULL}, Flers (Orne). Démo 30 min gratuite.`,
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="surface-light border-b border-border px-gutter py-16 md:py-20">
      <MasterFaqPage />
    </section>
  );
}
