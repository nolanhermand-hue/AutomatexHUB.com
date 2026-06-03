import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { BTP_HERO } from "@/lib/btp-copy";
import Link from "next/link";

export function BtpHeroSection() {
  return (
    <section id="hero" className="relative border-b border-border bg-night px-gutter pb-12 pt-[88px] md:pt-[100px]">
      <div className="relative mx-auto max-w-content">
        <h1 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.1] text-text">
          {BTP_HERO.h1}
        </h1>
        <p className="mt-5 max-w-readable text-base text-muted md:text-lg">{BTP_HERO.sub}</p>
        <p className="mt-3 text-sm font-semibold text-text">{BTP_HERO.priceFrom}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="/rendez-vous" className="btn-bracket btn-bracket-primary">
            {BTP_HERO.ctaDemo}
          </a>
          <a href="#demo" className="btn-bracket btn-bracket-outline">
            {BTP_HERO.ctaHow}
          </a>
        </div>
        <div className="mt-8 max-w-readable">
          <FounderTrustBlock compact />
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {BTP_HERO.badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          {BTP_HERO.localBandeau}{" "}
          <Link href="/automatisation-artisan-argentan" className="font-semibold text-primary underline">
            Voir l&apos;Orne →
          </Link>
        </p>
      </div>
    </section>
  );
}
