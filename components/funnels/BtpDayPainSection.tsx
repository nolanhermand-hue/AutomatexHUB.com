import { BTP_DAY_PAIN } from "@/lib/btp-copy";

export function BtpDayPainSection() {
  return (
    <section className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_DAY_PAIN.h2}</h2>
        <ol className="demo-liquid-reveal mt-8 space-y-4 border-l-2 border-primary/30 pl-6">
          {BTP_DAY_PAIN.steps.map((s) => (
            <li key={s.time}>
              <time className="font-mono text-sm font-semibold text-primary">{s.time}</time>
              <p className="mt-1 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 font-heading text-2xl font-semibold text-text">{BTP_DAY_PAIN.stat}</p>
        <p className="mt-2 text-xs text-muted">{BTP_DAY_PAIN.source}</p>
      </div>
    </section>
  );
}
