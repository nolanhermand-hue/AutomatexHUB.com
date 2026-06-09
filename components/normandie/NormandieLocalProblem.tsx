import type { NormandieVillePage } from "@/lib/villes-normandie";

export function NormandieLocalProblem({ ville }: { ville: NormandieVillePage }) {
  return (
    <section className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-[var(--forest)]">
            {ville.department} ({ville.departmentCode}) · {ville.populationApprox} hab.
          </p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {ville.problemH2}
          </h2>
          <p className="mt-4 max-w-readable text-sm leading-relaxed text-muted md:text-base">
            {ville.problemIntro}
          </p>
        </div>
        <ul className="mt-8 space-y-4">
          {ville.problemPoints.map((point) => (
            <li
              key={point.slice(0, 40)}
              className="animate-on-scroll fade border-l-4 border-[var(--terracotta)]/50 bg-surface py-3 pl-5 pr-4 text-sm leading-relaxed text-muted md:text-base"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
