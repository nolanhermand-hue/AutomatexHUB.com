const iconClass = "h-8 w-8 text-primary";

export function IconImmobilier({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M4 14 16 4l12 10v12a1 1 0 01-1 1h-7v-8H12v8H5a1 1 0 01-1-1V14z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBtp({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4 4 12v2h24v-2L16 4zM6 16v10h6v-6h8v6h6V16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}
