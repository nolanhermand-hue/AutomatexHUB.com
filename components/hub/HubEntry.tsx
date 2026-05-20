import { HubBeforeAfterDemo } from "@/components/demo/HubBeforeAfterDemo";
import { IconBtp, IconImmobilier } from "@/components/icons/HubPathIcons";
import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import Link from "next/link";
import { HUB_ACCOMPANIMENT, HUB_ENTRY_COPY } from "@/lib/hub-copy";

export function HubEntry() {
  return (
    <>
      <div className="min-h-[80svh] bg-night px-gutter pb-12 pt-[88px] lg:pt-[104px]">
        <div className="mx-auto max-w-content text-center">
          <p className="label-micro text-primary">{HUB_ENTRY_COPY.eyebrow}</p>
          <h1 className="mt-4 font-heading text-[clamp(2rem,6vw,3.25rem)] font-bold leading-[1.08] text-text">
            {HUB_ENTRY_COPY.headlineLine1}
            <br />
            {HUB_ENTRY_COPY.headlineLine2}
          </h1>
          <p className="mx-auto mt-5 max-w-readable text-base text-muted md:text-lg">
            {HUB_ENTRY_COPY.subline}
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-muted">
            {HUB_ENTRY_COPY.badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-lg">
            <FounderTrustBlock compact />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            <Link
              href="/immobilier"
              className="group flex flex-col rounded-xl border border-border bg-bg-card p-8 text-left shadow-sm transition hover:border-primary/40 hover:shadow-md"
              data-analytics-cta="hub_immobilier"
            >
              <IconImmobilier />
              <h2 className="mt-4 font-heading text-xl font-semibold text-text md:text-2xl">
                {HUB_ENTRY_COPY.blockImmobilier.title}
              </h2>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-muted md:text-base">
                &ldquo;{HUB_ENTRY_COPY.blockImmobilier.quote}&rdquo;
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {HUB_ENTRY_COPY.blockImmobilier.cta}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/btp"
              className="group flex flex-col rounded-xl border border-border bg-bg-card p-8 text-left shadow-sm transition hover:border-primary/40 hover:shadow-md"
              data-analytics-cta="hub_btp"
            >
              <IconBtp />
              <h2 className="mt-4 font-heading text-xl font-semibold text-text md:text-2xl">
                {HUB_ENTRY_COPY.blockBtp.title}
              </h2>
              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-muted md:text-base">
                &ldquo;{HUB_ENTRY_COPY.blockBtp.quote}&rdquo;
              </p>
              <p className="mt-2 text-xs font-medium text-muted">{HUB_ENTRY_COPY.priceHintBtp}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/immobilier#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-cta px-8 py-3.5 text-[15px] font-semibold text-cta-fg shadow-sm transition hover:brightness-110"
              data-analytics-cta="hub_demo_immo"
            >
              {HUB_ENTRY_COPY.ctaImmobilier}
            </Link>
            <Link
              href="/btp#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-border bg-bg-card px-8 py-3.5 text-[15px] font-semibold text-text shadow-sm transition hover:border-primary/40"
              data-analytics-cta="hub_demo_btp"
            >
              {HUB_ENTRY_COPY.ctaBtp}
            </Link>
          </div>
        </div>
      </div>

      <HubBeforeAfterDemo />

      <AccompanimentPillars
        h2={HUB_ACCOMPANIMENT.h2}
        pillars={HUB_ACCOMPANIMENT.pillars}
        linkLabel={HUB_ACCOMPANIMENT.linkLabel}
        variant="highlight"
        showFounder
      />
    </>
  );
}
