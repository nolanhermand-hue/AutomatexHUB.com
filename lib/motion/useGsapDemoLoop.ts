import { useEffect, useRef, type RefObject } from "react";
import type { gsap as GSAP } from "gsap";

type TimelineFactory = (
  gsap: typeof GSAP,
  root: HTMLElement,
) => ReturnType<typeof GSAP.timeline>;

/** Boucle GSAP lazy — remplace les keyframes CSS pour les démos narratives. */
export function useGsapDemoLoop(
  rootRef: RefObject<HTMLElement | null>,
  active: boolean,
  build: TimelineFactory,
) {
  const tlRef = useRef<ReturnType<typeof GSAP.timeline> | null>(null);

  useEffect(() => {
    if (!active || !rootRef.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let killed = false;

    void (async () => {
      const mod = await import("gsap");
      const gsap = mod.default;
      if (killed || !rootRef.current) return;

      tlRef.current?.kill();
      const tl = build(gsap, rootRef.current);
      tlRef.current = tl;

      const onVis = () => {
        if (document.hidden) tl.pause();
        else tl.resume();
      };
      document.addEventListener("visibilitychange", onVis);

      return () => {
        document.removeEventListener("visibilitychange", onVis);
      };
    })();

    return () => {
      killed = true;
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [active, build, rootRef]);
}

/** Timeline standard : beats séquentiels avec expo out/in. */
export function sequentialDemoBeats(
  gsap: typeof GSAP,
  root: HTMLElement,
  opts: { repeatDelay?: number; hold?: number } = {},
) {
  const beats = root.querySelectorAll<HTMLElement>(".demo-beat");
  const hold = opts.hold ?? 1.35;
  const tl = gsap.timeline({ repeat: -1, repeatDelay: opts.repeatDelay ?? 0.4 });

  beats.forEach((beat, index) => {
    gsap.set(beat, { opacity: 0, y: 14, scale: 0.97 });
    tl.to(
      beat,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "expo.out",
      },
      index === 0 ? 0 : "+=0.05",
    ).to(
      beat,
      {
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: "expo.in",
      },
      `+=${hold}`,
    );
  });

  return tl;
}
