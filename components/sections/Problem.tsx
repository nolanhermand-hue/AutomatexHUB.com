import { PROBLEM_HEADING, PROBLEM_ITEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section id="problem" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {PROBLEM_HEADING.h2}
        </h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-bg-card md:grid md:grid-cols-3 md:divide-x md:divide-border">
          {PROBLEM_ITEMS.map((item, index) => {
            const n = String(index + 1).padStart(2, "0");
            return (
              <article
                key={item.title}
                data-cursor="card"
                className="relative border-b border-border p-6 last:border-b-0 md:border-b-0 md:p-8"
              >
                <span
                  className="pointer-events-none font-heading text-5xl font-bold leading-none text-border tabular-nums md:text-6xl"
                  aria-hidden
                >
                  {n}
                </span>
                <h3 className="mt-4 font-heading text-xl text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-faint md:text-[16px]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
