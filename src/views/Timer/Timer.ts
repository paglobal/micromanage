import { html } from "lit";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import { styleMap } from "lit/directives/style-map.js";
import { cssVariables } from "@/constants";
import { c } from "@/utils";

function Timer() {
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
  };
  const timerTimeRemainingTextStyles = {
    fontWeight: 500,
    color: cssVariables.secondary_fg,
    fontSize: cssVariables.font_size_lg,
  };
  const iconButtonStyles = {
    fontSize: cssVariables.font_size_3x_lg,
    padding: cssVariables.spacing_sm,
    color: cssVariables.primary_fg,
  };

  return () =>
    html` <div style=${styleMap(containerStyles)}>
      <p style=${styleMap(timeStyles)}>10:14</p>
      <p style=${styleMap({ color: cssVariables.secondary2_fg })}>
        Interview Practice
      </p>
      <sl-progress-ring value="50" style=${styleMap(progressRingStyles)}
        ><span style=${styleMap(timerTimeRemainingTextStyles)}
          >28:56</span
        ></sl-progress-ring
      >
      <div>
        <sl-icon
          name="play-circle"
          style=${styleMap(iconButtonStyles)}
        ></sl-icon
        ><sl-icon
          name="pause-circle"
          style=${styleMap(iconButtonStyles)}
        ></sl-icon>
      </div>
    </div>`;
}

export default Timer;
