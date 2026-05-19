import type { ProblemIconId } from "@/lib/constants";
import type { ReactNode } from "react";

const icons: Record<ProblemIconId, ReactNode> = {
  lead: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <rect
        x="4"
        y="7"
        width="16"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 11h8M8 15h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
      <path
        d="M8 3h8l4 4v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function ProblemIcon({ id }: { id: ProblemIconId }) {
  return (
    <div className="inline-flex text-primary" aria-hidden>
      {icons[id]}
    </div>
  );
}
