"use client";

import { FEATURE_COMPARISON, OFFERS } from "@/lib/constants";

/**
 * FEATURE COMPARISON — D6 / C12
 * Tableau 3 colonnes check/cross, à placer entre Pricing et GuaranteeXL.
 * Sur mobile : la table devient un accordéon vertical par offre pour rester lisible.
 */
export function FeatureComparison() {
  return (
    <section
      id="comparatif"
      className="bg-night px-gutter py-12 md:py-16"
      data-analytics-section="comparison"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-faint">Comparatif</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          Trois offres, une seule garantie.
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
          Toutes les formules incluent la même garantie de 30 jours et l&apos;onboarding offert.
          Voici exactement ce que chaque offre fait pour vous.
        </p>

        {/* Desktop : table complète */}
        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border bg-bg-card backdrop-blur-sm md:block">
          <table className="w-full text-left">
            <thead className="border-b border-border bg-night text-sm">
              <tr>
                <th className="px-5 py-4 font-semibold text-text">Fonctionnalité</th>
                {OFFERS.map((o) => (
                  <th
                    key={o.id}
                    className={`px-5 py-4 text-center font-semibold text-text`}
                  >
                    {o.name}
                    {o.featured ? (
                      <span className="ml-2 badge badge-orange">
                        Recommandé
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {FEATURE_COMPARISON.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-bg-card" : "bg-night"}
                >
                  <td className="px-5 py-3 text-muted">{row.feature}</td>
                  <Cell value={row.essentiel} />
                  <Cell value={row.pro} featured />
                  <Cell value={row.cabinet} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile : 3 blocs verticaux par offre */}
        <div className="mt-8 grid gap-4 md:hidden">
          {OFFERS.map((offer) => (
            <details
              key={offer.id}
              className="overflow-hidden rounded-2xl border border-border bg-bg-card backdrop-blur-sm"
            >
              <summary
                className={`flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-base font-semibold text-text`}
              >
                <span>
                  {offer.name}
                  {offer.featured ? (
                    <span className="ml-2 badge badge-orange">
                      Recommandé
                    </span>
                  ) : null}
                </span>
                <span className="text-xs text-muted" aria-hidden>
                  ▾
                </span>
              </summary>
              <ul className="border-t border-border p-5 text-sm">
                {FEATURE_COMPARISON.map((row) => {
                  const v = row[offer.id as "essentiel" | "pro" | "cabinet"];
                  return (
                    <li key={row.feature} className="flex items-start gap-2 py-1.5">
                      <span
                        className={`mt-0.5 shrink-0 ${v ? "text-primary" : "text-border"}`}
                        aria-hidden
                      >
                        {v ? "✓" : "—"}
                      </span>
                      <span className={v ? "text-text" : "text-faint"}>
                        {row.feature}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cell({ value }: { value: boolean | string; featured?: boolean }) {
  return (
    <td className="px-5 py-3 text-center">
      {value === true ? (
        <span className="text-primary" aria-label="Inclus">
          ✓
        </span>
      ) : value === false ? (
        <span className="text-border" aria-label="Non inclus">
          —
        </span>
      ) : (
        <span className="text-text">{value}</span>
      )}
    </td>
  );
}
