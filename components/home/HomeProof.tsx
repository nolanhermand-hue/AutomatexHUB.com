import { HOME_PROOF } from "@/lib/home-copy";

export function HomeProof() {
  return (
    <section className="home-surface px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll fade rounded-xl border border-border bg-surface p-8 md:p-10">
          <p className="label-micro text-[var(--forest)]">{HOME_PROOF.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {HOME_PROOF.h2}
          </h2>
          <p className="mt-4 max-w-readable text-sm leading-relaxed text-muted md:text-base">
            {HOME_PROOF.body}
          </p>
        </div>
      </div>
    </section>
  );
}
