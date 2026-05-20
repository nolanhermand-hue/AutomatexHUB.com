import type { DemoAnimationProps } from "@/components/demo/MotionDemo";

export function PointMensuelDemo({ active }: DemoAnimationProps) {
  if (!active) return null;
  return (
    <div className="demo-root demo-loop-10">
      <div className="relative min-h-[280px]">
        <div className="demo-step demo-step-1">
          <p className="text-sm text-[#f5f4f1]">📅 J+30 — Point mensuel Nolan</p>
        </div>
        <div className="demo-step demo-step-2">
          <p className="text-sm text-[#ff8200]">📊 Rapport Telegram</p>
          <p className="text-xs text-[#f5f4f1]/90">8 appels traités · 12 devis · 14 h récupérées</p>
        </div>
        <div className="demo-step demo-step-3">
          <p className="max-w-xs text-xs text-[#f5f4f1]/90">
            Nolan : on améliore le template devis cette semaine.
          </p>
        </div>
        <div className="demo-step demo-step-4">
          <p className="text-sm text-[#38a169]">✅ Système mis à jour — sans que vous ayez demandé</p>
        </div>
      </div>
    </div>
  );
}
