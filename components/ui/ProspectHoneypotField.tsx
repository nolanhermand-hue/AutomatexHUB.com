import { PROSPECT_HONEYPOT_FIELD } from "@/lib/prospect-webhook";

/** Off-screen honeypot — visible to naive bots, not to users (do not use display:none alone). */
export function ProspectHoneypotField() {
  return (
    <div
      className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
      aria-hidden="true"
    >
      <input
        type="text"
        name={PROSPECT_HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
