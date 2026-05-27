import Link from "next/link";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { cn } from "@/lib/cn";

type Pillar = { title: string; body: string };

type AccompanimentPillarsProps = {
  h2: string;
  pillars: readonly Pillar[];
  linkHref?: string;
  linkLabel?: string;
  className?: string;
  variant?: "default" | "highlight";
  showFounder?: boolean;
};

const MODULE_ICONS = ["📞", "🔧", "📍"] as const;

/** 3 colonnes accompagnement Nolan — hub, immobilier, BTP. */
export function AccompanimentPillars({
  h2,
  pillars,
  linkHref = "/accompagnement",
  linkLabel = "Tout sur l'accompagnement",
  className = "",
  variant = "default",
  showFounder = false,
}: AccompanimentPillarsProps) {
  return (
    <section
      className={cn(
        "border-t border-border px-gutter py-16 md:py-20",
        variant === "highlight" && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto max-w-content">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          ACCOMPAGNEMENT INCLUS
        </p>
        {showFounder ? (
          <div className="mb-10 card">
            <FounderTrustBlock />
          </div>
        ) : null}
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-text">{h2}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="card animate-on-scroll hover-lift">
              <div className="mb-4 flex items-center justify-between">
                <span className="step-number">MODULE {String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg" aria-hidden="true">
                  {MODULE_ICONS[i] ?? "•"}
                </span>
              </div>
              <h3 className="mb-3 text-[15px] font-semibold text-text">{p.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        {showFounder ? (
          <blockquote className="mt-10 rounded-r-xl border-l-2 border-primary/40 bg-surface px-6 py-5">
            <p className="mb-3 text-[14px] italic leading-relaxed text-muted">
              &ldquo;Je construis ce système pour des gens qui n&apos;ont pas le temps de s&apos;en occuper.
              Mon travail, c&apos;est que vous n&apos;y pensiez plus.&rdquo;
            </p>
            <footer className="font-mono text-[11px] uppercase tracking-wide text-faint">
              — Nolan Hermand · Fondateur · Flers, Orne
            </footer>
          </blockquote>
        ) : null}
        {linkHref ? (
          <p className="mt-8">
            <Link
              href={linkHref}
              className="font-mono text-[11px] uppercase tracking-widest text-primary hover:underline"
            >
              {linkLabel} →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
