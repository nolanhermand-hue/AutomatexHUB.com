import { SOCIAL_PROOF_ITEMS } from "@/lib/constants";

export function SocialProof() {
  return (
    <div className="border-b border-primary/20 bg-night px-gutter py-10 md:py-12">
      <div className="mx-auto max-w-content">
        <p className="label-micro mb-6 text-center text-accent">Ils témoignent</p>
        <div className="grid gap-6 md:grid-cols-3">
          {SOCIAL_PROOF_ITEMS.map((item) => (
            <figure
              key={item.author}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_8px_24px_rgb(0_0_0/0.2)]"
            >
              <blockquote className="text-sm leading-relaxed text-text md:text-[15px]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2">
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cta/20 text-xs font-bold text-cta"
                  aria-hidden
                >
                  {item.author.charAt(0)}
                </span>
                <span className="text-xs text-muted">
                  <span className="font-semibold text-text">{item.author}</span>
                  {" · "}
                  {item.network}
                  {" · "}
                  {item.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
