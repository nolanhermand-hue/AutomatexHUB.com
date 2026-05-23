import { HubBeforeAfterDemo } from "@/components/demo/HubBeforeAfterDemo";
import { IconBtp, IconImmobilier } from "@/components/icons/HubPathIcons";
import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import Link from "next/link";
import { HUB_ACCOMPANIMENT, HUB_ENTRY_COPY } from "@/lib/hub-copy";

export function HubEntry() {
  return (
    <>
      <section className="relative flex min-h-[85svh] flex-col justify-center px-gutter pb-16 pt-24 md:pt-28">
        <div className="mx-auto w-full max-w-content">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
              AUTOMATEX HUB
            </span>
            <span className="h-px w-16 bg-border" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
              FLERS · ORNE
            </span>
          </div>

          <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text">
            {HUB_ENTRY_COPY.headlineLine1}
            <br />
            {HUB_ENTRY_COPY.headlineLine2}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{HUB_ENTRY_COPY.subline}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {HUB_ENTRY_COPY.badges.map((b) => (
              <span key={b} className="badge badge-default">
                {b}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-lg">
            <FounderTrustBlock compact />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/immobilier#contact" className="btn-bracket" data-analytics-cta="hub_immobilier_cta">
              Je suis mandataire
            </Link>
            <Link
              href="/btp#contact"
              className="btn-bracket btn-bracket-outline"
              data-analytics-cta="hub_btp_cta"
            >
              Je suis artisan BTP
            </Link>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
            <Link
              href="/immobilier"
              className="card group flex flex-col text-left transition hover:border-primary/40"
              data-analytics-cta="hub_immobilier"
            >
              <IconImmobilier />
              <h2 className="mt-4 text-xl font-semibold text-text md:text-2xl">
                {HUB_ENTRY_COPY.blockImmobilier.title}
              </h2>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-muted md:text-base">
                &ldquo;{HUB_ENTRY_COPY.blockImmobilier.quote}&rdquo;
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                {HUB_ENTRY_COPY.blockImmobilier.cta}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/btp"
              className="card group flex flex-col text-left transition hover:border-primary/40"
              data-analytics-cta="hub_btp"
            >
              <IconBtp />
              <h2 className="mt-4 text-xl font-semibold text-text md:text-2xl">
                {HUB_ENTRY_COPY.blockBtp.title}
              </h2>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-muted md:text-base">
                &ldquo;{HUB_ENTRY_COPY.blockBtp.quote}&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-muted">{HUB_ENTRY_COPY.priceHintBtp}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                {HUB_ENTRY_COPY.blockBtp.cta}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          </div>

          <p className="mx-auto mt-12 max-w-readable text-sm text-muted md:text-base">
            {HUB_ENTRY_COPY.footerNote}
          </p>
          <div className="mt-10 flex flex-col items-start gap-3">
            <Link
              href="/immobilier#contact"
              className="btn-bracket btn-bracket-primary"
              data-analytics-cta="hub_demo_unified"
            >
              Nolan me rappelle sous 24 h
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
              Démo gratuite · 20 min · Sans engagement · Flers, Orne
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent"
          aria-hidden="true"
        />
      </section>

      <HubBeforeAfterDemo />

      <AccompanimentPillars
        h2={HUB_ACCOMPANIMENT.h2}
        pillars={HUB_ACCOMPANIMENT.pillars}
        linkLabel={HUB_ACCOMPANIMENT.linkLabel}
        variant="default"
        showFounder
      />
    </>
  );
}
