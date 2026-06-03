import {
  HOME_TECH_HUB,
  HOME_TECH_INNER,
  HOME_TECH_LOGOS,
  HOME_TECH_OUTER,
  type HomeTechLogo,
} from "@/lib/home-tech-logos";

/** Larger canvas → more arc length per node in a fixed 360px column. */
const VB = 520;
const CX = VB / 2;
const CY = VB / 2;
const INNER_R = 118;
const OUTER_R = 232;

type PlacedNode = HomeTechLogo & { x: number; y: number };

function ringPositions(count: number, radius: number, phaseDeg = -90): { x: number; y: number }[] {
  return Array.from({ length: count }, (_, i) => {
    const deg = phaseDeg + (360 / count) * i;
    const rad = (deg * Math.PI) / 180;
    return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
  });
}

function placeRing(logos: HomeTechLogo[], radius: number, phaseDeg: number): PlacedNode[] {
  const coords = ringPositions(logos.length, radius, phaseDeg);
  return logos.map((logo, i) => ({ ...logo, ...coords[i] }));
}

const INNER_NODES = placeRing([...HOME_TECH_INNER], INNER_R, -90);
const OUTER_NODES = placeRing([...HOME_TECH_OUTER], OUTER_R, -67.5);
const SPOKES = [...INNER_NODES, ...OUTER_NODES];

const HUB = { ...HOME_TECH_HUB, x: CX, y: CY };

const ARIA_LABEL = `Réseau d'intégration : ${HOME_TECH_HUB.name} au centre, relié à ${SPOKES.map((n) => n.name).join(", ")}.`;

function pct(n: number) {
  return `${(n / VB) * 100}%`;
}

const SPOKE_LOGO_CLASS =
  "max-h-6 max-w-6 object-contain opacity-95 sm:max-h-7 sm:max-w-7";
const HUB_LOGO_CLASS =
  "max-h-8 max-w-8 object-contain sm:max-h-9 sm:max-w-9";

function LogoTile({
  logo,
  variant,
}: {
  logo: HomeTechLogo;
  variant: "hub" | "spoke" | "grid";
}) {
  const box =
    variant === "hub"
      ? "size-10 rounded-xl border border-white/15 bg-white/10 p-1.5 shadow-[0_0_24px_rgba(192,105,74,0.15)] sm:size-11 sm:p-2"
      : variant === "spoke"
        ? "size-8 rounded-md border border-white/15 bg-white/10 p-1 sm:rounded-lg sm:size-9 sm:p-1.5"
        : "size-9 rounded-lg border border-white/15 bg-white/10 p-1.5";

  const imgClass = variant === "hub" ? HUB_LOGO_CLASS : SPOKE_LOGO_CLASS;
  const px = variant === "hub" ? 32 : variant === "spoke" ? 24 : 28;

  return (
    <div className={`flex shrink-0 items-center justify-center ${box}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        width={px}
        height={px}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className={imgClass}
      />
    </div>
  );
}

export function HeroToolsSchema() {
  return (
    <figure
      className="mx-auto w-full max-w-[min(100%,360px)] lg:max-w-none"
      aria-label={ARIA_LABEL}
    >
      {/* Mobile / narrow: compact grid, no orbit overlap */}
      <ul className="grid grid-cols-5 gap-2.5 sm:gap-3 md:hidden">
        {HOME_TECH_LOGOS.map((tool) => (
          <li key={tool.id} className="flex justify-center">
            <LogoTile logo={tool} variant="grid" />
          </li>
        ))}
      </ul>

      {/* md+: hub-spoke, logos only (no per-node text) */}
      <div className="relative isolate hidden aspect-square w-full overflow-visible md:block">
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox={`0 0 ${VB} ${VB}`}
          aria-hidden
          focusable="false"
        >
          <defs>
            <filter id="hero-tools-line-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="hero-tools-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D3A4A" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#C0694A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2D3A4A" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {SPOKES.map((node) => (
            <line
              key={node.id}
              x1={HUB.x}
              y1={HUB.y}
              x2={node.x}
              y2={node.y}
              stroke="url(#hero-tools-line-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#hero-tools-line-glow)"
            />
          ))}
          {SPOKES.map((node) => (
            <circle
              key={`dot-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="2"
              fill="#C0694A"
              opacity="0.55"
            />
          ))}
          <circle cx={HUB.x} cy={HUB.y} r="3" fill="#C0694A" />
        </svg>

        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: pct(HUB.x), top: pct(HUB.y) }}
        >
          <LogoTile logo={HUB} variant="hub" />
        </div>

        {SPOKES.map((node) => (
          <div
            key={node.id}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: pct(node.x), top: pct(node.y) }}
            title={node.name}
          >
            <LogoTile logo={node} variant="spoke" />
          </div>
        ))}
      </div>
    </figure>
  );
}
