import { LiveDemoBlock } from "@/components/demo/LiveDemoBlock";
import { BTP_AUTOMATIONS } from "@/lib/btp-copy";

export function BtpSolutionSection() {
  return (
    <section id="solution" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_AUTOMATIONS.h2}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {BTP_AUTOMATIONS.items.map((item) => (
            <article key={item.id} className="rounded-xl border border-border p-6">
              <h3 className="font-heading text-xl text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 space-y-8">
          <LiveDemoBlock variant="btp-appel" ctaHref="/rendez-vous" />
          <LiveDemoBlock variant="btp-devis" ctaHref="/rendez-vous" />
        </div>
      </div>
    </section>
  );
}
