import { AutomationCard } from "@/components/catalog/AutomationCard";
import {
  AUTOMATIONS_CATALOG,
  CATEGORIES,
  FEATURED_BTP,
  FEATURED_IMMO,
  getByCategory,
} from "@/lib/automations-catalog";
import { BOOKING_CTA_LABEL, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tout ce qu'Automatex peut faire — Catalogue des automatisations · Orne",
  description:
    "Réponse aux leads, tri mails, devis automatiques, classement Drive, résumé Telegram, note vocale, relances clients — catalogue complet pour mandataires et artisans BTP en Orne.",
  openGraph: {
    title: "Ce qu'Automatex fait à votre place — Catalogue complet · Automatex Hub",
    description:
      "Toutes les automatisations pour mandataires immobiliers et artisans BTP en Normandie. Chaque fonction expliquée avec un exemple réel.",
    url: `${SITE_URL}/automatisations`,
  },
  alternates: { canonical: `${SITE_URL}/automatisations` },
};

export default function AutomatisationsPage() {
  return (
    <main className="min-h-screen bg-night px-gutter pb-20 pt-[88px] md:pt-[100px]">
      <section className="mx-auto max-w-content pb-16 text-center">
        <span className="label-micro text-faint">Catalogue complet</span>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text md:text-4xl">
          Tout ce qu&apos;Automatex fait à votre place — chaque jour
        </h1>
        <p className="mx-auto mt-5 max-w-readable text-base leading-relaxed text-muted">
          Chaque automatisation ci-dessous est une configuration réelle, avec le message exact qui
          part et l&apos;impact sur votre activité.
        </p>

        <div className="mt-10 inline-flex gap-8 rounded-2xl border border-border bg-bg-card px-8 py-4">
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
            <p className="font-heading text-2xl font-bold text-accent">48h</p>
            <p className="mt-0.5 text-xs text-muted">pour activer</p>
          </div>
        </div>
      </section>

      {CATEGORIES.map((category) => {
        const items = getByCategory(category);
        return (
          <section key={category} className="mx-auto max-w-content pb-16">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="font-heading text-lg font-bold text-text">{category}</h2>
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-faint">
                {items.length} automatisation{items.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((automation) => (
                <AutomationCard key={automation.id} {...automation} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-content border-t border-border py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-text">
          Toutes ces automatisations peuvent être actives chez vous en 48h
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-sm text-muted">
          Vous n&apos;avez pas à tout prendre. On configure ce qui est utile pour vous. Nolan cadré
          ça en 20 minutes.
        </p>
        <Link
          href="/btp#contact"
          className="mt-8 inline-flex rounded-xl bg-cta px-8 py-4 text-base font-bold text-cta-fg shadow-lg transition hover:brightness-110"
        >
          {BOOKING_CTA_LABEL} →
        </Link>
        <p className="mt-4 text-xs text-faint">Démo gratuite · 20 min · Sans engagement · Flers, Orne</p>
        <p className="sr-only">
          Featured immobilier: {FEATURED_IMMO.join(", ")}. Featured BTP: {FEATURED_BTP.join(", ")}.
        </p>
      </section>
    </main>
  );
}
