import { HOME_HOW } from "@/lib/home-copy";

export function HomeHowItWorks() {
  return (
    <section className="home-surface px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="label-micro text-[var(--forest)]">{HOME_HOW.eyebrow}</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-text md:text-3xl">{HOME_HOW.h2}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {HOME_HOW.steps.map((step, index) => (
            <li
              key={step.title}
              className="animate-on-scroll fade rounded-xl border border-border bg-surface p-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Étape {index + 1} · {step.time}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
