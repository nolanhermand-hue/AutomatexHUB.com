"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { AUTOMATIONS } from "@/lib/automations";
import { AUTOMATIONS_SECTION, BOOKING_CTA_LABEL } from "@/lib/constants";
import { Fragment } from "react";

function initialsFromTitle(title: string): string {
  const words = title.replace(/[^a-zA-Z0-9àâäéèêëïîôùûüç\s]/g, " ").trim().split(/\s+/);
  if (words.length >= 2 && words[0] && words[1]) {
    return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

function AutomationChip({ title }: { title: string }) {
  const ini = initialsFromTitle(title);
  return (
    <div className="flex shrink-0 flex-col items-center justify-center px-2 md:px-3">
      <div
        className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-bg-card md:size-8"
        aria-hidden
      >
        <span className="text-[9px] font-semibold text-primary md:text-[10px]">{ini}</span>
      </div>
      <span className="mt-1 max-w-[6.5rem] truncate text-center text-[9px] font-medium leading-tight text-faint md:max-w-[7.5rem] md:text-[10px]">
        {title}
      </span>
    </div>
  );
}

function MarqueeRow({ items, keyPrefix }: { items: typeof AUTOMATIONS; keyPrefix: string }) {
  const cells = items.map((item, index) => (
    <Fragment key={`${keyPrefix}-${item.id}`}>
      {index > 0 ? (
        <span className="mx-3 shrink-0 select-none text-primary md:mx-4" aria-hidden>
          ·
        </span>
      ) : null}
      <AutomationChip title={item.title} />
    </Fragment>
  ));
  return (
    <>
      <div className="flex shrink-0 items-center">{cells}</div>
      <div className="flex shrink-0 items-center" aria-hidden>
        {cells}
      </div>
    </>
  );
}

const MID = Math.ceil(AUTOMATIONS.length / 2);
const BAND_A = AUTOMATIONS.slice(0, MID);
const BAND_B = AUTOMATIONS.slice(MID);

/** Automatisations en bandeaux marquee (même UX que les logos outils). */
export function Automations() {
  return (
    <section
      id="automations"
      className="border-y border-border bg-night"
      data-analytics-section="automations"
    >
      <div className="mx-auto max-w-content px-gutter py-10 md:py-12">
        <h2 className="font-heading text-2xl text-text md:text-3xl">{AUTOMATIONS_SECTION.h2}</h2>
        <p className="mt-2 max-w-readable text-sm text-muted md:text-base">
          {AUTOMATIONS_SECTION.subtitle}
        </p>
      </div>

      <div className="bg-bg-card">
        <p className="px-gutter py-2 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
          Leads &amp; quotidien
        </p>
        <div className="automatex-marquee-strip border-y border-border">
          <div className="automatex-marquee-inner automatex-marquee-inner--45">
            <MarqueeRow items={BAND_A} keyPrefix="auto-a" />
          </div>
        </div>
      </div>

      <div className="bg-night">
        <p className="px-gutter py-2 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">
          Documents, clients &amp; terrain
        </p>
        <div className="automatex-marquee-strip border-b border-border">
          <div className="automatex-marquee-inner automatex-marquee-inner--50 automatex-marquee-inner--reverse">
            <MarqueeRow items={BAND_B} keyPrefix="auto-b" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-content px-gutter py-8 text-center">
        <p className="text-xs text-faint md:text-sm">{AUTOMATIONS_SECTION.footnote}</p>
        <a
          href="#contact"
          data-analytics-cta="automations_cta"
          onClick={() => trackCtaClicked("automations_cta")}
          className="mt-6 btn-bracket btn-bracket-primary"
        >
          {BOOKING_CTA_LABEL}
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
