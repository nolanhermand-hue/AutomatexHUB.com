import { AutomationFlowSchema } from "@/components/catalog/AutomationFlowSchema";
import { CatalogDemoVideo } from "@/components/catalog/CatalogDemoVideo";
import type { CatalogAutomation } from "@/lib/automations-catalog";

export function AutomationCard({
  id,
  category,
  title,
  tagline,
  steps,
  impact,
}: CatalogAutomation) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200 hover:border-border-light">
      <CatalogDemoVideo id={id} title={title} />

      <div className="border-b border-border px-5 pb-4 pt-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-faint">{category}</p>
            <h3 className="text-[15px] font-semibold leading-snug text-text">{title}</h3>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-muted">{tagline}</p>
      </div>

      <details className="group/flow flex-1 border-t border-border bg-bg/40">
        <summary className="cursor-pointer list-none px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-text [&::-webkit-details-marker]:hidden">
          <span className="text-primary group-open/flow:hidden">+ Scénario pas à pas</span>
          <span className="hidden text-primary group-open/flow:inline">− Scénario pas à pas</span>
        </summary>
        <AutomationFlowSchema steps={steps} />
      </details>

      {impact ? (
        <div className="border-t border-border bg-bg px-5 py-3">
          <p className="font-mono text-[11px] text-primary">→ {impact}</p>
        </div>
      ) : null}
    </article>
  );
}
