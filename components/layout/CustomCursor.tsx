"use client";

import { resolveCursorKind, type CursorKind } from "@/lib/cursorKinds";
import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useRef, useState } from "react";

const RING_LERP = 0.12;

function cursorLabel(kind: CursorKind): string | null {
  if (kind === "cta") return "20 min";
  if (kind === "founder") return "Fondateur";
  if (kind === "link") return "voir";
  return null;
}

function ringHalf(kind: CursorKind): number {
  switch (kind) {
    case "text":
      return 10;
    case "nav":
      return 12;
    case "link":
      return 14;
    case "card":
      return 24;
    case "cta":
      return 28;
    case "founder":
      return 32;
    case "slider":
      return 0;
    default:
      return 16;
  }
}

export function CustomCursor() {
  const reduced = useReducedMotionPreference();
  const [enabled, setEnabled] = useState(false);

  const kindRef = useRef<CursorKind>("default");
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const spin = useRef(0);
  const dotIntro = useRef(0);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const crossRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-custom");
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const next = resolveCursorKind(e.target);
      kindRef.current = next;
    };

    const tick = () => {
      const k = kindRef.current;
      ring.current.x += (pos.current.x - ring.current.x) * RING_LERP;
      ring.current.y += (pos.current.y - ring.current.y) * RING_LERP;

      if (k === "card") {
        spin.current += 0.4;
      } else {
        spin.current *= 0.88;
      }

      if (dotIntro.current < 1) {
        dotIntro.current = Math.min(1, dotIntro.current + 0.07);
      }

      const px = pos.current.x;
      const py = pos.current.y;
      const rx = ring.current.x;
      const ry = ring.current.y;

      const d = dotRef.current;
      const r = ringRef.current;
      const cr = crossRef.current;
      const lab = labelRef.current;

      const intro = dotIntro.current;

      if (cr) {
        const show = k === "slider";
        cr.style.opacity = show ? "1" : "0";
        cr.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${show ? 1 : 0.4})`;
      }

      if (d) {
        const hideDot = k === "cta" || k === "slider";
        const textMode = k === "text";
        const w = textMode ? 4 : 8;
        const h = textMode ? 4 : 8;
        d.style.width = `${w}px`;
        d.style.height = `${h}px`;
        d.style.mixBlendMode =
          k === "slider" ? "normal" : "difference";
        d.style.opacity = hideDot ? "0" : String(intro);
        d.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${hideDot ? 0 : intro})`;
      }

      if (r) {
        let size = 32;
        let bg = "rgb(15 110 86 / 0.06)";
        let shadow =
          "0 0 16px rgb(93 202 165 / 0.4), 0 0 32px rgb(29 158 117 / 0.22)";
        let opacity = 1;

        switch (k) {
          case "text":
            size = 20;
            bg = "transparent";
            break;
          case "nav":
            size = 24;
            bg = "rgb(93 202 165 / 0.1)";
            break;
          case "link":
            size = 28;
            bg = "rgb(93 202 165 / 0.08)";
            break;
          case "card":
            size = 48;
            bg = "rgb(15 110 86 / 0.06)";
            shadow = "0 0 22px rgb(93 202 165 / 0.42)";
            break;
          case "cta":
            size = 56;
            bg = "rgb(29 158 117 / 0.15)";
            shadow = "0 0 26px rgb(93 202 165 / 0.48)";
            break;
          case "founder":
            size = 64;
            bg = "rgb(29 158 117 / 0.12)";
            shadow = "0 0 28px rgb(93 202 165 / 0.42)";
            break;
          case "slider":
            opacity = 0;
            break;
          default:
            size = 32;
        }

        r.style.width = `${size}px`;
        r.style.height = `${size}px`;
        r.style.border = "1.5px solid rgb(93 202 165 / 0.95)";
        r.style.backgroundColor = bg;
        r.style.boxShadow = k === "slider" ? "none" : shadow;
        r.style.opacity = String(opacity);
        const rot = k === "card" ? spin.current : 0;
        r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
      }

      if (lab) {
        const text = cursorLabel(k);
        if (text) {
          lab.textContent = text;
          lab.style.opacity = "1";
          const yOff = ringHalf(k) + 14;
          lab.style.transform = `translate3d(${rx}px, ${ry + yOff}px, 0) translate(-50%, 0)`;
        } else {
          lab.style.opacity = "0";
        }
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10060] hidden md:block"
      aria-hidden
    >
      <div
        ref={crossRef}
        className="fixed top-0 left-0 h-[14px] w-[14px] will-change-transform opacity-0"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cta shadow-[0_0_6px_rgb(93_202_165/0.9)]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cta shadow-[0_0_6px_rgb(93_202_165/0.9)]" />
      </div>

      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border-[1.5px] border-accent will-change-transform"
      />

      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#1D9E75] will-change-transform"
      />

      <div
        ref={labelRef}
        className="pointer-events-none fixed top-0 left-0 font-body text-[10px] font-semibold uppercase tracking-wide text-accent opacity-0"
      />
    </div>
  );
}
