import { ABOUT_FOUNDER, BETA_PHASE_COPY } from "@/lib/constants";

export function AboutFounder() {
  return (
    <section
      id="about"
      className="border-t border-border bg-bg-card px-gutter py-12 md:py-16"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-faint">{ABOUT_FOUNDER.eyebrow}</p>
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
                <dt className="order-2 mt-1 text-xs font-semibold uppercase tracking-wide text-faint">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          id="beta"
          className="mt-14 rounded-xl border border-border bg-night p-8 md:p-10"
        >
          <h3 className="font-heading text-2xl text-text md:text-3xl">
            {BETA_PHASE_COPY.title}
          </h3>
          <p className="mt-4 max-w-readable text-base leading-relaxed text-muted md:text-lg">
            {BETA_PHASE_COPY.body}
          </p>
          <p className="mt-6 badge badge-orange">
            {BETA_PHASE_COPY.badge}
          </p>
        </div>
      </div>
    </section>
  );
}
