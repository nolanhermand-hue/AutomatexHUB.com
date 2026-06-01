import type { CatalogAutomation } from "@/lib/automations-catalog";

const formulaBadge: Record<
  CatalogAutomation["formula"],
  { label: string; cls: string }
> = {
  declic: { label: "Déclic", cls: "badge-default" },
  systeme: { label: "Système ⭐", cls: "badge-orange" },
  pilote: { label: "Pilote", cls: "badge-orange" },
};

const targetLabel: Record<CatalogAutomation["target"], string> = {
  immo: "Immobilier",
  btp: "BTP",
  both: "Immo & BTP",
};

const stepBorderColor: Record<CatalogAutomation["steps"][0]["type"], string> = {
  in: "border-l-primary",
  out: "border-l-success",
  system: "border-l-border",
  result: "border-l-border-light",
};

const stepIconGlyph: Record<string, string> = {
  bolt: "⚡",
  spark: "✦",
  mail: "✉",
  check: "✓",
  bell: "🔔",
  mic: "🎤",
  phone: "📞",
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
  const f = formulaBadge[formula];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-border-light">
      <div className="border-b border-border px-5 pb-4 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-faint">{category}</p>
            <h3 className="text-[15px] font-semibold leading-snug text-text">{title}</h3>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <span className={`badge ${f.cls}`}>{f.label}</span>
            <span className="badge badge-default">{targetLabel[target]}</span>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-muted">{tagline}</p>
      </div>

      <div className="flex-1 divide-y divide-border">
        {steps.map((step, i) => (
          <div key={`${step.from}-${i}`} className={`border-l-2 px-5 py-3 ${stepBorderColor[step.type]}`}>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-sm leading-none" aria-hidden="true">
                  {stepIconGlyph[step.icon] ?? "•"}
                </span>
                <span className="font-mono text-[11px] text-muted">
                  {step.from}
                  {step.to ? ` → ${step.to}` : ""}
                </span>
              </div>
              {formatDelay(step.delay) ? (
                <span className="shrink-0 rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-faint">
                  {formatDelay(step.delay)}
                </span>
              ) : null}
            </div>
            <pre className="whitespace-pre-wrap rounded-md border border-border bg-bg px-3 py-2.5 font-mono text-[11px] leading-relaxed text-muted">
              {step.message}
            </pre>
          </div>
        ))}
      </div>

      {impact ? (
        <div className="border-t border-border bg-bg px-5 py-3">
          <p className="font-mono text-[11px] text-primary">→ {impact}</p>
        </div>
      ) : null}
    </article>
  );
}
