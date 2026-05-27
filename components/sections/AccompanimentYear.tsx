"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { ACCOMPANIMENT_COPY, NAP } from "@/lib/constants";

export function AccompanimentYear() {
  return (
    <section
      id="accompagnement"
      className="border-y border-border bg-night px-gutter py-12 md:py-16"
      data-analytics-section="accompaniment_year"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent-dark">{ACCOMPANIMENT_COPY.eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          {ACCOMPANIMENT_COPY.h2}
        </h2>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-muted md:text-lg">
          {ACCOMPANIMENT_COPY.intro}
        </p>

        <ol className="mt-10 grid gap-6 md:grid-cols-4 md:gap-4">
          {ACCOMPANIMENT_COPY.timeline.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-lg border border-border bg-bg-card p-5"
            >
              {index < ACCOMPANIMENT_COPY.timeline.length - 1 ? (
                <span
                  className="absolute right-0 top-8 hidden h-px w-4 translate-x-full bg-border md:block"
                  aria-hidden
                />
              ) : null}
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {item.step}
              </p>
              <h3 className="mt-2 font-heading text-lg text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ACCOMPANIMENT_COPY.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-border bg-bg-card p-5"
            >
              <h3 className="font-heading text-xl text-text">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted md:text-[15px]">
          {ACCOMPANIMENT_COPY.tierNote}
        </p>
        <p className="mt-4 max-w-readable text-sm text-muted md:text-[15px]">
          {ACCOMPANIMENT_COPY.surMesure.body}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`tel:${NAP.phoneE164}`}
            data-analytics-cta="accompagnement_phone"
            onClick={() => trackCtaClicked("accompagnement_phone")}
            className="btn-bracket btn-bracket-outline min-h-[48px] text-sm"
          >
            <span aria-hidden>📞</span>
            {ACCOMPANIMENT_COPY.phoneCta} · {NAP.phoneDisplay}
          </a>
          <a
            href="#contact"
            data-analytics-cta="accompagnement_cta"
            onClick={() => trackCtaClicked("accompagnement_cta")}
            className="btn-bracket btn-bracket-primary"
          >
            {ACCOMPANIMENT_COPY.cta}
            <span className="ml-1" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
