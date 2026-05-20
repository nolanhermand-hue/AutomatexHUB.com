import { AccompagnementPointMensuelDemo } from "@/components/demo/AccompagnementPointMensuelDemo";
import { ACCOMPANIMENT_PAGE } from "@/lib/btp-copy";
import { BOOKING_CTA_LABEL, NAP } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompagnement humain · Flers",
  description:
    "Point mensuel, ajustements en continu, ligne directe Nolan. L'accompagnement Automatex Hub est inclus dans chaque formule — mandataires et artisans BTP en Orne.",
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
          <Link
            href="/btp#contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-cta px-8 font-semibold text-cta-fg"
          >
            {BOOKING_CTA_LABEL}
          </Link>
        </div>
      </div>
    </div>
  );
}
