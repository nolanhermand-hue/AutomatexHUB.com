import { BtpDemoSection } from "@/components/demo/BtpDemoSection";
import Link from "next/link";
import { BtpPricing } from "@/components/sections/BtpPricing";
import { BtpSocialProof } from "@/components/sections/BtpSocialProof";
import { Contact } from "@/components/sections/Contact";
import {
  BTP_ACCOMPANIMENT,
  BTP_AUTOMATIONS,
  BTP_DAY_PAIN,
  BTP_FAQ,
  BTP_HERO,
} from "@/lib/btp-copy";
import { NAP } from "@/lib/constants";

export function BtpLanding() {
  return (
    <>
      <section id="hero" className="border-b border-border bg-night px-gutter pb-12 pt-[88px] md:pt-[100px]">
        <div className="mx-auto max-w-content">
          <h1 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.1] text-text">
            {BTP_HERO.h1}
          </h1>
          <p className="mt-5 max-w-readable text-base text-muted md:text-lg">{BTP_HERO.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#demo"
              className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border bg-bg-card px-6 font-semibold text-text"
            >
              {BTP_HERO.ctaHow}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-cta px-8 font-semibold text-cta-fg"
            >
              {BTP_HERO.ctaDemo}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            {BTP_HERO.badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-card px-gutter py-12 md:py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-3xl text-text">{BTP_DAY_PAIN.h2}</h2>
          <ol className="mt-8 space-y-4 border-l-2 border-primary/30 pl-6">
            {BTP_DAY_PAIN.steps.map((s) => (
              <li key={s.time}>
                <time className="font-mono text-sm font-semibold text-primary">{s.time}</time>
                <p className="mt-1 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-heading text-2xl font-semibold text-text">{BTP_DAY_PAIN.stat}</p>
          <p className="mt-2 text-xs text-muted">{BTP_DAY_PAIN.source}</p>
        </div>
      </section>

      <BtpDemoSection />

      <section id="solution" className="bg-bg-card px-gutter py-12 md:py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-3xl text-text">{BTP_AUTOMATIONS.h2}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {BTP_AUTOMATIONS.items.map((item) => (
              <article key={item.id} className="rounded-xl border border-border p-6">
                <h3 className="font-heading text-xl text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-night px-gutter py-12 md:py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-3xl text-text">{BTP_ACCOMPANIMENT.h2}</h2>
          <p className="mt-4 max-w-readable text-muted">{BTP_ACCOMPANIMENT.body}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BTP_ACCOMPANIMENT.pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-bg-card p-6">
                <h3 className="font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 border-l-4 border-primary pl-4 text-muted">
            <p className="italic">&ldquo;{BTP_ACCOMPANIMENT.quote}&rdquo;</p>
            <footer className="mt-2 text-sm font-semibold text-text">
              — {NAP.founder}, fondateur Automatex Hub
            </footer>
          </blockquote>
          <p className="mt-6">
            <Link href="/accompagnement" className="font-semibold text-primary underline">
              Tout sur l&apos;accompagnement →
            </Link>
          </p>
        </div>
      </section>

      <BtpPricing />

      <BtpSocialProof />

      <section id="faq" className="bg-bg-card px-gutter py-12 md:py-16">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-3xl text-text">{BTP_FAQ.h2}</h2>
          <div className="mt-8 space-y-4">
            {BTP_FAQ.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border bg-night px-5 py-4"
              >
                <summary className="cursor-pointer font-semibold text-text">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Contact variant="btp" />
    </>
  );
}
