import { BOOKING_CTA_LABEL } from "@/lib/constants";
import { IMMOBILIER_DAILY_FEATURES } from "@/lib/immobilier-daily-features";
import Link from "next/link";

/** C05 — fonctionnalités lisibles (plus de ticker d'abréviations). */
export function AutomationsFeatureGrid() {
  return (
    <section
      id="automations"
      className="bg-bg-card px-gutter py-12 md:py-16"
      data-analytics-section="automations"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-2xl text-text md:text-3xl">
          Ce qu&apos;Automatex fait à votre place — chaque jour
        </h2>
        <p className="mt-2 max-w-readable text-sm text-muted md:text-base">
          Chaque configuration est construite sur votre façon de travailler. Voici les fonctions les
          plus utilisées par les mandataires normands.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {IMMOBILIER_DAILY_FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 rounded-lg border border-border bg-night p-4 transition-colors hover:border-primary/30"
            >
              <span className="mt-0.5 shrink-0 text-xl" aria-hidden>
                {item.icon}
              </span>
              <div>
                <p className="mb-1 text-sm font-semibold text-text">{item.title}</p>
                <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs italic text-faint">
          Ce sont des configurations actives, adaptées lors de l&apos;onboarding — pas des exemples
          génériques.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="#contact"
            data-analytics-cta="automations_cta"
            className="btn-bracket btn-bracket-primary"
          >
            {BOOKING_CTA_LABEL}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/automatisations"
            className="text-sm font-semibold text-primary underline underline-offset-4"
          >
            Voir le catalogue complet des automatisations →
          </Link>
        </div>
      </div>
    </section>
  );
}
