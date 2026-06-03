import { HOME_PROBLEM } from "@/lib/home-copy";

export function HomeProblem() {
  return (
    <section className="home-surface px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-[var(--terracotta)]">{HOME_PROBLEM.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {HOME_PROBLEM.h2}
          </h2>
          <p className="mt-4 max-w-readable text-sm leading-relaxed text-muted md:text-base">
            {HOME_PROBLEM.intro}
          </p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {HOME_PROBLEM.stats.map((stat) => (
            <li
              key={stat.label}
              className="animate-on-scroll fade rounded-xl border border-border bg-surface p-6"
            >
              <p className="font-heading text-3xl font-bold text-[var(--terracotta)]">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
              <p className="mt-3 text-xs text-faint">{stat.source}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
