"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { NAV_LINKS, NAP } from "@/lib/constants";
import { contactHref } from "@/lib/hub-nav";
import {
  AUTOMATIONS_MENU,
  type MegaDropdownKey,
  SOLUTIONS_MENU,
} from "@/lib/mega-nav-data";
import { AUTOMATIONS_CATALOG } from "@/lib/automations-catalog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["solution", "pricing", "faq", "contact"] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={cn("transition-transform duration-200", open && "rotate-180")}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function MegaNav() {
  const pathname = usePathname() ?? "/";
  const isFunnel =
    pathname.startsWith("/immobilier") ||
    pathname.startsWith("/btp") ||
    pathname.startsWith("/mandataires");
  const contactLink = contactHref(pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<MegaDropdownKey>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0] ?? "solution");

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isFunnel) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
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
  }, [isFunnel, pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const menuEl = menuRef.current;
    if (!menuEl) return;
    const focusable = menuEl.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleMouseEnter = (key: MegaDropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    trackCtaClicked(`navbar_${href}`);
  };

  const navBtn = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1.5 rounded-md px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
      active ? "bg-surface-2 text-primary" : "text-muted hover:bg-surface-2 hover:text-text",
    );

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 z-[900] h-[60px] border-b border-border bg-bg/95 py-2 backdrop-blur-md transition-shadow duration-200 lg:h-[72px] lg:py-2.5",
        isScrolled && "shadow-[0_8px_32px_rgb(8_13_26/0.55)]",
      )}
    >
      <div className="mx-auto flex min-h-[44px] max-w-content items-center justify-between gap-3 px-gutter lg:min-h-[48px]">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2"
          onClick={() => handleNavClick("/")}
          aria-label="Automatex — accueil"
        >
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-text">
            AUTOMATEX
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-faint sm:inline">
            Automation · France
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex" aria-label="Navigation principale">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={navBtn(activeDropdown === "solutions")}
              aria-expanded={activeDropdown === "solutions"}
              aria-haspopup="true"
              onClick={() =>
                setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")
              }
            >
              Solutions
              <ChevronIcon open={activeDropdown === "solutions"} />
            </button>
            {activeDropdown === "solutions" ? (
              <div
                className="absolute left-1/2 top-full z-[950] mt-1 w-[min(780px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/40"
                role="menu"
              >
                <div className="grid grid-cols-3 divide-x divide-border">
                  <div className="p-5">
                    <p className="label-micro mb-4 text-faint">Par métier</p>
                    <ul className="space-y-1">
                      {SOLUTIONS_MENU.parMetier.map((item) => (
                        <li key={item.label}>
                          {"disabled" in item && item.disabled ? (
                            <span className="flex cursor-not-allowed flex-col rounded-lg px-3 py-2.5 opacity-40">
                              <span className="text-sm font-medium text-text">{item.label}</span>
                              <span className="mt-0.5 text-xs text-muted">{item.desc}</span>
                            </span>
                          ) : (
                            <Link
                              href={item.href}
                              role="menuitem"
                              className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-section focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                              onClick={() => handleNavClick(item.href)}
                            >
                              <span className="text-sm font-medium text-text">{item.label}</span>
                              <span className="mt-0.5 text-xs text-muted">{item.desc}</span>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5">
                    <p className="label-micro mb-4 text-faint">Par besoin</p>
                    <ul className="space-y-0.5">
                      {SOLUTIONS_MENU.parBesoin.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-section hover:text-primary"
                            onClick={() => handleNavClick(item.href)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface-2/80 p-5">
                    <p className="label-micro mb-4 text-faint">À la une</p>
                    <ul className="space-y-4">
                      {SOLUTIONS_MENU.alaUne.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                            onClick={() => handleNavClick(item.href)}
                          >
                            <p className="text-sm font-bold text-text group-hover:text-primary">
                              <span aria-hidden className="mr-2">
                                {item.icon}
                              </span>
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 border-t border-border pt-4">
                      <Link
                        href="/automatisations"
                        className="text-xs font-semibold text-primary hover:underline"
                        onClick={() => handleNavClick("/automatisations")}
                      >
                        → Voir les {AUTOMATIONS_CATALOG.length} automatisations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("automatisations")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={navBtn(activeDropdown === "automatisations")}
              aria-expanded={activeDropdown === "automatisations"}
              aria-haspopup="true"
              onClick={() =>
                setActiveDropdown(activeDropdown === "automatisations" ? null : "automatisations")
              }
            >
              Automatisations
              <ChevronIcon open={activeDropdown === "automatisations"} />
            </button>
            {activeDropdown === "automatisations" ? (
              <div
                className="absolute left-1/2 top-full z-[950] mt-1 w-[480px] -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/40"
                role="menu"
              >
                <div className="grid grid-cols-2 divide-x divide-border p-2">
                  <div className="p-4">
                    <p className="label-micro mb-3 text-faint">Immobilier</p>
                    <ul className="space-y-0.5">
                      {AUTOMATIONS_MENU.immobilier.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className="block rounded-md px-2.5 py-1.5 text-sm text-text hover:bg-section hover:text-primary"
                            onClick={() => handleNavClick(item.href)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="pt-2">
                        <Link
                          href="/immobilier"
                          className="block px-2.5 py-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          → Voir la solution complète
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <p className="label-micro mb-3 text-faint">Artisans BTP</p>
                    <ul className="space-y-0.5">
                      {AUTOMATIONS_MENU.btp.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className="block rounded-md px-2.5 py-1.5 text-sm text-text hover:bg-section hover:text-primary"
                            onClick={() => handleNavClick(item.href)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="pt-2">
                        <Link
                          href="/btp"
                          className="block px-2.5 py-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          → Voir la solution complète
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/accompagnement"
            className={cn(navBtn(pathname === "/accompagnement"), "px-4")}
            onClick={() => trackCtaClicked("nav_/accompagnement")}
          >
            Accompagnement
          </Link>
          <Link
            href="/vos-donnees"
            className={cn(navBtn(pathname === "/vos-donnees"), "inline-flex items-center gap-1.5 px-4")}
            onClick={() => trackCtaClicked("nav_/vos-donnees")}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" aria-hidden>
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 118 0v3" strokeLinecap="round" />
            </svg>
            Vos données
          </Link>
          <Link
            href="/a-propos"
            className={cn(navBtn(pathname === "/a-propos"), "px-4")}
            onClick={() => trackCtaClicked("nav_/a-propos")}
          >
            À propos
          </Link>

          {isFunnel
            ? NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "hidden text-sm font-semibold xl:inline",
                      activeSection === id ? "text-primary" : "text-muted hover:text-text",
                    )}
                    onClick={() => trackCtaClicked(`nav_${id}`)}
                  >
                    {link.label}
                  </a>
                );
              })
            : null}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={`tel:${NAP.phoneE164}`}
            className="hidden text-sm text-muted hover:text-text xl:inline"
            aria-label={`Appeler ${NAP.founder}`}
          >
            {NAP.phoneDisplay}
          </a>
          <Link
            href={contactLink}
            data-cursor="cta"
            onClick={() => trackCtaClicked("navbar_contact")}
            className="btn-bracket hidden text-[11px] lg:inline-flex"
          >
            Réserver 20 min
          </Link>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="inline-flex h-12 w-12 min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={cn(
          "nav-mobile-menu border-b border-border bg-surface/98 backdrop-blur-xl lg:hidden",
          isMenuOpen && "open",
        )}
        role="dialog"
        aria-modal={isMenuOpen}
        aria-hidden={!isMenuOpen}
        aria-label="Menu navigation mobile"
      >
        <div className="nav-mobile-menu-inner">
          <div className="flex flex-col gap-1 px-gutter py-4">
              <p className="label-micro nav-mobile-item px-3 pt-2 text-faint">Par métier</p>
              {SOLUTIONS_MENU.parMetier
                .filter((i) => !("disabled" in i && i.disabled))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-mobile-item flex flex-col rounded-xl px-3 py-3 active:bg-section"
                    onClick={() => handleNavClick(item.href)}
                  >
                    <span className="font-semibold text-text">{item.label}</span>
                    <span className="mt-0.5 text-xs text-muted">{item.desc}</span>
                  </Link>
                ))}
              <div className="my-2 border-t border-border" />
              {[
                { label: "Catalogue automatisations", href: "/automatisations" },
                { label: "Accompagnement", href: "/accompagnement" },
                { label: "Vos données", href: "/vos-donnees" },
                { label: "À propos — Nolan", href: "/a-propos" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-mobile-item rounded-xl px-3 py-3.5 font-semibold text-text active:bg-section"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              ))}
              {isFunnel
                ? NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="nav-mobile-item rounded-xl px-3 py-3.5 text-base font-medium text-muted"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  ))
                : null}
              <Link
                href={contactLink}
                className="nav-mobile-item mt-3 inline-flex min-h-[52px] w-full items-center justify-center btn-bracket btn-bracket-primary"
                onClick={() => handleNavClick(contactLink)}
              >
                Nolan me rappelle sous 24 h
              </Link>
              <p className="nav-mobile-item text-center text-sm text-muted">
                {NAP.founder} · {NAP.city} · {NAP.phoneDisplay}
              </p>
            </div>
        </div>
      </div>
    </header>
  );
}
