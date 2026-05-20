import { DATA_TRUST_COPY } from "@/lib/constants";

export function DataTrustSection() {
  return (
    <section
      id="donnees"
      className="border-t border-border bg-bg-card px-gutter py-12 md:py-16"
      data-analytics-section="data_trust"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">{DATA_TRUST_COPY.h2}</h2>
        <p className="mt-4 max-w-readable text-muted">{DATA_TRUST_COPY.intro}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Jamais</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {DATA_TRUST_COPY.never.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-text" aria-hidden>
                    ✗
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Toujours</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {DATA_TRUST_COPY.always.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm">
          <a href="/securite" className="font-semibold text-primary underline underline-offset-2">
            {DATA_TRUST_COPY.linkLabel}
          </a>
        </p>
      </div>
    </section>
  );
}
