import { HOME_TECH_TRUST } from "@/lib/home-copy";

const TOOLS = [
  { name: "N8N", src: "/assets/integrations/n8n.svg" },
  { name: "Mistral", src: "/assets/integrations/mistral.svg" },
  { name: "Google Drive", src: "/assets/integrations/google-drive.svg" },
  { name: "Google Calendar", src: "/assets/integrations/google-calendar.svg" },
  { name: "Google Maps", src: "/assets/integrations/google-maps.svg" },
  { name: "Brevo", src: "/assets/integrations/brevo.svg" },
  { name: "Twilio", src: "/assets/integrations/twilio.svg" },
] as const;

export function TechTrustBar() {
  return (
    <section className="border-y border-border px-gutter py-8" aria-labelledby="home-tech-trust">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="home-tech-trust" className="text-sm font-semibold text-text md:text-base">
            {HOME_TECH_TRUST.label}
          </h2>
          <p className="text-xs text-[var(--text-subtle)]">{HOME_TECH_TRUST.disclaimer}</p>
        </div>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:justify-start md:gap-8">
          {TOOLS.map((tool) => (
            <li key={tool.name} className="animate-on-scroll fade">
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
