"use client";

import { trackCalculatorUsed, trackCtaClicked } from "@/lib/analytics";
import { MatrixNumber } from "@/components/ui/MatrixNumber";
import { NativeButton } from "@/components/ui/Button";
import {
  CALCULATOR_COPY,
  CALCULATOR_SALES_MAX,
  CALCULATOR_SALES_MIN,
  DEFAULT_SALES_PER_YEAR,
  SHOW_CALCULATOR_HOURS_ROW,
} from "@/lib/constants";
import {
  calculateEurosLostPerYear,
  calculateHoursLostPerYear,
  calculateLeadsLostPerWeek,
} from "@/lib/calculator";
import { formatEuro } from "@/lib/format";
import { useCallback, useMemo, useRef, useState, type CSSProperties } from "react";

export function Calculator() {
  const [sales, setSales] = useState(DEFAULT_SALES_PER_YEAR);

  const leads = useMemo(() => calculateLeadsLostPerWeek(sales), [sales]);
  const euros = useMemo(() => calculateEurosLostPerYear(sales), [sales]);
  const hours = useMemo(() => calculateHoursLostPerYear(sales), [sales]);

  const lastThrottle = useRef(0);
  const onSlide = useCallback(() => {
    const now = Date.now();
    if (now - lastThrottle.current >= 500) {
      lastThrottle.current = now;
      trackCalculatorUsed();
    }
  }, []);

  const pct =
    ((sales - CALCULATOR_SALES_MIN) /
      (CALCULATOR_SALES_MAX - CALCULATOR_SALES_MIN)) *
    100;

  const dynamicCta =
    euros > 30000
      ? `Ces ${formatEuro(euros)} méritent un appel — Réserver 30 min`
      : `${CALCULATOR_COPY.ctaPrefix} (${formatEuro(euros)}) — ${CALCULATOR_COPY.ctaSuffix}`;

  const goToRendezVous = () => {
    trackCtaClicked("calculator_to_contact");
    window.location.assign("/rendez-vous");
  };

  return (
    <section
      id="calculator"
      className="border-b border-border bg-night px-gutter py-12 md:py-16"
    >
      <div
        className="mx-auto max-w-[720px] rounded-xl border border-border bg-bg-card p-6 md:p-10"
        style={
          {
            "--calc-pct": `${pct}%`,
          } as CSSProperties
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-faint">
          {CALCULATOR_COPY.sectionEyebrow}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-medium text-text md:text-4xl">
          {CALCULATOR_COPY.title}
        </h2>
        <p className="mt-2 text-sm text-muted md:text-base">
          {CALCULATOR_COPY.subtitle}
        </p>

        <div className="mt-8">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="sales-range" className="text-sm font-semibold text-text">
              {CALCULATOR_COPY.salesLabel}
            </label>
            <span className="font-heading text-3xl text-text">{sales}</span>
          </div>
          <input
            id="sales-range"
            type="range"
            data-cursor="slider"
            className="calc-range mt-2 w-full"
            min={CALCULATOR_SALES_MIN}
            max={CALCULATOR_SALES_MAX}
            step={1}
            value={sales}
            onChange={(e) => {
              setSales(Number(e.target.value));
              onSlide();
            }}
          />
        </div>

        <div className="mt-8 grid gap-5">
          <div className="rounded-xl border border-border bg-night p-4">
            <p className="text-sm font-semibold text-muted">
              {CALCULATOR_COPY.outLeadsLabel}
            </p>
            <p className="mt-2 font-heading text-4xl text-text md:text-5xl">
              <MatrixNumber value={leads} decimals={1} />
            </p>
          </div>
          <div className="rounded-xl border border-border bg-night p-4">
            <p className="text-sm font-semibold text-muted">
              {CALCULATOR_COPY.outEurosLabel}
            </p>
            <p className="mt-2 font-heading font-bold leading-none text-text [font-size:clamp(2.5rem,8vw,4rem)]">
              <span className="inline-flex items-baseline gap-2">
                <MatrixNumber value={euros} decimals={0} />
                <span className="text-3xl">€</span>
              </span>
            </p>
          </div>
          {SHOW_CALCULATOR_HOURS_ROW ? (
            <div className="rounded-xl border border-border bg-night p-4">
              <p className="text-sm font-semibold text-muted">
                {CALCULATOR_COPY.outHoursLabel}
              </p>
              <p className="mt-2 font-heading text-3xl text-text">
                <MatrixNumber value={hours} decimals={0} /> h
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <NativeButton
            type="button"
            variant="primary"
            className="w-full"
            data-cursor="cta"
            onClick={goToRendezVous}
          >
            {dynamicCta}
          </NativeButton>
          <a
            href="#solution"
            onClick={() => trackCtaClicked("calculator_scroll_solution")}
            className="text-center text-sm font-semibold text-muted underline-offset-4 hover:underline"
            data-cursor="link"
          >
            {CALCULATOR_COPY.scrollHint} →
          </a>
        </div>
      </div>

      {/* Bridge B8 — passerelle narrative vers Contact */}
      <p className="mx-auto mt-8 max-w-[720px] text-center text-sm text-muted">
        <span className="font-semibold text-text">{formatEuro(euros)}/an</span> en commissions exposées
        (hypothèse).{" "}
        <button
          type="button"
          onClick={goToRendezVous}
          className="font-semibold text-text underline-offset-4 hover:underline"
          data-cursor="link"
        >
          Nolan les récupère avec toi →
        </button>
      </p>
    </section>
  );
}
