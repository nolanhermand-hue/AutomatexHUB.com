"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type ThemeId = "foret" | "confiance";

export const THEMES: {
  id: ThemeId;
  label: string;
  bg: string;
  cta: string;
  hint: string;
}[] = [
  { id: "foret", label: "Forêt", bg: "#04342C", cta: "#1D9E75", hint: "Teal signature" },
  {
    id: "confiance",
    label: "Confiance",
    bg: "#FAF8F4",
    cta: "#2D5F3F",
    hint: "Clair Normandie",
  },
];

const STORAGE_KEY = "ax-theme";

export function applyTheme(id: ThemeId) {
  if (id === "foret") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", id);
  }
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {}
}

export function useActiveTheme() {
  const [active, setActive] = useState<ThemeId>("foret");
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (stored && THEMES.some((t) => t.id === stored)) setActive(stored);
    } catch {}
  }, []);
  return { active, setActive };
}

export function NavbarThemeSwitcher() {
  const { active, setActive } = useActiveTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!(e.target as Element).closest("[data-theme-switcher]")) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const select = (id: ThemeId) => {
    setActive(id);
    applyTheme(id);
    setOpen(false);
  };

  const activeTheme = THEMES.find((t) => t.id === active)!;

  return (
    <div className="relative hidden lg:block" data-theme-switcher>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-2 text-sm font-semibold text-muted backdrop-blur-sm transition hover:text-text"
        data-cursor="link"
      >
        <span
          className="h-4 w-4 rounded-full ring-1 ring-white/20"
          style={{ background: activeTheme.bg }}
          aria-hidden
        />
        Thème
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 top-full z-[200] mt-2 w-56 rounded-2xl border border-white/[0.08] bg-night/95 p-2 shadow-xl backdrop-blur-xl"
            role="listbox"
          >
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                type="button"
                role="option"
                aria-selected={active === theme.id}
                onClick={() => select(theme.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition",
                  active === theme.id
                    ? "bg-white/[0.08] text-text"
                    : "text-muted hover:bg-white/[0.05] hover:text-text",
                )}
              >
                <span
                  className="h-6 w-6 shrink-0 rounded-lg ring-1 ring-white/15"
                  style={{ background: theme.bg }}
                  aria-hidden
                />
                <span>
                  <span className="font-semibold">{theme.label}</span>
                  <span className="mt-0.5 block text-[10px] text-muted">{theme.hint}</span>
                </span>
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function MobileThemeList({ onSelect }: { onSelect?: () => void } = {}) {
  const { active, setActive } = useActiveTheme();
  return (
    <div className="border-t border-white/[0.06] px-gutter py-4">
      <p className="label-micro mb-3 text-muted">Thème</p>
      <div className="flex gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => {
              setActive(theme.id);
              applyTheme(theme.id);
              onSelect?.();
            }}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-semibold",
              active === theme.id
                ? "border-cta/50 bg-cta/15 text-text"
                : "border-white/[0.08] text-muted",
            )}
          >
            <span
              className="h-4 w-4 rounded-full"
              style={{ background: theme.bg }}
              aria-hidden
            />
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ThemeSwitcher() {
  return null;
}
