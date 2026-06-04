import type { AutomationStep } from "@/lib/automations-catalog";
import { resolveFlowNode } from "@/lib/automation-flow-logos";
import { cn } from "@/lib/cn";

const stepAccent: Record<AutomationStep["type"], string> = {
  in: "border-l-primary",
  out: "border-l-success",
  system: "border-l-border",
  result: "border-l-[var(--terracotta)]",
};

function formatDelay(delay?: number): string | undefined {
  if (delay == null) return undefined;
  if (delay < 120) return `< ${delay}s`;
  if (delay < 3600) return `< ${Math.round(delay / 60)} min`;
  if (delay < 86400) return `< ${Math.round(delay / 3600)} h`;
  return `J+${Math.round(delay / 86400)}`;
}

function FlowNode({ label, icon }: { label: string; icon: string }) {
  const visual = resolveFlowNode(label, icon);

  if (visual.kind === "logo") {
    return (
      <div className="flex flex-col items-center gap-1" title={visual.alt}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={visual.src}
          alt={visual.alt}
          width={32}
          height={32}
          loading="lazy"
          decoding="async"
          className="h-8 w-8 shrink-0 object-contain"
        />
        <span className="max-w-[4.5rem] truncate text-center font-mono text-[9px] text-faint">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1" title={visual.alt}>
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 font-mono text-[10px] font-semibold text-muted"
        aria-hidden
      >
        {visual.initials}
      </span>
      <span className="max-w-[4.5rem] truncate text-center font-mono text-[9px] text-faint">{label}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <span className="mx-1 shrink-0 font-mono text-sm text-faint" aria-hidden>
      →
    </span>
  );
}

type AutomationFlowSchemaProps = {
  steps: AutomationStep[];
  className?: string;
};

export function AutomationFlowSchema({ steps, className }: AutomationFlowSchemaProps) {
  return (
    <ol className={cn("flex flex-col gap-0", className)} aria-label="Schéma du scénario">
      {steps.map((step, i) => {
        const delay = formatDelay(step.delay);
        const showTo = Boolean(step.to?.trim());
        const isLast = i === steps.length - 1;

        return (
          <li key={`${step.from}-${i}`} className={cn("border-l-2 px-4 py-3", stepAccent[step.type])}>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-start">
              <FlowNode label={step.from} icon={step.icon} />
              {showTo ? (
                <>
                  <FlowArrow />
                  <FlowNode label={step.to} icon={step.icon} />
                </>
              ) : null}
              {delay ? (
                <span className="ml-auto shrink-0 rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-faint">
                  {delay}
                </span>
              ) : null}
            </div>
            <p className="mt-2 line-clamp-3 whitespace-pre-wrap text-[11px] leading-relaxed text-muted">
              {step.message}
            </p>
            {!isLast ? (
              <div className="mt-2 flex justify-center sm:justify-start" aria-hidden>
                <span className="font-mono text-[10px] text-faint">↓</span>
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
