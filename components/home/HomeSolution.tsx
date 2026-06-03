import { HOME_SOLUTION } from "@/lib/home-copy";

export function HomeSolution() {
  return (
    <section className="px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-muted">{HOME_SOLUTION.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {HOME_SOLUTION.h2}
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {HOME_SOLUTION.cards.map((card, index) => (
            <li
              key={card.id}
              className="glass-panel animate-on-scroll fade p-6 md:p-8"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-[var(--cream)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
