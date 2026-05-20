import { TRUST_BAR_ITEMS } from "@/lib/constants";

export function TrustBar() {
  const items = [...TRUST_BAR_ITEMS, ...TRUST_BAR_ITEMS];
  return (
    <div className="border-y border-border bg-night py-3">
      <div className="overflow-hidden hover:[&_.marquee]:![animation-play-state:paused]">
        <div className="marquee flex w-max gap-8 font-body text-sm font-medium text-muted md:text-[15px]">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-8">
              <span className="text-primary">·</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
