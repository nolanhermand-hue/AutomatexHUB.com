/** Placeholder lazy-load — shimmer CSS pur (Bloc 6). */
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`card ${className}`} aria-hidden="true">
      <div className="skeleton mb-3 h-4 w-2/3 rounded" />
      <div className="skeleton mb-2 h-3 w-full rounded" />
      <div className="skeleton mb-2 h-3 w-4/5 rounded" />
      <div className="skeleton h-3 w-3/5 rounded" />
    </div>
  );
}

export function SectionSkeletonGrid({ cols = 3 }: { cols?: number }) {
  return (
    <div
      className={`grid gap-4 ${cols === 3 ? "md:grid-cols-3" : cols === 2 ? "md:grid-cols-2" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: cols }, (_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
