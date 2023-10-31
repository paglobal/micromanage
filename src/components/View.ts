import { ViewLevel, cssVariables } from "@/constants";
import { TemplateResult, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

function View(props: { level: ViewLevel; content: () => TemplateResult }) {
  const containerStyles = {
    position: "relative",
    width: "100vw",
    // subtract the tab height from the viewport height to get the tab panel height
    height: `calc(100vh - ${props.level} * (${cssVariables.font_size_x_lg} + 2 * ${cssVariables.spacing_lg}))`,
  };

  return () =>
    html`<div style=${styleMap(containerStyles)}>${props.content()}</div>`;
}

export default View;
