import { MasterFaqPage } from "@/components/faq/MasterFaqPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — 40 réponses Automatex · artisans & TPE Normandie",
  description:
    "Réponses sur automatisation, RGPD, tarifs, mise en place et accompagnement. Automatex Hub, Flers (Orne). Démo 20 min gratuite.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="border-b border-border px-gutter py-16 md:py-20">
      <MasterFaqPage />
    </section>
  );
}
