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
              className="rounded-2xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_8px_24px_rgb(0_0_0/0.2)]"
            >
              <blockquote className="text-sm leading-relaxed text-text md:text-[15px]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2">
                <span
                  className="btn-bracket btn-bracket-primary w-full justify-center"
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
