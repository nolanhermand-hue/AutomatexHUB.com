import { BTP_BETA, BTP_SOCIAL_PROOF } from "@/lib/btp-copy";
import { LAUNCH_HONESTY } from "@/lib/trust-copy";
import { NAP } from "@/lib/constants";

export function BtpSocialProof() {
  return (
    <section className="border-y border-border bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content space-y-10">
        <div className="rounded-xl border border-primary/30 bg-bg-card p-6 md:p-8">
          <h2 className="font-heading text-xl text-text">{BTP_BETA.title}</h2>
          <p className="mt-2 text-sm text-muted">{BTP_BETA.body}</p>
          <p className="mt-2 text-sm font-semibold text-primary">{BTP_BETA.slots}</p>
        </div>

        <p className="rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-muted">
          {LAUNCH_HONESTY}
        </p>

        <ul className="space-y-3 text-sm text-muted md:text-base">
          {BTP_SOCIAL_PROOF.stats.map((s) => (
            <li key={s} className="border-l-2 border-primary/40 pl-4">
              {s}
            </li>
          ))}
        </ul>

        <blockquote className="rounded-xl border border-border bg-bg-card p-6">
          <p className="italic leading-relaxed text-muted">&ldquo;{BTP_SOCIAL_PROOF.founderQuote}&rdquo;</p>
          <footer className="mt-3 text-sm font-semibold text-text">
            — {NAP.founder}, fondateur Automatex Hub
          </footer>
        </blockquote>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Hébergement &amp; outils
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {BTP_SOCIAL_PROOF.publicHostingLabels.map((label) => (
              <li
                key={label}
                className="rounded-md border border-border bg-bg-card px-3 py-1.5 text-sm font-medium text-text"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
