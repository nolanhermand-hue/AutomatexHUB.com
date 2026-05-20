import { LEGAL } from "@/lib/legal";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <article className="mx-auto max-w-content px-gutter py-16">
      <h1 className="font-heading text-4xl text-text">{title}</h1>
      <p className="mt-3 text-sm text-muted">Dernière mise à jour : {LEGAL.lastUpdated}</p>
      <div className="prose-legal mt-10 space-y-10 text-[16px] leading-[1.75] text-muted">
        {children}
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-text">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function LegalUl({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
