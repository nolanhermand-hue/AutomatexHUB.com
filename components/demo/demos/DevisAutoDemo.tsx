import type { DemoAnimationProps } from "@/components/demo/MotionDemo";

export function DevisAutoDemo({ active }: DemoAnimationProps) {
  if (!active) return null;
  return (
    <div className="demo-root demo-loop-10">
      <div className="relative min-h-[280px]">
        <div className="demo-step demo-step-1">
          <p className="text-sm text-[#f5f4f1]">🎙️ Dictée en sortie de chantier</p>
        </div>
        <div className="demo-step demo-step-2">
          <p className="text-xs text-[#f5f4f1]/90">Pose carrelage 40 m², salle de bain, 2 jours…</p>
        </div>
        <div className="demo-step demo-step-3">
          <p className="text-sm text-[#ff8200]">→ Devis PDF n°2024-47</p>
          <p className="text-xs text-[#f5f4f1]">Total TTC : 3 840 €</p>
        </div>
        <div className="demo-step demo-step-4">
          <p className="text-sm text-[#f5f4f1]">📧 Envoyé à m.dupont@gmail.com · 17 h 23</p>
        </div>
        <div className="demo-step demo-step-5">
          <p className="text-sm text-[#38a169]">✅ Devis accepté</p>
        </div>
      </div>
    </div>
  );
}
