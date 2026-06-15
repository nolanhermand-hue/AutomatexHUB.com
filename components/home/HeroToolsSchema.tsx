import {
  HOME_HERO_INTEGRATION_LOGOS,
  type HomeHeroIntegrationLogo,
} from "@/lib/home-tech-logos";
import { HOME_HERO } from "@/lib/home-copy";
import { SystemCapturePlaceholder } from "@/components/ui/SystemCapturePlaceholder";

const ARIA_LABEL = `Outils connectés : ${HOME_HERO_INTEGRATION_LOGOS.map((t) => t.name).join(", ")}.`;

function LogoTile({ logo }: { logo: HomeHeroIntegrationLogo }) {
  return (
    <div className="surface-dark flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 p-2 sm:size-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="max-h-8 max-w-8 object-contain opacity-95"
      />
    </div>
  );
}

/** Bande d’intégrations hero + capture produit (colonne droite). */
export function HeroToolsSchema() {
  return (
    <div
      className="mx-auto w-full max-w-[min(100%,360px)] lg:max-w-none"
      aria-label={ARIA_LABEL}
    >
      <SystemCapturePlaceholder
        src="/assets/demos/devis-auto-static.webp"
        className="mb-6"
        priority
      />
      <figcaption className="text-center text-sm leading-relaxed text-muted md:text-base lg:text-left">
        {HOME_HERO.integrationsLine}
      </figcaption>
      <ul className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start">
        {HOME_HERO_INTEGRATION_LOGOS.map((tool) => (
          <li key={tool.id}>
            <LogoTile logo={tool} />
          </li>
        ))}
      </ul>
    </div>
  );
}
