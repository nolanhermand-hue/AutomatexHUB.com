"use client";

const STEPS = [
  { time: "09:14", label: "Lead détecté", channel: "SeLoger" },
  { time: "09:15", label: "Relance envoyée", channel: "WhatsApp" },
  { time: "09:22", label: "Créneau proposé", channel: "Agenda" },
] as const;

function UiFragment({ title, line }: { title: string; line: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">{title}</p>
      <p className="mt-1 text-sm text-text">{line}</p>
    </div>
  );
}

/** Timeline métier + fragments UI. */
export function ResponseTimeline() {
  return (
    <section
      id="response-layer"
      className="border-y border-border bg-bg-card px-gutter py-12 md:py-16"
      data-analytics-section="response_timeline"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-faint">Chronologie terrain</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          Ce qui se passe pendant votre visite.
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
          Pas de promesse floue : une séquence horodatée, sur vos portails et votre messagerie.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-start">
          <ol className="relative space-y-0 border-l border-border pl-6">
            {STEPS.map((step) => (
              <li key={step.time} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[25px] top-1 flex h-3 w-3 rounded-full border border-border bg-bg-card"
                  aria-hidden
                />
                <time className="font-mono text-xs text-faint">{step.time}</time>
                <p className="mt-1 font-semibold text-text">{step.label}</p>
                <p className="text-sm text-muted">{step.channel}</p>
              </li>
            ))}
          </ol>

          <div className="space-y-3">
            <UiFragment
              title="WhatsApp Business"
              line="Bonjour, je suis en visite jusqu'à 11h. Je vous rappelle dès ma sortie — ou on cale un créneau ?"
            />
            <UiFragment
              title="Boîte mail"
              line="Nouveau lead SeLoger — acquéreur 3 pièces, budget validé."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
