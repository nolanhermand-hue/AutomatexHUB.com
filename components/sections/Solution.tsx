"use client";

import {
  BOOKING_CTA_LABEL,
  BENEFITS_ITEMS,
  SOLUTION_BADGES,
  SOLUTION_HEADING,
  SOLUTION_STEPS,
} from "@/lib/constants";
import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Fragment, useRef } from "react";

export function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const lineWrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPreference();

  useGSAP(
    () => {
      const path = pathRef.current;
      const wrap = lineWrapRef.current;
      if (!path || !wrap || reduced) {
        if (path && reduced) path.style.strokeDashoffset = "0";
        return;
      }
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        path.style.strokeDashoffset = "0";
        return;
      }
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 75%",
          end: "bottom 35%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="border-y border-border bg-night px-gutter py-12 md:py-16"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">
          {SOLUTION_HEADING.h2}
        </h2>

        <div ref={lineWrapRef} className="relative mt-10 md:mt-12">
          <div
            className="pointer-events-none absolute bottom-0 left-[15px] top-2 hidden w-px md:block"
            aria-hidden
          >
            <svg
              className="h-full w-8 overflow-visible"
              viewBox="0 0 8 400"
              preserveAspectRatio="none"
              width="32"
              height="100%"
            >
              <path
                ref={pathRef}
                d="M 4 0 L 4 400"
                fill="none"
                stroke="var(--color-cta)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="space-y-10 md:space-y-14 md:pl-20">
            {SOLUTION_STEPS.map((step) => (
              <div
                key={step.kicker}
                className="md:grid md:grid-cols-[80px_1fr] md:items-start md:gap-4"
              >
                <span className="font-heading text-4xl text-accent md:text-5xl">
                  {step.kicker}
                </span>
                <div className="mt-2 border-l-2 border-cta/45 pl-5 md:mt-0 md:border-l-0 md:pl-0">
                  <h3 className="font-heading text-2xl text-text">{step.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted md:text-lg">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_ITEMS.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-bg-card p-5 backdrop-blur-sm"
            >
              <p className="font-heading text-xl font-bold text-cta">{b.stat}</p>
              <h4 className="mt-1 text-sm font-semibold text-text">{b.title}</h4>
              <p className="mt-2 text-xs leading-[1.6] text-muted">{b.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cta/20 bg-cta/[0.06] px-5 py-4">
          <p className="text-sm font-semibold text-cta md:text-base">
            Vous restez maître de tout.
          </p>
          <p className="mt-1 text-sm text-muted">
            Automatex répond, vous validez. Votre relation client et vos décisions
            commerciales restent entre vos mains.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-primary/35 pt-6 text-sm text-muted md:text-base">
          {SOLUTION_BADGES.map((b, i) => (
            <Fragment key={b}>
              {i > 0 ? (
                <span className="text-primary/35" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="font-semibold text-text">{b}</span>
            </Fragment>
          ))}
        </div>

        <a
          href="#contact"
          data-analytics-cta="solution_micro"
          className="mt-8 inline-flex min-h-[48px] items-center gap-1 text-sm font-semibold text-accent-dark underline underline-offset-4 transition-colors hover:text-primary"
        >
          {BOOKING_CTA_LABEL} <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
