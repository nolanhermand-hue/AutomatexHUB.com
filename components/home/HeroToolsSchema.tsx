import {
  HOME_HERO_INTEGRATION_LOGOS,
  type HomeHeroIntegrationLogo,
} from "@/lib/home-tech-logos";
import { HOME_HERO } from "@/lib/home-copy";

const ARIA_LABEL = `Outils connectés : ${HOME_HERO_INTEGRATION_LOGOS.map((t) => t.name).join(", ")}.`;

function LogoTile({ logo }: { logo: HomeHeroIntegrationLogo }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 p-2 sm:size-12">
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

/** Bande d’intégrations hero : sous-titre + 3 logos statiques (pas de marquee). */
export function HeroToolsSchema() {
  return (
    <figure className="mt-8 max-w-xl" aria-label={ARIA_LABEL}>
      <figcaption className="text-sm leading-relaxed text-muted md:text-base">
        {HOME_HERO.integrationsLine}
      </figcaption>
      <ul className="mt-4 flex flex-wrap items-center justify-start gap-4 sm:gap-5">
        {HOME_HERO_INTEGRATION_LOGOS.map((tool) => (
          <li key={tool.id}>
            <LogoTile logo={tool} />
          </li>
        ))}
      </ul>
    </figure>
  );
}
