import type { DemoAnimationProps } from "@/components/demo/MotionDemo";

export function AppelManqueDemo({ active }: DemoAnimationProps) {
  if (!active) return null;
  return (
    <div className="demo-root demo-loop-8">
      <div className="relative min-h-[280px]">
        <div className="demo-step demo-step-1">
          <span className="text-2xl" aria-hidden>
            📞
          </span>
          <p className="text-sm text-[#f5f4f1]">Appel entrant — Client Dupont</p>
        </div>
        <div className="demo-step demo-step-2">
          <p className="demo-pulse-red text-sm">Appel manqué — vous êtes sur le chantier</p>
        </div>
        <div className="demo-step demo-step-3">
          <p className="text-sm text-[#ff8200]">SMS en 90 s</p>
          <p className="max-w-xs text-xs text-[#f5f4f1]/90">
            Bonjour M. Dupont, j&apos;ai bien reçu votre appel. Je vous rappelle avant 18 h.
          </p>
        </div>
        <div className="demo-step demo-step-4">
          <p className="text-sm text-[#38a169]">✅ Client rassuré · Rappel planifié</p>
          <p className="text-xs text-[#f5f4f1]/80">Résumé Telegram 18 h</p>
        </div>
      </div>
    </div>
  );
}
