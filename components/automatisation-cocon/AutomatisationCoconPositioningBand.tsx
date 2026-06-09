import {
  COCON_POSITIONING_DETAIL,
  COCON_POSITIONING_LINE,
} from "@/lib/automatisation-cocon-shared";

export function AutomatisationCoconPositioningBand() {
  return (
    <div className="glass-panel mx-auto max-w-content border-primary/20 px-gutter py-6 md:py-8">
      <p className="font-heading text-base font-semibold text-text md:text-lg">{COCON_POSITIONING_LINE}</p>
      <p className="mt-3 max-w-readable text-sm leading-relaxed text-muted md:text-base">
        {COCON_POSITIONING_DETAIL}
      </p>
    </div>
  );
}
