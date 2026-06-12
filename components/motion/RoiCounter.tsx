import { cn } from "@/lib/cn";
import { VALUE_PER_LEAD_EUROS } from "@/lib/constants";

type RoiCounterProps = {
  variant: "immobilier" | "btp";
  className?: string;
};

/**
 * Ancrage ROI honnête (pas de faux agrégat clients).
 * Valeur statique au build — pas d’anim GSAP (CLS + TBT desktop).
 */
export function RoiCounter({ variant, className }: RoiCounterProps) {
  const immoValue = VALUE_PER_LEAD_EUROS.toLocaleString("fr-FR");

  const label =
    variant === "immobilier"
      ? "Mission moyenne préservée si 1 créneau agence est rattrapé à temps"
      : "Exemple terrain si 1 devis part pendant que vous êtes sur le chantier";

  const foot =
    variant === "immobilier"
      ? `1 mission ≈ ${immoValue} € (hypothèse terrain) · le pack Système se compare à quelques missions récupérées.`
      : "1 chantier récupéré peut représenter plusieurs mois de pack Système.";

  return (
    <section
      data-motion="roi-counter"
      data-quality-min="low"
      className={cn(
        "border-y border-border bg-night px-gutter py-10 md:py-12",
        className,
      )}
    >
      <div className="mx-auto max-w-content text-center">
        <p className="text-sm font-medium text-muted">{label}</p>
        <p
          className="demo-glow-roi mt-3 font-heading text-4xl font-bold tabular-nums text-primary md:text-5xl"
          style={{ minWidth: "11ch" }}
        >
          <span className="inline-block text-right">{immoValue}</span> €
        </p>
        <p className="mx-auto mt-4 max-w-readable text-sm text-muted">{foot}</p>
      </div>
    </section>
  );
}
