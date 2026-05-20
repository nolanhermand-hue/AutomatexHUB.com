import type { DemoAnimationProps } from "@/components/demo/MotionDemo";

export function LeadImmobilierDemo({ active }: DemoAnimationProps) {
  if (!active) return null;
  return (
    <div className="demo-root demo-loop-8">
      <div className="relative min-h-[280px]">
        <div className="demo-step demo-step-1">
          <p className="text-sm text-[#f5f4f1]">🏠 Visite en cours</p>
          <p className="text-xs text-[#ff8200]">Lead SeLoger : M. Martin, 3 pièces Flers</p>
        </div>
        <div className="demo-step demo-step-2">
          <p className="text-sm text-[#f5f4f1]">Réponse auto en 90 s pendant la visite</p>
        </div>
        <div className="demo-step demo-step-3">
          <p className="max-w-xs text-xs text-[#f5f4f1]/90">
            Bonjour M. Martin, je suis en visite. Je vous rappelle dans 30 minutes.
          </p>
        </div>
        <div className="demo-step demo-step-4">
          <p className="text-sm text-[#38a169]">✅ Lead engagé · 0 lead perdu</p>
          <p className="text-lg font-semibold text-[#ff8200]">3 500 € préservés</p>
        </div>
      </div>
    </div>
  );
}
