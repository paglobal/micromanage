import TabGroup from "@/components/TabGroup";
import { html } from "lit";
import { h } from "promethium-js";

function Stats() {
  return () =>
    html`${h(TabGroup, {
      level: 2,
      tabPanelPairProps: [
        {
          name: "stat-list",
          iconName: "view-list",
          panelContent: () => html`Stat List`,
        },
        {
          name: "date-range-select",
          iconName: "calendar2-plus",
          panelContent: () => html`Date Range Select`,
        },
        {
          name: "daily-sequence",
          iconName: "calendar3",
          panelContent: () => html`Daily Sequence`,
        },
      ],
    })}`;
}

export default Stats;
