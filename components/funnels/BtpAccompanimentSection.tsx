import { NolanLiveDemo } from "@/components/motion/NolanLiveDemo";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { BTP_ACCOMPANIMENT } from "@/lib/btp-copy";
import { NAP } from "@/lib/constants";
import Link from "next/link";

export function BtpAccompanimentSection() {
  return (
    <section className="border-y border-border bg-surface px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_ACCOMPANIMENT.h2}</h2>
        <p className="mt-4 max-w-readable text-muted">{BTP_ACCOMPANIMENT.body}</p>
        <div className="mt-8 rounded-xl border border-primary/20 bg-bg-card p-6">
          <FounderTrustBlock compact />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BTP_ACCOMPANIMENT.pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-night p-6">
              <h3 className="font-semibold text-text">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-10 border-l-4 border-primary pl-4 text-muted">
          <p className="italic">&ldquo;{BTP_ACCOMPANIMENT.quote}&rdquo;</p>
          <footer className="mt-2 text-sm font-semibold text-text">
            — {NAP.founder}, Automatex Hub
          </footer>
        </blockquote>
        <p className="mt-6">
          <Link href="/accompagnement" className="font-semibold text-primary underline">
            Tout sur l&apos;accompagnement →
          </Link>
        </p>
        <NolanLiveDemo />
      </div>
    </section>
  );
}
