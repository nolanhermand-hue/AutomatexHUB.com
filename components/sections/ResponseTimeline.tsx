"use client";

const STEPS = [
  { time: "09:14", label: "Lead détecté", channel: "SeLoger" },
  { time: "09:15", label: "Relance envoyée", channel: "WhatsApp" },
  { time: "09:22", label: "Créneau proposé", channel: "Agenda" },
] as const;

function UiFragment({
  title,
  line,
  accent,
}: {
  title: string;
  line: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-[0.5px] border-border bg-bg-card/90 p-3 shadow-[0_8px_32px_rgb(0_0_0/0.25)] backdrop-blur-sm">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-faint">{title}</p>
      <p className="mt-1 text-sm text-text">{line}</p>
      {accent ? (
        <p className="mt-1 text-xs font-medium text-accent">{accent}</p>
      ) : null}
    </div>
  );
}

/** Timeline métier + fragments UI (Pipeline Continuity™). */
export function ResponseTimeline() {
  return (
    <section
      id="response-layer"
      className="border-y border-border bg-section px-gutter py-12 md:py-16"
      data-analytics-section="response_timeline"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent-dark">Chronologie terrain</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          Ce qui se passe pendant votre visite.
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
          Pas de promesse floue : une séquence horodatée, sur vos portails et votre messagerie.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-start">
          <ol className="relative space-y-0 border-l border-[0.5px] border-accent/50 pl-6">
            {STEPS.map((step, i) => (
              <li key={step.time} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[25px] top-1 flex h-3 w-3 rounded-full border border-accent bg-night ring-2 ring-accent/30"
                  aria-hidden
                />
                {i < STEPS.length - 1 ? (
                  <span
                    className="absolute -left-px top-4 h-[calc(100%-8px)] w-px bg-gradient-to-b from-accent/60 to-transparent"
                    aria-hidden
                  />
                ) : null}
                <time className="font-mono text-xs text-accent">{step.time}</time>
                <p className="mt-1 font-semibold text-text">{step.label}</p>
                <p className="text-sm text-muted">{step.channel}</p>
              </li>
            ))}
          </ol>

          <div className="space-y-3">
            <UiFragment
              title="WhatsApp Business"
              line="Bonjour, je suis en visite jusqu'à 11h. Je vous rappelle dès ma sortie — ou on cale un créneau ?"
              accent="Envoi automatique · ton validé par vous"
            />
            <UiFragment
              title="Boîte mail"
              line="Nouveau lead SeLoger — acquéreur 3 pièces, budget validé."
              accent="Notification immédiate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
