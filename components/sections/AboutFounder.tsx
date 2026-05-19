import {
  ABOUT_FOUNDER,
  SOCIAL_PROOF_DISCLAIMER,
  SOCIAL_PROOF_ITEMS,
} from "@/lib/constants";

export function AboutFounder() {
  return (
    <section
      id="about"
      className="border-t border-primary/35 bg-section px-gutter py-12 md:py-16"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">{ABOUT_FOUNDER.eyebrow}</p>
        <h2 className="mt-3 font-heading text-3xl text-text md:text-4xl">
          {ABOUT_FOUNDER.h2}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">
          <p className="max-w-readable text-base leading-relaxed text-muted md:text-lg">
            {ABOUT_FOUNDER.body}
          </p>
          <dl className="flex shrink-0 flex-row gap-6 md:flex-col md:gap-8">
            {ABOUT_FOUNDER.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <dt className="order-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-3xl font-bold text-cta md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-14 border-t border-white/[0.06] pt-10">
          <p className="label-micro mb-2 text-center text-accent md:text-left">
            Ils témoignent
          </p>
          <p className="mb-6 text-center text-xs text-muted/80 md:text-left">
            {SOCIAL_PROOF_DISCLAIMER}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {SOCIAL_PROOF_ITEMS.map((item) => (
              <figure
                key={item.author}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <blockquote className="text-sm leading-relaxed text-text md:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-muted">
                  <span className="font-semibold text-text">{item.author}</span>
                  {" · "}
                  {item.network}
                  {" · "}
                  {item.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
