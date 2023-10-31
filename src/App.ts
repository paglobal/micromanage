import { html } from "lit";
import { h } from "promethium-js";
import TabGroup from "@/components/TabGroup";
import { cssVariableStyles, cssVariables } from "./constants";
import { styleMap } from "lit/directives/style-map.js";
import Stats from "@/views/Stats/Stats";
import Tasks from "@/views/Tasks/Tasks";
import Timer from "@/views/Timer/Timer";

function App() {
  const containerStyles = {
    ...cssVariableStyles,
    fontFamily: cssVariables.font_family,
  };

  return () => html`
    <div style=${styleMap(containerStyles)}>
      ${h(TabGroup, {
        level: 1,
        tabPanelPairProps: [
          {
            name: "timer",
            iconName: "hourglass",
            panelContent: () => html`${h(Timer)}`,
          },
          {
            name: "tasks",
            iconName: "list",
            panelContent: () => html`${h(Tasks)}`,
          },
          {
            name: "stats",
            iconName: "graph-up",
            panelContent: () => html`${h(Stats)}`,
          },
        ],
      })}
    </div>
  `;
}

export default App;
