import { AutomationCard } from "@/components/catalog/AutomationCard";
import {
  AUTOMATIONS_CATALOG,
  FEATURED_BTP,
  FEATURED_IMMO,
} from "@/lib/automations-catalog";
import Link from "next/link";

type FeaturedAutomationsSectionProps = {
  variant: "immo" | "btp";
};

export function FeaturedAutomationsSection({ variant }: FeaturedAutomationsSectionProps) {
  const ids = variant === "immo" ? FEATURED_IMMO : FEATURED_BTP;
  const featured = AUTOMATIONS_CATALOG.filter((a) => ids.includes(a.id));
  const subtitle =
    variant === "immo"
      ? "Par les mandataires IAD, SAFTI et Capifrance en Normandie."
      : "Par les artisans solo dans l'Orne — plomberie, électricité, carrelage, couverture.";

  return (
    <section className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl text-text md:text-3xl">
              Les automatisations les plus utilisées
            </h2>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
          <Link
            href="/automatisations"
            className="shrink-0 text-sm font-semibold text-primary underline underline-offset-4"
          >
            Voir les {AUTOMATIONS_CATALOG.length} automatisations →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((a) => (
            <AutomationCard key={a.id} {...a} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/automatisations"
            className="inline-flex rounded-xl border border-border px-6 py-3 text-sm text-muted transition hover:border-primary hover:text-primary"
          >
            Voir le catalogue complet des automatisations →
          </Link>
        </div>
      </div>
    </section>
  );
}
