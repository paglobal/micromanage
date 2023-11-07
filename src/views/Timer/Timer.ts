import { html } from "lit";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import { styleMap } from "lit/directives/style-map.js";
import { cssVariables } from "@/constants";
import IconButton from "@/components/IconButton";
import { adaptEffect, adaptState, h } from "promethium-js";

function Timer() {
  const [isPlaying, setIsPlaying] = adaptState(false);
  const initialTimeLeft = 25;
  const [timeLeft, setTimeLeft] = adaptState(initialTimeLeft);
  let intervalId: NodeJS.Timeout;

  adaptEffect(() => {
    timeLeft() <= 0 ? clearInterval(intervalId) : "";
  });

  function playPause(action: "play" | "pause") {
    if (action === "play" && isPlaying()) return;
    if (action === "pause" && !isPlaying()) return;
    if (action === "play" && !isPlaying()) {
      intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 50 / 1000);
      }, 50);
    } else if (action === "pause" && isPlaying()) {
      clearInterval(intervalId);
    }
    setIsPlaying((isPlaying) => !isPlaying);
  }

  function stop() {
    clearInterval(intervalId);
  }

  const containerStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: cssVariables.spacing_2x_lg,
    justifyContent: "center",
    alignItems: "center",
  };

  const progressRingStyles = {
    "--size": cssVariables.size_timer,
    "--track-width": cssVariables.spacing_lg,
    "--indicator-width": cssVariables.spacing_x_lg,
    "--track-color": cssVariables.primary_fg,
    "--indicator-color": cssVariables.primary_accent,
  };

  const timeStyles = {
    fontWeight: 500,
    color: cssVariables.primary_fg,
    fontSize: cssVariables.font_size_4x_lg,
    lineHeight: 1,
  };

  const timerTimeRemainingTextStyles = {
    fontWeight: 500,
    color: cssVariables.secondary_fg,
    fontSize: cssVariables.font_size_lg,
  };

  return () => {
    const playPauseIcon = isPlaying() ? "pause-circle" : "play-circle";
    const playPauseAction = isPlaying() ? "pause" : "play";

    return html` <div style=${styleMap(containerStyles)}>
      <p style=${styleMap(timeStyles)}>10:14</p>
      <p
        style=${styleMap({
          color: cssVariables.secondary2_fg,
          fontSize: cssVariables.font_size_lg,
        })}
      >
        Interview Practice
      </p>
      <sl-progress-ring
        value=${((initialTimeLeft - timeLeft()) / initialTimeLeft) * 100}
        style=${styleMap(progressRingStyles)}
        ><span style=${styleMap(timerTimeRemainingTextStyles)}
          >${Math.round(timeLeft())}</span
        ></sl-progress-ring
      >
      <div>
        ${h(IconButton, {
          iconName: playPauseIcon,
          onClick: () => playPause(playPauseAction),
        })}
        ${h(IconButton, { iconName: "stop-circle", onClick: stop })}
      </div>
    </div>`;
  };
}

export default Timer;
