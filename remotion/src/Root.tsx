import React from "react";
import { Composition } from "remotion";
import { VoixDevis } from "./compositions/VoixDevis";
import { AutomationFlow, durationForAutomation } from "./compositions/AutomationFlow";
import { VIDEO } from "./theme";
import { AUTOMATIONS_CATALOG } from "../../lib/automations-catalog";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="voix-devis"
        component={VoixDevis}
        durationInFrames={VIDEO.durationInFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />

      {AUTOMATIONS_CATALOG.map((automation) => (
        <Composition
          key={automation.id}
          id={`auto-${automation.id}`}
          component={AutomationFlow}
          fps={30}
          width={1280}
          height={720}
          durationInFrames={durationForAutomation(automation)}
          defaultProps={{ automation }}
        />
      ))}
    </>
  );
};
