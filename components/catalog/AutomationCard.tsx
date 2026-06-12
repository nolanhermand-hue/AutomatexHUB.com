import { AutomationFlowSchema } from "@/components/catalog/AutomationFlowSchema";
import type { CatalogAutomation } from "@/lib/automations-catalog";

export function AutomationCard({
  category,
  title,
  tagline,
  steps,
  impact,
}: CatalogAutomation) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-border-light">
      <div className="border-b border-border px-5 pb-4 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-faint">{category}</p>
            <h3 className="text-[15px] font-semibold leading-snug text-text">{title}</h3>
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
