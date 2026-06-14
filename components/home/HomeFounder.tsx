import Image from "next/image";
import { FounderAvatar } from "@/components/ui/FounderAvatar";
import { LinkedInLink } from "@/components/ui/LinkedInLink";
import { HOME_FOUNDER } from "@/lib/home-copy";
import { NAP } from "@/lib/constants";

export function HomeFounder() {
  return (
    <section className="relative overflow-hidden px-gutter py-16 md:py-20">
      <div
        className="pointer-events-none absolute -right-8 top-8 opacity-[0.07] md:right-12 md:top-12"
        aria-hidden="true"
      >
        <Image
          src="/logo-mono.svg"
          alt=""
          width={200}
          height={200}
          className="h-40 w-40 md:h-52 md:w-52"
        />
      </div>
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-muted">{HOME_FOUNDER.eyebrow}</p>
          <h2 className="mt-2 max-w-2xl font-heading text-2xl font-bold text-text md:text-3xl">
            {HOME_FOUNDER.h2}
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-text md:text-base">
            {HOME_FOUNDER.storyLead}
          </p>
        </div>
        <div className="animate-on-scroll fade mt-10 flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="shrink-0">
            <FounderAvatar size={160} priority={false} />
          </div>
          <div className="min-w-0 flex-1 space-y-8">
            <p className="text-sm leading-relaxed text-muted md:text-base">{HOME_FOUNDER.bio}</p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {HOME_FOUNDER.painSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <span className="font-mono text-[11px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-text">{step.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
            <blockquote className="border-l-4 border-[var(--terracotta)] bg-surface p-6 text-base leading-relaxed text-text">
              « {HOME_FOUNDER.quote} »
              <footer className="mt-4 text-sm font-semibold text-muted">
                — {NAP.founder}, {NAP.role}
              </footer>
            </blockquote>
            <LinkedInLink size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
