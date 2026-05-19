"use client";

import {
  AUTOMATIONS,
  type AutomationCategoryId,
  type AutomationIconId,
  getCategoryById,
} from "@/lib/automations";
import { AUTOMATIONS_SECTION } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotionPreference } from "@/providers/AppProviders";
import { cn } from "@/lib/cn";

function AutomationGlyph({ id }: { id: AutomationIconId }) {
  const common = "h-6 w-6 text-accent";
  const paths: Record<AutomationIconId, ReactNode> = {
    bolt: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M13 2L4 14h7l-2 8 9-14h-7l2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M6 10a6 6 0 1 1 12 0 5 5 0 0 0 5 5H1a5 5 0 0 0 5-5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 20a3 3 0 006 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    folder: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M3 7h6l2 2h10v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 21v-1a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M4 19h16M6 16l4-5 3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    mic: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 19v-3M8 12v2a4 4 0 008 0v-2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path d="M12 3l1.5 5h5L14 12l1.5 5L12 15.5 8.5 17 10 12 5.5 8h5L12 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  };
  return <span className="inline-flex shrink-0">{paths[id]}</span>;
}

export function AutomationCard({
  categoryId,
  title,
  description,
  iconId,
  compact,
}: {
  categoryId: AutomationCategoryId;
  title: string;
  description: string;
  iconId: AutomationIconId;
  compact?: boolean;
}) {
  const cat = getCategoryById(categoryId);
  return (
    <article
      className={cn(
        "shrink-0 rounded-2xl border border-primary/40 bg-section p-4 shadow-[0_0_24px_rgba(15,110,86,0.12)] transition hover:border-cta hover:shadow-[0_0_28px_rgba(29,158,117,0.25)]",
        compact ? "w-[240px] snap-start min-h-[152px] md:w-[260px] md:min-h-[160px]" : "w-[260px] min-h-[160px]",
      )}
      data-cursor="card"
    >
      <div className="flex items-start gap-3">
        <AutomationGlyph id={iconId} />
        <div className="min-w-0 flex-1">
          {cat ? (
            <span
              className={cn(
                "inline-block rounded-sm border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                cat.badgeClass,
              )}
            >
              {cat.label}
            </span>
          ) : null}
          <h3 className="mt-2 font-body text-[15px] font-semibold leading-snug text-text">
            {title}
          </h3>
          <p className="mt-1 font-body text-[13px] leading-snug text-muted">{description}</p>
        </div>
      </div>
    </article>
  );
}

function DesktopPinnedScroll({ children }: { children: ReactNode }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPreference();

  useGSAP(
    () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track || reduced) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const getMax = () => Math.max(track.scrollWidth - window.innerWidth + 200, 1);
        gsap.to(track, {
          x: () => -getMax(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${getMax()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: pinRef, dependencies: [reduced] },
  );

  return (
    <div ref={pinRef} className="relative hidden min-h-screen md:block">
      <div
        ref={trackRef}
        className="flex min-h-screen w-max items-center gap-4 px-[min(5rem,8vw)]"
      >
        {children}
      </div>
    </div>
  );
}

function MobileCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = AUTOMATIONS.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / total;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.max(0, Math.min(total - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-gutter pb-6 pt-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {AUTOMATIONS.map((a) => (
          <AutomationCard
            key={a.id}
            categoryId={a.categoryId}
            iconId={a.iconId}
            title={a.title}
            description={a.description}
            compact
          />
        ))}
      </div>
      {/* G21 — dots indicator */}
      <div
        className="flex items-center justify-center gap-1.5 pb-8"
        role="tablist"
        aria-label="Position dans le carousel"
      >
        {AUTOMATIONS.map((a, i) => (
          <span
            key={a.id}
            role="tab"
            aria-selected={i === activeIdx}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIdx ? "w-5 bg-cta" : "w-1.5 bg-white/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Automations() {
  const cards = AUTOMATIONS.map((a) => (
    <AutomationCard
      key={a.id}
      categoryId={a.categoryId}
      iconId={a.iconId}
      title={a.title}
      description={a.description}
    />
  ));

  return (
    <section id="automations" className="border-y border-primary/25 bg-night">
      <div className="mx-auto max-w-content px-gutter py-14 md:py-20">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-text">
          {AUTOMATIONS_SECTION.h2}
        </h2>
        <p className="mt-4 max-w-readable font-body text-base text-muted md:text-lg">
          {AUTOMATIONS_SECTION.subtitle}
        </p>
      </div>

      <DesktopPinnedScroll>{cards}</DesktopPinnedScroll>

      <MobileCarousel />

      <p className="mx-auto max-w-content px-gutter pb-14 text-sm text-muted md:text-[15px]">
        {AUTOMATIONS_SECTION.footnote}
      </p>
    </section>
  );
}
