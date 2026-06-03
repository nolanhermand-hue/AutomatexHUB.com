import { HOME_TECH_LOGOS } from "@/lib/home-tech-logos";

const TECH_TRUST_ARIA =
  `Intégrations : ${HOME_TECH_LOGOS.map((t) => t.name).join(", ")}.`;

export function TechTrustBar() {
  return (
    <section
      className="border-y border-border px-gutter py-8"
      aria-label={TECH_TRUST_ARIA}
    >
      <div className="mx-auto max-w-content">
        <ul className="animate-on-scroll section-reveal flex flex-wrap items-center justify-center gap-6 sm:justify-start md:gap-8">
          {HOME_TECH_LOGOS.map((tool) => (
            <li key={tool.id} className="animate-on-scroll fade">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tool.src}
                alt={tool.name}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 object-contain opacity-85 grayscale-[20%] transition hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
