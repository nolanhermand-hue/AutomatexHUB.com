import {
  FOUNDERS_BENEFITS,
  LOYALTY_LINES,
  PRICING_CONFIG,
  formatFoundersAvailability,
} from "@/lib/pricing";

type PricingProgramNotesProps = {
  foundersSegment?: keyof typeof PRICING_CONFIG.founders;
};

export function PricingProgramNotes({ foundersSegment }: PricingProgramNotesProps) {
  const foundersTitle = foundersSegment
    ? PRICING_CONFIG.founders[foundersSegment].label
    : "Places fondateur";

  return (
    <div className="mt-10 space-y-6 rounded-xl border border-border bg-surface p-6 md:p-8">
      <div>
        <p className="label-micro text-primary">Paiement annuel</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Remise annuelle : −{Math.round(PRICING_CONFIG.annualDiscount * 100)} % sur le mensuel
          (paiement 12 mois d&apos;avance).{" "}
          <span className="font-medium text-text">{PRICING_CONFIG.annualDiscountLabel}</span>
        </p>
      </div>

      <div>
        <p className="label-micro text-muted">Fidélité (loyalty)</p>
        <ul className="mt-2 space-y-1.5 text-sm text-muted">
          {LOYALTY_LINES.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-primary" aria-hidden>
                →
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="label-micro text-muted">{foundersTitle}</p>
        <p className="mt-2 text-sm font-medium text-text">{formatFoundersAvailability()}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          {FOUNDERS_BENEFITS.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="shrink-0 text-primary" aria-hidden>
                ✓
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
