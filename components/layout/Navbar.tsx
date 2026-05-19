"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { NAV_LINKS, NAP } from "@/lib/constants";
import { MobileThemeList, NavbarThemeSwitcher } from "@/components/layout/ThemeSwitcher";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const SECTION_IDS = ["solution", "pricing", "faq", "contact"] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    SECTION_IDS[0] ?? "problem",
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target?.id;
        if (id) setActiveSection(id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    trackCtaClicked(`navbar_${href}`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-[900] h-[60px] transition-all duration-500 lg:h-[72px]",
        isScrolled
          ? "border-b border-white/[0.06] bg-night/80 shadow-[0_1px_0_rgb(255_255_255/0.04)] backdrop-blur-2xl backdrop-saturate-[180%]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between gap-4 px-gutter">
        <Link
          href="/#hero"
          className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-text"
          data-cursor="link"
          onClick={() => handleNavClick("#hero")}
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cta text-sm font-bold text-white shadow-[0_2px_12px_rgb(29_158_117/0.45)]"
            aria-hidden
          >
            A
          </span>
          <span className="font-heading text-xl">
            <span className="text-text">Auto</span>
            <span className="text-primary">tex</span>
          </span>
        </Link>

        {/* Desktop nav — lg+ only (≥ 1024px) */}
        <nav
          className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="nav"
                onClick={() => trackCtaClicked(`nav_${id}`)}
                className={cn(
                  "group/nav relative whitespace-nowrap overflow-hidden rounded px-1.5 py-1 text-sm font-semibold transition-colors duration-200",
                  active ? "text-primary" : "text-muted hover:text-text",
                )}
              >
                <span
                  className="absolute inset-x-0 bottom-0 top-0 origin-bottom scale-y-0 rounded bg-[rgb(29_158_117/0.1)] transition-transform duration-200 ease-out group-hover/nav:scale-y-100"
                  aria-hidden
                />
                <span className="relative z-[1]">{link.label}</span>
                <span
                  className={cn(
                    "absolute inset-x-1 -bottom-0.5 z-[2] h-0.5 origin-left rounded-full bg-cta transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <NavbarThemeSwitcher />
          <a
            href="#contact"
            data-cursor="cta"
            onClick={() => trackCtaClicked("navbar_contact")}
            className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full bg-cta px-6 py-3 text-[15px] font-semibold text-[var(--color-cta-fg,#fff)] shadow-[0_0_0_0.5px_rgb(255_255_255/0.1),0_4px_20px_rgb(0_0_0/0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-primary hover:shadow-[0_4px_28px_rgb(0_0_0/0.4)] active:scale-[0.98]"
          >
            Réserver 20 min
          </a>
        </div>

        {/* Hamburger — affiché jusqu'à lg (< 1024px = mobile + tablette) */}
        <button
          type="button"
          className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-text backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile/tablet menu drawer */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-b border-white/[0.06] bg-night/90 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-gutter py-4">
              {/* F8 — Téléphone fondateur cliquable en première position du menu mobile */}
              <a
                href={`tel:${NAP.phoneE164}`}
                data-analytics-cta="mobile_menu_phone"
                onClick={() => handleNavClick("tel")}
                className="mb-2 inline-flex min-h-[52px] items-center justify-between gap-3 rounded-xl border border-cta/30 bg-cta/10 px-4 py-3 text-base font-semibold text-text"
              >
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden>📞</span> Appeler Nolan
                </span>
                <span className="text-accent">{NAP.phoneDisplay}</span>
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3.5 text-base font-semibold text-text active:bg-white/[0.07]"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-cta px-4 py-3 text-base font-semibold text-[var(--color-cta-fg,#fff)] shadow-[0_4px_20px_rgb(0_0_0/0.3)] active:scale-[0.98]"
              >
                Réserver 20 min
              </a>
              <div className="border-t border-white/[0.06] pt-1">
                <MobileThemeList onSelect={() => setIsMenuOpen(false)} />
              </div>
              <p className="text-center text-sm text-muted">
                {NAP.founder} · {NAP.city} · {NAP.phoneDisplay}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
