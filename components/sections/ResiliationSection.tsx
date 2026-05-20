import { RESILIATION_COPY } from "@/lib/constants";
import Link from "next/link";

export function ResiliationSection() {
  return (
    <section
      id="resiliation"
      className="bg-night px-gutter py-12 md:py-14"
      data-analytics-section="resiliation"
    >
      <div className="mx-auto max-w-content rounded-xl border border-border bg-bg-card p-8 md:p-10">
        <h2 className="font-heading text-2xl text-text md:text-3xl">{RESILIATION_COPY.h2}</h2>
        <p className="mt-4 max-w-readable text-muted">{RESILIATION_COPY.body}</p>
        <p className="mt-3 font-mono text-sm text-text">{RESILIATION_COPY.emailLine}</p>
        <p className="mt-2 text-sm text-muted">{RESILIATION_COPY.mailHint}</p>
        <Link
          href="/#contact?sujet=resiliation"
          className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-md border border-border bg-night px-6 py-3 text-sm font-semibold text-text transition hover:border-primary/40"
          data-analytics-cta="resiliation_online"
        >
          {RESILIATION_COPY.cta}
        </Link>
        <p className="mt-4 text-xs text-faint">
          {RESILIATION_COPY.legalNote}{" "}
          <Link href="/cgv" className="underline">
            CGV art. 9
          </Link>
        </p>
      </div>
    </section>
  );
}
