/**
 * Démo 4 — Avant / Après (hub)
 * Bundle: ~30 KB gzippé (GSAP + ScrollTrigger, lazy)
 * Budget: ~0.3 ms/frame · transform/opacity only
 * Quality min: medium (low = état final CSS)
 */

export type Demo4TimelineHandle = {
  pause: () => void;
  resume: () => void;
  destroy: () => void;
  replay: () => void;
};

export async function initDemo4Timeline(
  container: HTMLElement,
  options?: { scrub?: boolean },
): Promise<Demo4TimelineHandle> {
  const gsap = (await import("gsap")).default;
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const avant = container.querySelector<HTMLElement>(".avant-col");
  const apres = container.querySelector<HTMLElement>(".apres-col");
  const divider = container.querySelector<HTMLElement>(".demo4-divider");
  if (!avant || !apres) {
    return { pause: () => {}, resume: () => {}, destroy: () => {}, replay: () => {} };
  }

  const avantItems = avant.querySelectorAll<HTMLElement>(".timeline-item");
  const apresItems = apres.querySelectorAll<HTMLElement>(".timeline-item");
  const avantIcons = avant.querySelectorAll<HTMLElement>(".icon-problem");
  const apresChecks = apres.querySelectorAll<HTMLElement>(".icon-success");
  const avantResult = avant.querySelector<HTMLElement>(".result-negative");
  const apresResult = apres.querySelector<HTMLElement>(".result-positive");

  gsap.set([...avantItems, ...apresItems], { opacity: 0, y: 24 });
  gsap.set(avantIcons, { scale: 0, rotation: -24 });
  gsap.set(apresChecks, { scale: 0, rotation: 36, opacity: 0 });
  if (avantResult) gsap.set(avantResult, { opacity: 0, scale: 0.92 });
  if (apresResult) gsap.set(apresResult, { opacity: 0, scale: 0.92 });

  const countNeg = { value: 0 };
  const countPos = { value: 0 };

  const tl = gsap.timeline({
    scrollTrigger: options?.scrub
      ? {
          trigger: container,
          start: "top 72%",
          end: "bottom 28%",
          scrub: 0.45,
        }
      : {
          trigger: container,
          start: "top 78%",
          toggleActions: "play none none none",
        },
  });

  tl.to(
    avantItems,
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.11,
      ease: "expo.out",
    },
    0,
  )
    .to(
      avantIcons,
      {
        scale: 1,
        rotation: 0,
        duration: 0.45,
        stagger: 0.12,
        ease: "back.out(2)",
      },
      0.15,
    )
    .to(
      divider,
      {
        opacity: 0.35,
        duration: 0.7,
        ease: "expo.out",
      },
      0.08,
    )
    .to(
      apresItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.11,
        ease: "expo.out",
      },
      0.28,
    )
    .to(
      apresChecks,
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.12,
        ease: "elastic.out(1, 0.45)",
      },
      0.42,
    );

  if (avantResult) {
    tl.to(
      countNeg,
      {
        value: 3500,
        duration: 1.1,
        ease: "power2.out",
        onUpdate: () => {
          avantResult.textContent = `−${Math.round(countNeg.value).toLocaleString("fr-FR")} €`;
        },
      },
      0.85,
    ).to(
      avantResult,
      { opacity: 1, scale: 1, duration: 0.35, ease: "expo.out" },
      0.85,
    );
  }

  if (apresResult) {
    tl.to(
      countPos,
      {
        value: 3500,
        duration: 1.1,
        ease: "power2.out",
        onUpdate: () => {
          apresResult.textContent = `+${Math.round(countPos.value).toLocaleString("fr-FR")} €`;
        },
      },
      1,
    )
      .to(
        apresResult,
        { opacity: 1, scale: 1, duration: 0.35, ease: "expo.out" },
        1,
      )
      .to(
        apresResult,
        {
          scale: 1.03,
          duration: 0.35,
          yoyo: true,
          repeat: 2,
          ease: "sine.inOut",
        },
        1.45,
      );
  }

  const st = ScrollTrigger.getAll().find((t) => t.trigger === container);

  return {
    pause: () => tl.pause(),
    resume: () => tl.resume(),
    destroy: () => {
      tl.kill();
      st?.kill();
    },
    replay: () => {
      tl.restart();
    },
  };
}

/** Mobile : animation courte d'une colonne visible. */
export async function initDemo4ColumnPulse(col: HTMLElement): Promise<() => void> {
  const gsap = (await import("gsap")).default;
  const items = col.querySelectorAll<HTMLElement>(".timeline-item");
  const tl = gsap.fromTo(
    items,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "expo.out" },
  );
  return () => tl.kill();
}
