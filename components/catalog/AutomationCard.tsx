import type { CatalogAutomation } from "@/lib/automations-catalog";

const formulaLabel: Record<CatalogAutomation["formula"], string> = {
  depart: "Départ",
  essentiel: "Essentiel ⭐",
  pro: "Pro",
  full: "Full",
};

const targetLabel: Record<CatalogAutomation["target"], string> = {
  immo: "Immobilier",
  btp: "BTP",
  both: "Immobilier & BTP",
};

const typeStyle: Record<CatalogAutomation["steps"][0]["type"], string> = {
  in: "border-l-2 border-[#ff8200]",
  out: "border-l-2 border-[#38a169]",
  system: "border-l-2 border-[#2a2a2a]",
  result: "border-l-2 border-[rgba(245,244,241,0.2)]",
};

function formatDelay(delay?: number): string | undefined {
  if (delay == null) return undefined;
  if (delay < 120) return `< ${delay}s`;
  if (delay < 3600) return `< ${Math.round(delay / 60)} min`;
  if (delay < 86400) return `< ${Math.round(delay / 3600)} h`;
  return `J+${Math.round(delay / 86400)}`;
}

export function AutomationCard({
  category,
  title,
  tagline,
  target,
  formula,
  steps,
  impact,
}: CatalogAutomation) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#0f0f0f] transition-colors hover:border-[#2a2a2a]">
      <div className="border-b border-[#1a1a1a] px-5 pb-4 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-[rgba(245,244,241,0.35)]">
              {category}
            </span>
            <h3 className="text-base font-bold leading-tight text-[#f5f4f1]">{title}</h3>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <span className="whitespace-nowrap rounded-full bg-[#ff8200]/15 px-2 py-0.5 font-mono text-[10px] text-[#ff8200]">
              {formulaLabel[formula]}
            </span>
            <span className="whitespace-nowrap rounded-full bg-[#1a1a1a] px-2 py-0.5 font-mono text-[10px] text-[rgba(245,244,241,0.45)]">
              {targetLabel[target]}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[rgba(245,244,241,0.62)]">{tagline}</p>
      </div>

      <div className="divide-y divide-[#151515]">
        {steps.map((step, i) => (
          <div key={`${step.from}-${i}`} className={`px-5 py-3.5 ${typeStyle[step.type]}`}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[rgba(245,244,241,0.45)]">
                {step.from}
                {step.to ? (
                  <>
                    {" "}
                    <span className="text-[rgba(245,244,241,0.2)]">→</span> {step.to}
                  </>
                ) : null}
              </span>
              {formatDelay(step.delay) ? (
                <span className="rounded-full bg-[#151515] px-2 py-0.5 font-mono text-[10px] text-[rgba(245,244,241,0.3)]">
                  {formatDelay(step.delay)}
                </span>
              ) : null}
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3.5 py-2.5 font-mono text-[11px] leading-relaxed text-[rgba(245,244,241,0.72)]">
              {step.message}
            </pre>
          </div>
        ))}
      </div>

      {impact ? (
        <div className="border-t border-[#151515] bg-[#0a0a0a] px-5 py-3">
          <p className="font-mono text-[11px] text-[#ff8200]">💡 {impact}</p>
        </div>
      ) : null}
    </article>
  );
}
