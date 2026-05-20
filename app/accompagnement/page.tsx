import { AccompagnementPointMensuelDemo } from "@/components/demo/AccompagnementPointMensuelDemo";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { NolanLiveDemo } from "@/components/motion/NolanLiveDemo";
import { ACCOMPANIMENT_PAGE } from "@/lib/btp-copy";
import { AccompagnementContactForm } from "@/components/sections/AccompagnementContactForm";
import { NAP } from "@/lib/constants";
import { ACCOMPANIMENT_CONTINUITY } from "@/lib/trust-copy";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement humain inclus · Flers · Automatex Hub",
  description:
    "Point mensuel, ajustements continus, ligne directe Nolan à Flers. L'accompagnement Automatex est inclus dans chaque formule — pas en option. Mandataires et artisans Orne.",
  openGraph: {
    title: "Vous n'êtes jamais seul avec votre système — Automatex Hub",
    description:
      "Nolan vous appelle chaque mois. Il ajuste. Il répond. Basé à Flers, Orne. L'accompagnement est inclus — pas en option.",
    url: "https://automatex-hub.com/accompagnement",
  },
  alternates: { canonical: "https://automatex-hub.com/accompagnement" },
};

export default function AccompagnementPage() {
  return (
    <div className="bg-night px-gutter pb-16 pt-[88px] md:pt-[100px]">
      <div className="mx-auto max-w-content">
        <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold text-text">
          {ACCOMPANIMENT_PAGE.h1}
        </h1>
        <p className="mt-4 max-w-readable text-lg text-muted">{ACCOMPANIMENT_PAGE.sub}</p>

        <div className="mt-8 rounded-xl border border-primary/20 bg-accent-light p-6">
          <FounderTrustBlock />
        </div>

        <div className="mt-14 space-y-16">
          <section>
            <h2 className="font-heading text-2xl text-text">Chaque mois, Nolan vous appelle.</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.monthlyIntro}</p>
            <div className="mt-8">
              <AccompagnementPointMensuelDemo />
            </div>
            <ol className="mt-10 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible">
              {ACCOMPANIMENT_PAGE.timelineHorizontal.map((step) => (
                <li
                  key={step.month}
                  className="min-w-[10rem] flex-1 rounded-lg border border-border bg-bg-card p-4 text-sm"
                >
                  <span className="font-semibold text-text">{step.month}</span>
                  <p className="mt-2 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.sections[1].h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.sections[1].body}</p>
            <p className="mt-4 text-sm italic text-muted">
              Exemple (simulation) : un couvreur commence la rénovation énergétique — le template de
              devis est adapté en 48 h, sans surcoût.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.sections[2].h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_PAGE.sections[2].body}</p>
            <p className="mt-6 font-semibold text-text">
              <a href={`tel:${NAP.phoneE164}`} className="text-primary underline">
                {NAP.phoneDisplay}
              </a>{" "}
              — {NAP.founder}, {NAP.city}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">Nolan en action (simulation)</h2>
            <NolanLiveDemo />
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_CONTINUITY.h2}</h2>
            <p className="mt-4 max-w-readable text-muted">{ACCOMPANIMENT_CONTINUITY.intro}</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-muted md:text-base">
              {ACCOMPANIMENT_CONTINUITY.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-text">{ACCOMPANIMENT_PAGE.roi.h2}</h2>
            <p className="mt-4 max-w-readable leading-relaxed text-muted">
              {ACCOMPANIMENT_PAGE.roi.body}
            </p>
          </section>
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/immobilier#pricing"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-6 font-semibold text-text"
          >
            Voir les formules immobilier
          </Link>
          <Link
            href="/btp#pricing"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-border px-6 font-semibold text-text"
          >
            Voir les formules BTP
          </Link>
        </div>

        <AccompagnementContactForm />
      </div>
    </div>
  );
}
