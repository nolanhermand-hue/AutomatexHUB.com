import { Composition } from "remotion";
import { VIDEO } from "./theme";
import { fontsReady } from "./fonts";
import { EVENT_DEMOS } from "./lib/eventDemos";
import { LIVE_DEMOS } from "./lib/liveDemos";
import { EventFlow, eventFlowDuration } from "./compositions/EventFlow";
import { TerminalFlow, terminalFlowDuration } from "./compositions/TerminalFlow";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {Object.values(EVENT_DEMOS).map((demo) => (
        <Composition
          key={demo.id}
          id={demo.id}
          component={EventFlow}
          durationInFrames={eventFlowDuration(demo.events.length)}
          fps={VIDEO.fps}
          width={VIDEO.event.width}
          height={VIDEO.event.height}
          defaultProps={{ demo }}
          calculateMetadata={async () => {
            await fontsReady;
            return {};
          }}
        />
      ))}
      {Object.values(LIVE_DEMOS).map((demo) => (
        <Composition
          key={demo.id}
          id={demo.id}
          component={TerminalFlow}
          durationInFrames={terminalFlowDuration(demo.steps.length)}
          fps={VIDEO.fps}
          width={VIDEO.terminal.width}
          height={VIDEO.terminal.height}
          defaultProps={{ demo }}
          calculateMetadata={async () => {
            await fontsReady;
            return {};
          }}
        />
      ))}
    </>
  );
};
