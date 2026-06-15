import { AutomatisationsCatalogSections } from "@/components/automatisations/AutomatisationsCatalogSections";
import {
  AUTOMATIONS_CATALOG,
  CATEGORIES,
  FEATURED_BTP,
  FEATURED_IMMO,
} from "@/lib/automations-catalog";
import {
  CATALOG_COMPOSITION_INTRO,
  CATALOG_UNIT_TIERS,
} from "@/lib/automatisations-catalog-pricing";
import { buildAutomatisationsCatalogJsonLd } from "@/lib/json-ld";
import { SETUP_48H_NUANCE, SITE_URL, PRIMARY_DEMO_CTA } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { rendezVousHref } from "@/lib/hub-nav";

export const metadata: Metadata = {
  title: "Catalogue automatisations · Orne",
  description:
    "Réponse aux demandes, tri mails, devis, classement Drive, résumé Telegram — catalogue pour diagnostiqueurs et artisans BTP en Orne. Démo 30 min.",
  openGraph: {
    title: "Ce qu'AutomateX fait pour toi — Catalogue",
    description:
      "Chaque automatisation expliquée avec un exemple terrain. Diagnostiqueurs et artisans BTP en Normandie.",
    url: `${SITE_URL}/automatisations`,
  },
  alternates: { canonical: `${SITE_URL}/automatisations` },
};

export default function AutomatisationsPage() {
  const catalogJsonLd = buildAutomatisationsCatalogJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }} />
    <main className="funnel-surface min-h-screen px-gutter pb-20 pt-[88px] md:pt-[100px]">
      <section className="mx-auto max-w-content pb-16 text-center">
        <span className="label-micro text-faint">Catalogue complet</span>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text md:text-4xl">
          Ce qu&apos;AutomateX peut faire pour toi
        </h1>
        <p className="mx-auto mt-5 max-w-readable text-base leading-relaxed text-muted">
          Chaque automatisation ci-dessous est une configuration réelle, avec le message exact qui
          part et l&apos;impact sur ton activité. Pages par douleur métier (relances, SMS, demandes) :{" "}
          <Link href="/automatisation-pour-artisans" className="text-primary underline">
            hub automatisations pro
          </Link>
          .
        </p>

        <div className="glass-panel mt-10 inline-flex gap-8 px-8 py-4">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-primary">{AUTOMATIONS_CATALOG.length}</p>
            <p className="mt-0.5 text-xs text-muted">automatisations</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-text">{CATEGORIES.length}</p>
            <p className="mt-0.5 text-xs text-muted">domaines</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-accent">48 h</p>
            <p className="mt-0.5 text-xs text-muted">après validation</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            {PRIMARY_DEMO_CTA}
          </Link>
          <Link href="/immobilier" className="btn-bracket btn-bracket-outline">
            Diagnostiqueur immobilier →
          </Link>
          <Link href="/btp" className="btn-bracket btn-bracket-outline">
            Artisan BTP →
          </Link>
        </div>
        <p className="mt-3 text-center text-xs text-faint">
          Démo 30 min · Gratuite · Nolan te rappelle sous 24 h
        </p>
      </section>

      <section className="mx-auto max-w-content border-t border-border py-12">
        <h2 className="font-heading text-xl font-bold text-text">Tarifs unitaires du catalogue</h2>
        <p className="mt-4 max-w-readable text-sm leading-relaxed text-text">{CATALOG_COMPOSITION_INTRO}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {CATALOG_UNIT_TIERS.map((tier) => (
            <li key={tier.tier} className="rounded-xl border border-border bg-surface p-4 text-sm">
              <p className="font-semibold text-text">{tier.tier}</p>
              <p className="mt-1 text-muted">{tier.label}</p>
              <p className="mt-2 text-text">
                {tier.setup} € mise en place · {tier.monthly} €/mois
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Packs site (Déclic / Système / Pilote) : voir{" "}
          <Link href="/immobilier#pricing" className="text-primary underline">
            immobilier
          </Link>{" "}
          ou{" "}
          <Link href="/btp#pricing" className="text-primary underline">
            BTP
          </Link>
          .
        </p>
      </section>

      <AutomatisationsCatalogSections />

      <section className="mx-auto max-w-content border-t border-border py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-text">
          Mise en route selon ton périmètre
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-sm leading-relaxed text-muted">
          {SETUP_48H_NUANCE}. Nolan t&apos;appelle pour cadrer 2 à 4 priorités en 30 minutes.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link href={rendezVousHref()} className="btn-bracket btn-bracket-primary">
            {PRIMARY_DEMO_CTA}
          </Link>
          <Link href="/immobilier#pricing" className="btn-bracket btn-bracket-outline">
            Tarifs diagnostiqueur →
          </Link>
          <Link href="/btp#pricing" className="btn-bracket btn-bracket-outline">
            Tarifs artisan BTP →
          </Link>
        </div>
        <p className="mt-6 text-xs text-faint">
          Démo gratuite · 30 min · Sans engagement · Basé à Flers, Orne
        </p>
        <p className="sr-only">
          Featured immobilier: {FEATURED_IMMO.join(", ")}. Featured BTP: {FEATURED_BTP.join(", ")}.
        </p>
      </section>
    </main>
    </>
  );
}
