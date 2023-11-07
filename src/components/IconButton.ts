import { cssVariables } from "@/constants";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { adaptState } from "promethium-js";

function IconButton(props: {
  iconName: string;
  onClick: (e: MouseEvent) => void;
}) {
  const [active, setActive] = adaptState(false);

  const iconButtonStyles = {
    fontSize: cssVariables.font_size_3x_lg,
    padding: cssVariables.spacing_sm,
  };

  function onClick(e: MouseEvent) {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 70);
    props.onClick(e);
  }

  return () =>
    html` <sl-icon
      name=${props.iconName}
      style=${styleMap({
        ...iconButtonStyles,
        color: active() ? cssVariables.secondary_fg : cssVariables.primary_fg,
      })}
      @click=${onClick}
    ></sl-icon>`;
}

export default IconButton;
