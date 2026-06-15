import {
  LEGAL_BUSINESS_DATA_ROUTING,
  LEGAL_SITE_CDN_TRANSPARENCY,
} from "@/lib/legal-infrastructure-copy";
import { LEGAL } from "@/lib/legal";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <article className="min-h-screen bg-night px-gutter pb-16 pt-[88px] md:pt-[100px]">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-widest text-faint">AutomateX · Juridique</p>
        <h1 className="mt-3 font-heading text-[clamp(1.75rem,4vw,2.5rem)] text-text">{title}</h1>
        <p className="mt-3 font-mono text-xs text-muted">
          Dernière mise à jour : {LEGAL.lastUpdated}
        </p>
        <div className="prose-legal mt-12 space-y-12 text-[15px] leading-[1.75] text-muted">
          {children}
        </div>
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  code,
  children,
}: {
  title: string;
  /** Ex. « 01 // TRACABILITÉ » */
  code?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-10 first:border-t-0 first:pt-0">
      {code ? (
        <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{code}</p>
      ) : null}
      <h2 className="mt-2 font-heading text-xl text-text md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-muted">{children}</p>;
}

export function LegalUl({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalInfraCallout() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-faint">00 // INFRASTRUCTURE</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {LEGAL_SITE_CDN_TRANSPARENCY} {LEGAL_BUSINESS_DATA_ROUTING}{" "}
        <a href="/vos-donnees" className="font-semibold text-primary underline">
          Vos données →
        </a>
      </p>
    </div>
  );
}
