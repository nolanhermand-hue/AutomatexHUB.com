import { BTP_ACCOMPANIMENT } from "@/lib/btp-copy";
import Link from "next/link";

/** Teaser BTP — détail sur /accompagnement (pas de seconde vidéo). */
export function BtpAccompanimentSection() {
  return (
    <section className="border-y border-border bg-surface px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_ACCOMPANIMENT.h2}</h2>
        <p className="mt-4 text-muted">{BTP_ACCOMPANIMENT.teaser}</p>
        <p className="mt-6">
          <Link href="/accompagnement" className="btn-bracket btn-bracket-outline inline-flex">
            Tout sur l&apos;accompagnement
            <span aria-hidden>→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
