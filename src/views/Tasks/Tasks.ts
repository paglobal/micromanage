import TabGroup from "@/components/TabGroup";
import { html } from "lit";
import { h } from "promethium-js";

function Tasks() {
  return () =>
    html`${h(TabGroup, {
      level: 2,
      tabPanelPairProps: [
        {
          name: "task-list",
          iconName: "list-ul",
          panelContent: () => html`Task List`,
        },
        {
          name: "add-task",
          iconName: "plus-circle",
          panelContent: () => html`Add Task`,
        },
        {
          name: "task-tags",
          iconName: "tags",
          panelContent: () => html`Task Tags`,
        },
      ],
    })}`;
}

export default Tasks;
