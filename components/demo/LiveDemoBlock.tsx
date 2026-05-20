import { LIVE_DEMOS, type LiveDemoVariant } from "@/lib/live-demo";
import Link from "next/link";

type LiveDemoBlockProps = {
  variant: LiveDemoVariant;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Simulation concrète des messages automatiques (C03). */
export function LiveDemoBlock({
  variant,
  ctaHref = "#contact",
  ctaLabel = "Voir comment ça s'installe sur mon activité",
}: LiveDemoBlockProps) {
  const demo = LIVE_DEMOS[variant];

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#111]">
      <div className="flex items-center gap-3 border-b border-[#2a2a2a] px-5 py-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#e53e3e]/70" />
          <span className="h-3 w-3 rounded-full bg-[#ff8200]/70" />
          <span className="h-3 w-3 rounded-full bg-[#38a169]/70" />
        </div>
        <span className="font-mono text-xs text-[rgba(245,244,241,0.45)]">{demo.title}</span>
      </div>

      <div className="divide-y divide-[#1e1e1e]">
        {demo.steps.map((step) => (
          <div key={`${step.time}-${step.label}`} className={`border-l-2 px-5 py-4 ${step.color}`}>
            <div className="mb-2 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-base leading-none" aria-hidden>
                  {step.icon}
                </span>
                <span className="text-xs font-medium text-[rgba(245,244,241,0.65)]">{step.label}</span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${step.badgeClass}`}
                >
                  {step.badge}
                </span>
                <span className="font-mono text-[10px] text-[rgba(245,244,241,0.3)]">{step.time}</span>
              </div>
            </div>
            <pre className="mt-2 whitespace-pre-wrap rounded-lg border border-[#222] bg-[#0d0d0d] px-4 py-3 font-mono text-xs leading-relaxed text-[rgba(245,244,241,0.75)]">
              {step.message}
            </pre>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1e1e1e] bg-[#0d0d0d] px-5 py-3">
        <p className="text-[11px] italic text-[rgba(245,244,241,0.35)]">{demo.note}</p>
        {ctaHref ? (
          <p className="mt-3">
            <Link href={ctaHref} className="text-sm font-semibold text-[#ff8200] underline">
              {ctaLabel} →
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
