"use client";

import { MotionDemo } from "@/components/demo/MotionDemo";
import { DEMO_STATIC, loadPointMensuel } from "@/lib/demo-loaders";

export function AccompagnementPointMensuelDemo() {
  return (
    <MotionDemo
      demoId="point-mensuel"
      staticSrc={DEMO_STATIC.pointMensuel.src}
      ariaLabel="Point mensuel : rapport Telegram et échange avec Nolan"
      staticAlt={DEMO_STATIC.pointMensuel.alt}
      loadAnimation={loadPointMensuel}
    />
  );
}
