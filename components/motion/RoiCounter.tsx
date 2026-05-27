import { cn } from "@/lib/cn";

type RoiCounterProps = {
  variant: "immobilier" | "btp";
  className?: string;
};

/**
 * Ancrage ROI honnête (pas de faux agrégat clients).
 * Valeur statique au build — pas d’anim GSAP (CLS + TBT desktop).
 */
export function RoiCounter({ variant, className }: RoiCounterProps) {
  const label =
    variant === "immobilier"
      ? "Commission moyenne préservée si 1 lead est rattrapé à temps"
      : "Ordre de grandeur si 1 devis part pendant que vous êtes sur le chantier";

  const foot =
    variant === "immobilier"
      ? "1 lead ≈ 3 500 € · Formule Essentiel rentable dès le premier lead récupéré."
      : "1 chantier récupéré peut représenter plusieurs mois de formule Essentiel.";

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
          <span className="inline-block text-right">3 500</span> €
        </p>
        <p className="mx-auto mt-4 max-w-readable text-sm text-muted">{foot}</p>
      </div>
    </section>
  );
}
