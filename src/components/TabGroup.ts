import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";
import { TemplateResult, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import TabPanelPair from "./TabPanelPair";
import { h } from "promethium-js";
import { ViewLevel } from "@/constants";

function TabGroup(props: {
  level: ViewLevel;
  tabPanelPairProps: {
    name: string;
    iconName: string;
    panelContent: () => TemplateResult;
  }[];
}) {
  const tabGroupStyles = {
    position: "absolute",
    bottom: "0px",
    display: "flex",
    "--track-width": "0px",
  };

  return () => html`
    <sl-tab-group placement="bottom" style=${styleMap(tabGroupStyles)}>
      ${props.tabPanelPairProps.map((tabPanelPairProps) =>
        h(TabPanelPair, {
          ...tabPanelPairProps,
          width: `${100 / props.tabPanelPairProps.length}%`,
          level: props.level,
        }),
      )}
    </sl-tab-group>
  `;
}

export default TabGroup;
