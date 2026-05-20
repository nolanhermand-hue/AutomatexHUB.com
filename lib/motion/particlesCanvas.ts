/** Canvas 2D — fallback particules (low/medium). ~0.3 ms/frame. */
export class ParticlesCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
  }> = [];
  private mouse = { x: 0, y: 0 };
  private raf: number | null = null;
  private running = false;
  private onResize: () => void;
  private onMouse: (e: MouseEvent) => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) throw new Error("Canvas 2D unavailable");
    this.ctx = ctx;
    this.onResize = () => this.resize();
    this.onMouse = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };
  }

  init(count = 1200) {
    this.resize();
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.45 - 0.15,
      size: Math.random() * 1.4 + 0.4,
      opacity: Math.random() * 0.35 + 0.08,
      color: Math.random() > 0.88 ? "#FF8200" : "#0f6e56",
    }));
    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouse, { passive: true });
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.tick();
  }

  pause() {
    this.running = false;
    if (this.raf != null) cancelAnimationFrame(this.raf);
    this.raf = null;
  }

  private tick = () => {
    if (!this.running) return;
    this.raf = requestAnimationFrame(this.tick);
    const { ctx, canvas } = this;
    ctx.fillStyle = "rgba(250, 249, 246, 0.12)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        p.vx += (dx / dist) * 0.008;
        p.vy += (dy / dist) * 0.008;
      }
      p.vx *= 0.99;
      p.vy *= 0.99;
      if (p.y < -8) {
        p.y = canvas.height + 8;
        p.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.floor(rect.width * Math.min(devicePixelRatio, 1.5));
    this.canvas.height = Math.floor(rect.height * Math.min(devicePixelRatio, 1.5));
  }

  destroy() {
    this.pause();
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouse);
    this.particles = [];
  }
}
