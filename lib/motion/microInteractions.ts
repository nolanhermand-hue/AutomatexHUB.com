/** Micro-interactions CTA — GSAP lazy, desktop only. */
export async function initMicroInteractions() {
  if (typeof window === "undefined") return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return () => {};

  const gsap = (await import("gsap")).default;
  const buttons = document.querySelectorAll<HTMLElement>(
    'a.bg-cta, button.bg-cta, [data-cursor="cta"]',
  );

  const cleanups: Array<() => void> = [];

  buttons.forEach((btn) => {
    const enter = () => {
      gsap.to(btn, {
        scale: 1.03,
        duration: 0.22,
        ease: "expo.out",
        overwrite: true,
      });
    };
    const leave = () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "expo.out", overwrite: true });
    };
    const click = () => {
      gsap.timeline()
        .to(btn, { scale: 0.97, duration: 0.1, ease: "power2.in" })
        .to(btn, { scale: 1, duration: 0.25, ease: "expo.out" });
    };
    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);
    btn.addEventListener("click", click);
    cleanups.push(() => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
      btn.removeEventListener("click", click);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}
