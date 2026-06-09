import { HomeFounder } from "@/components/home/HomeFounder";
import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import { buildNormandiePilierJsonLd } from "@/lib/json-ld";
import { NORMANDIE_CTA_REASSURANCE } from "@/lib/normandie-shared";
import {
  NORMANDIE_DEPARTMENTS,
  NORMANDIE_PILIER,
  getNormandieVilleBySlug,
} from "@/lib/villes-normandie";
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import Link from "next/link";

export function NormandiePilierTemplate() {
  const pilier = NORMANDIE_PILIER;
  const jsonLd = buildNormandiePilierJsonLd({
    description: pilier.metaDescription,
    faq: pilier.pilierFaq,
  });

  return (
    <main className="home-page home-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="hero" className="relative px-gutter pb-12 pt-24 md:pt-28">
        <div className="mx-auto max-w-content">
          <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
            <Link href="/" className="text-primary hover:underline">
              Accueil
            </Link>
            <span aria-hidden> / </span>
            <span className="text-text">Normandie</span>
          </nav>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--terracotta)]">
            Normandie · {SOVEREIGNTY_TRUST_LINE}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] text-text">
            {pilier.h1}
          </h1>
          {pilier.intro.map((p) => (
            <p key={p.slice(0, 48)} className="mt-4 max-w-readable text-base leading-relaxed text-muted md:text-lg">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <PrimaryDemoCta
              analyticsId="normandie_pilier_hero"
              className="btn-bracket btn-bracket-primary min-h-[48px] w-full justify-center sm:w-auto"
            />
          </div>
          <p className="mt-5 text-sm text-muted">{NORMANDIE_CTA_REASSURANCE}</p>
        </div>
      </section>

      <section className="border-t border-border px-gutter py-16 md:py-20">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
            Villes couvertes en Normandie
          </h2>
          <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
            Chaque page décrit le contexte local (BTP, diagnostiqueurs, TPE). Même interlocuteur, même
            démo de 20 minutes.
          </p>
          <div className="mt-10 space-y-10">
            {NORMANDIE_DEPARTMENTS.map((dept) => (
              <div key={dept.code}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-faint">
                  {dept.label} ({dept.code})
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {dept.slugs.map((slug) => {
                    const v = getNormandieVilleBySlug(slug);
                    if (!v) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={v.path}
                          className="block rounded-lg border border-border bg-surface p-4 transition hover:border-primary/40 hover:bg-surface-2"
                        >
                          <span className="font-semibold text-text">{v.name}</span>
                          <span className="mt-1 block text-xs text-muted">{v.heroEyebrow}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFounder />

      <section id="faq" className="border-t border-border px-gutter py-16 md:py-20">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">Questions sur la zone</h2>
          <dl className="mt-8 space-y-6">
            {pilier.pilierFaq.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-surface p-5">
                <dt className="font-semibold text-text">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border px-gutter py-16 text-center md:py-20">
        <div className="mx-auto max-w-content">
          <PrimaryDemoCta
            analyticsId="normandie_pilier_final"
            className="btn-bracket btn-bracket-primary min-h-[48px] w-full justify-center sm:w-auto"
          />
        </div>
      </section>
    </main>
  );
}
