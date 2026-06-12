import { PROBLEM_HEADING, PROBLEM_ITEMS } from "@/lib/constants";
import { SectionCta } from "@/components/ui/SectionCta";

export function Problem() {
  return (
    <section id="problem" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {PROBLEM_HEADING.h2}
        </h2>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-text">
          {PROBLEM_HEADING.answerFirst}
        </p>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-bg-card md:grid md:grid-cols-3 md:divide-x md:divide-border">
          {PROBLEM_ITEMS.map((item) => {
            return (
              <article
                key={item.title}
                data-cursor="card"
                className="relative border-b border-border p-6 last:border-b-0 md:border-b-0 md:p-8"
              >
                <h3 className="font-heading text-xl text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-faint md:text-[16px]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <SectionCta analyticsId="problem_cta" />
        </div>
      </div>
    </section>
  );
}
