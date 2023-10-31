import { TemplateResult, html } from "lit";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import { styleMap } from "lit/directives/style-map.js";
import { ViewLevel, cssVariables } from "@/constants";
import { c } from "@/utils";
import View from "./View";
import { h } from "promethium-js";

function TabPanelPair(props: {
  name: string;
  iconName: string;
  panelContent: () => TemplateResult;
  level: ViewLevel;
  width: string;
}) {
  const tabStyles = {
    width: props.width,
    display: "flex",
    justifyContent: "center",
  };
  const tabPanelStyles = { width: "100vw", "--padding": "0px" };

  const classes = c("tabIcon", "tab");
  const styles = html`
    <style>
      sl-tab .${classes.tabIcon} {
        color: ${cssVariables.tertiary_fg};
        font-size: ${cssVariables.font_size_x_lg};
      }

      sl-tab[active] .${classes.tabIcon} {
        color: ${cssVariables.primary_fg};
      }

      .${classes.tab}::part(base) {
        padding: ${cssVariables.spacing_lg};
        cursor: default;
      }
    </style>
  `;

  return () => html`
    ${styles}
    <sl-tab
      slot="nav"
      panel=${props.name}
      style=${styleMap(tabStyles)}
      class=${classes.tab}
      ><sl-icon name=${props.iconName} class=${classes.tabIcon}></sl-icon
    ></sl-tab>
    <sl-tab-panel name=${props.name} style=${styleMap(tabPanelStyles)}
      >${h(View, {
        level: props.level,
        content: props.panelContent,
      })}</sl-tab-panel
    >
  `;
}

export default TabPanelPair;
