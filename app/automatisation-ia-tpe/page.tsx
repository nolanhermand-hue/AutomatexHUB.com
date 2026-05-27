import { Contact } from "@/components/sections/Contact";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { TpeAutomatisationPricing } from "@/components/tpe/TpeAutomatisationPricing";
import {
  TPE_AUTOMATION_DOMAINS,
  TPE_FAQ,
  TPE_GEO_BLOCKS,
  TPE_HERO,
  TPE_INCLUDED_ALL_PLANS,
  TPE_META,
  TPE_PAGE_PATH,
  TPE_PAIN,
  TPE_SECTORS,
  TPE_YEAR_TIMELINE,
} from "@/lib/automatisation-ia-tpe-content";
import { buildTpeAutomatisationJsonLd } from "@/lib/json-ld";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: TPE_META.title,
  description: TPE_META.description,
  alternates: { canonical: `${SITE_URL}${TPE_PAGE_PATH}` },
  openGraph: {
    title: TPE_META.ogTitle,
    description: TPE_META.ogDescription,
    url: `${SITE_URL}${TPE_PAGE_PATH}`,
  },
};

export default function AutomatisationIaTpePage() {
  const jsonLd = buildTpeAutomatisationJsonLd();

  return (
    <div className="bg-night pb-16 pt-[88px] md:pt-[100px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto max-w-content px-gutter pb-16">
        <p className="label-micro text-accent">{TPE_HERO.eyebrow}</p>
        <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-text">
          {TPE_HERO.h1Line1}
          <span className="block text-primary">{TPE_HERO.h1Line2}</span>
        </h1>
        <p className="mt-2 text-xs text-faint">{TPE_HERO.statSource}</p>
        <p className="mt-5 max-w-readable text-lg text-muted">{TPE_HERO.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {TPE_HERO.stats.map((s) => (
            <div
              key={s.label}
              className="min-w-[5.5rem] rounded-lg border border-border bg-bg-card px-4 py-3 text-center"
            >
              <p className="font-heading text-xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-bracket btn-bracket-primary">
            {TPE_HERO.ctaPrimary}
            <span aria-hidden>→</span>
          </a>
          <a
            href="#automatisations"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-6 text-sm font-semibold text-text"
          >
            {TPE_HERO.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="border-t border-border px-gutter py-16">
        <div className="mx-auto max-w-content">
          <p className="label-micro text-muted">{TPE_PAIN.label}</p>
          <h2 className="mt-3 font-heading text-3xl text-text">{TPE_PAIN.h2}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TPE_PAIN.cards.map((c) => (
              <div key={c.stat} className="card p-5">
                <p className="font-heading text-3xl font-bold text-primary">{c.stat}</p>
                <p className="mt-2 text-sm text-text">{c.label}</p>
                <p className="mt-2 text-xs text-faint">{c.source}</p>
                {"trend" in c && c.trend ? (
                  <p className="mt-1 text-xs text-accent">{c.trend}</p>
                ) : null}
              </div>
            ))}
          </div>
          <p className="label-micro mt-12 text-muted">{TPE_PAIN.dayLabel}</p>
          <ol className="mt-4 space-y-3 border-l-2 border-primary/30 pl-4">
            {TPE_PAIN.daySteps.map((step) => (
              <li key={step.time} className="text-sm text-muted">
                <span className="font-mono text-xs text-primary">{step.time}</span> — {step.text}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="automatisations" className="border-t border-border px-gutter py-16">
        <div className="mx-auto max-w-content">
          <p className="label-micro text-muted">MODULE 02 — LES SOLUTIONS</p>
          <h2 className="mt-3 font-heading text-3xl text-text">
            Ce que le système fait à votre place — chaque jour
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TPE_AUTOMATION_DOMAINS.map((d) => (
              <article key={d.num} className="card flex flex-col p-5">
                <p className="font-mono text-xs text-primary">DOMAINE {d.num}</p>
                <h3 className="mt-2 font-heading text-lg text-text">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{d.desc}</p>
                <ul className="mt-3 list-inside list-disc text-xs text-faint">
                  {d.examples.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-accent">{d.target}</p>
              </article>
            ))}
          </div>
          <Link href="/automatisations" className="btn-bracket btn-bracket-outline mt-8 inline-flex">
            Voir le catalogue complet
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-border px-gutter py-16">
        <div className="mx-auto max-w-content">
          <p className="label-micro text-muted">MODULE 03 — L&apos;ACCOMPAGNEMENT</p>
          <h2 className="mt-3 font-heading text-3xl text-text">
            Un an avec Automatex — mois par mois
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {TPE_YEAR_TIMELINE.map((block) => (
              <div key={block.period} className="card border-border p-6">
                <p className="font-mono text-xs text-primary">
                  {block.period} · {block.phase}
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
                  {block.what.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-border pt-4 text-sm italic text-text">
                  {block.nolan}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 card p-6 md:p-8">
            <p className="label-micro text-muted">INCLUS DANS CHAQUE FORMULE</p>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {TPE_INCLUDED_ALL_PLANS.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/accompagnement"
              className="mt-6 inline-block text-sm font-semibold text-primary underline"
            >
              Tout sur l&apos;accompagnement →
            </Link>
          </div>
        </div>
      </section>

      <TpeAutomatisationPricing />

      <section className="border-t border-border px-gutter py-16">
        <div className="mx-auto max-w-content">
          <p className="label-micro text-muted">MODULE 05 — POUR QUI ?</p>
          <h2 className="mt-3 font-heading text-3xl text-text">
            Tout indépendant qui perd du temps à répéter les mêmes tâches
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TPE_SECTORS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="card flex flex-col p-5 transition hover:border-primary/40"
              >
                <span className="text-2xl" aria-hidden>
                  {s.icon}
                </span>
                <p className="mt-2 font-semibold text-text">{s.label}</p>
                <p className="mt-auto pt-3 text-sm text-primary">{s.cta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sr-only" aria-label="Réponses pour moteurs de recherche et assistants">
        {TPE_GEO_BLOCKS.map((b) => (
          <div key={b.q}>
            <h2>{b.q}</h2>
            <p>{b.a}</p>
          </div>
        ))}
      </section>

      <section id="faq" className="border-t border-border px-gutter py-16">
        <div className="mx-auto max-w-content">
          <p className="label-micro text-muted">FAQ</p>
          <h2 className="mb-8 mt-3 font-heading text-3xl text-text">Questions fréquentes TPE</h2>
          <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
            {TPE_FAQ.map((item) => (
              <details key={item.q} className="group bg-surface">
                <summary className="cursor-pointer list-none px-6 py-4 text-sm font-medium text-text marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="border-t border-border px-6 pb-4 pt-2 text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-gutter pt-8">
        <FounderTrustBlock />
      </section>

      <Contact variant="hub" />
    </div>
  );
}
