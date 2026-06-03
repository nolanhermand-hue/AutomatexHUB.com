import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { LinkedInLink } from "@/components/ui/LinkedInLink";
import { HOME_FOUNDER } from "@/lib/home-copy";
import { NAP } from "@/lib/constants";

export function HomeFounder() {
  return (
    <section className="px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-muted">{HOME_FOUNDER.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {HOME_FOUNDER.h2}
          </h2>
        </div>
        <div className="animate-on-scroll fade mt-10 flex flex-col gap-8 md:flex-row md:items-start">
          <FounderAvatar size={120} priority={false} />
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-relaxed text-muted md:text-base">{HOME_FOUNDER.bio}</p>
            <blockquote className="mt-6 border-l-4 border-[var(--terracotta)] bg-surface p-6 text-base leading-relaxed text-text">
              « {HOME_FOUNDER.quote} »
              <footer className="mt-4 text-sm font-semibold text-muted">
                — {NAP.founder}, {NAP.role}
              </footer>
            </blockquote>
            <div className="mt-4">
              <LinkedInLink size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
