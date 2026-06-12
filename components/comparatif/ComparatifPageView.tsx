import Link from "next/link";
import { formatComparatifUpdatedLabel } from "@/lib/comparatif-shared";

type ComparatifTable = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

type Section =
  | {
      h2: string;
      answerFirst: string;
      body?: string;
      table?: ComparatifTable;
    };

type ComparatifPageContent = {
  h1: string;
  intro: string;
  sections: readonly Section[];
  cta: { label: string; href: string };
  internalLinks: readonly { href: string; label: string }[];
  lastModified: string;
};

export function ComparatifPageView({ content }: { content: ComparatifPageContent }) {
  return (
    <main className="funnel-surface min-h-screen px-gutter pb-20 pt-[88px] md:pt-[100px]">
      <article className="mx-auto max-w-content">
        <p className="text-sm text-muted">
          Mis à jour le{" "}
          <time dateTime={content.lastModified}>{formatComparatifUpdatedLabel(content.lastModified)}</time>
        </p>
        <h1 className="mt-4 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-text">
          {content.h1}
        </h1>
        <p className="mt-6 max-w-readable text-base leading-relaxed text-muted">{content.intro}</p>

        <div className="mt-14 space-y-14">
          {content.sections.map((section) => (
            <section key={section.h2}>
              <h2 className="font-heading text-2xl font-bold text-text">{section.h2}</h2>
              <p className="mt-4 max-w-readable text-base leading-relaxed text-text">{section.answerFirst}</p>
              {section.body ? (
                <p className="mt-4 max-w-readable text-sm leading-relaxed text-muted">{section.body}</p>
              ) : null}
              {section.table ? (
                <div className="mt-6 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead className="bg-surface">
                      <tr>
                        {section.table.headers.map((h) => (
                          <th key={h} scope="col" className="px-4 py-3 font-semibold text-text">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, i) => (
                            <td key={`${row[0]}-${i}`} className="px-4 py-3 text-muted">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link href={content.cta.href} className="btn-bracket btn-bracket-primary justify-center">
            {content.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <nav aria-label="Pages liées" className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-faint">Aller plus loin</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {content.internalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-primary underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
