import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { SUR_MESURE_PRICING_BANNER } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";

export function PricingSurMesureBanner() {
  return (
    <div
      className="surface-dark mt-8 rounded-xl border p-6 md:p-8"
      style={{
        backgroundColor: "#2D3A4A",
        borderColor: "#E07856",
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-cream">
            {SUR_MESURE_PRICING_BANNER.title}
          </h3>
          <p className="mt-1 text-lg font-bold text-[var(--color-terracotta)]">
            {SUR_MESURE_PRICING_BANNER.priceLabel}
          </p>
          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-text-subtle">
            {SUR_MESURE_PRICING_BANNER.phrase}
          </p>
        </div>
        <AnalyticsCta
          href={rendezVousHref({ offre: "sur-mesure" })}
          analyticsId="pricing_sur_mesure_banner"
          className="btn-bracket btn-bracket-primary shrink-0 justify-center md:min-w-[14rem]"
        >
          {SUR_MESURE_PRICING_BANNER.cta}
        </AnalyticsCta>
      </div>
    </div>
  );
}
