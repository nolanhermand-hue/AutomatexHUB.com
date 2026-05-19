import { ProblemIcon } from "@/components/ui/ProblemIcon";
import { PROBLEM_HEADING, PROBLEM_ITEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section id="problem" className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {PROBLEM_HEADING.h2}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {PROBLEM_ITEMS.map((item, index) => {
            const n = String(index + 1).padStart(2, "0");
            return (
              <article
                key={item.title}
                data-cursor="card"
                className="relative overflow-hidden rounded-2xl border-l-4 border-l-cta bg-white/[0.03] p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.05),inset_0_0_0_1px_rgb(255_255_255/0.06),0_8px_24px_rgb(0_0_0/0.3)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 md:p-7"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-6 font-heading text-[7rem] font-bold leading-none text-primary/[0.07] tabular-nums"
                  aria-hidden
                >
                  {n}
                </span>
                <div className="relative">
                  <div className="relative mt-3 text-primary">
                    <ProblemIcon id={item.icon} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-[16px]">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
