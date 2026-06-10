import { AUTOMATISATION_CEST_QUOI_BEFORE_AFTER } from "@/lib/automatisation-cest-quoi";

function FlowColumn({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: readonly string[];
  variant: "avant" | "apres";
}) {
  const border =
    variant === "avant" ? "border-border-light" : "border-primary";
  const bg = variant === "apres" ? "bg-accent-light/30" : "bg-surface/80";

  return (
    <div
      className={`glass-panel-strong flex flex-1 flex-col rounded-xl border-2 p-6 ${border} ${bg}`}
    >
      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted">
        {title}
      </p>
      <ol className="mt-4 space-y-2">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-2 text-sm text-text">
            <span className="mt-0.5 font-mono text-[10px] text-faint" aria-hidden>
              {i < steps.length - 1 ? "→" : "✓"}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function AutomatisationBeforeAfterDiagram() {
  const { avant, apres, roiLine } = AUTOMATISATION_CEST_QUOI_BEFORE_AFTER;

  return (
    <figure className="mt-10 rounded-2xl bg-cream/5 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <FlowColumn title="Avant" steps={avant} variant="avant" />
        <FlowColumn title="Après" steps={apres} variant="apres" />
      </div>
      <figcaption className="mt-6 text-center text-xs leading-relaxed text-muted md:text-sm">
        {roiLine}
      </figcaption>
    </figure>
  );
}
