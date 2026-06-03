import { AutomationFlowSchema } from "@/components/catalog/AutomationFlowSchema";
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

      <div className="flex-1 border-t border-border bg-bg/40">
        <AutomationFlowSchema steps={steps} />
      </div>

      {impact ? (
        <div className="border-t border-border bg-bg px-5 py-3">
          <p className="font-mono text-[11px] text-primary">→ {impact}</p>
        </div>
      ) : null}
    </article>
  );
}
