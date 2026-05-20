import Link from "next/link";

type Pillar = { title: string; body: string };

type AccompanimentPillarsProps = {
  h2: string;
  pillars: readonly Pillar[];
  linkHref?: string;
  linkLabel?: string;
  className?: string;
};

/** 3 colonnes accompagnement Nolan — hub, immobilier, BTP. */
export function AccompanimentPillars({
  h2,
  pillars,
  linkHref = "/accompagnement",
  linkLabel = "Tout sur l'accompagnement",
  className = "bg-bg-card",
}: AccompanimentPillarsProps) {
  return (
    <section className={`px-gutter py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">{h2}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border-2 border-primary/25 bg-night p-6 shadow-sm"
            >
              <h3 className="font-semibold text-text">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
        {linkHref ? (
          <p className="mt-8">
            <Link href={linkHref} className="font-semibold text-primary underline">
              {linkLabel} →
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
