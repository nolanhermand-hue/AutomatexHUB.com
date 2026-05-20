import { detectMotionQuality, type MotionQuality } from "@/lib/motion/quality";

type AnimHandle = { pause?: () => void; resume?: () => void; destroy?: () => void };

/** Orchestrateur motion — lazy IO, quality gate, visibility pause. */
export class MotionController {
  private quality: MotionQuality = "medium";
  private reduced = false;
  private observer: IntersectionObserver | null = null;
  private active = new Map<string, AnimHandle>();
  private started = false;

  init() {
    if (this.started || typeof window === "undefined") return;
    this.started = true;
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.quality = detectMotionQuality();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.pauseAll();
      else this.resumeAll();
    });

    if (this.reduced) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.motion;
          if (!id) return;
          if (!entry.isIntersecting) {
            this.active.get(id)?.pause?.();
          } else {
            this.active.get(id)?.resume?.();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-motion]").forEach((el) => {
      this.observer?.observe(el);
    });
  }

  register(id: string, handle: AnimHandle) {
    this.active.set(id, handle);
  }

  unregister(id: string) {
    this.active.get(id)?.destroy?.();
    this.active.delete(id);
  }

  getQuality() {
    return this.quality;
  }

  isReduced() {
    return this.reduced;
  }

  private pauseAll() {
    this.active.forEach((h) => h.pause?.());
  }

  private resumeAll() {
    this.active.forEach((h) => h.resume?.());
  }

  destroy() {
    this.active.forEach((h) => h.destroy?.());
    this.active.clear();
    this.observer?.disconnect();
    this.started = false;
  }
}

let singleton: MotionController | null = null;

export function getMotionController() {
  if (!singleton) singleton = new MotionController();
  return singleton;
}
