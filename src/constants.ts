import { Replace, SliceBeginningDashes } from "./utils";

// `cssVariables` and `cssVariableStyles`!!!
export const cssVariableStyles = {
  // colors
  "--primary-bg": "#1d2021",
  "--primary-fg": "#DEDEDE",
  "--secondary-fg": "#828485",
  "--secondary2-fg": "#B9BABA",
  "--tertiary-fg": "#57595A",
  "--primary-accent": "#126da6",
  // "--primary-fg": "#fbf1c7",
  // "--secondary-fg": "#d5c4a1",
  // "--tertiary-fg": "#928472",

  // typography
  "--font-family": "Poppins",
  "--font-size-sm": "0.875rem",
  "--font-size-md": "1rem",
  "--font-size-lg": "1.25rem",
  "--font-size-x-lg": "1.5rem",
  "--font-size-2x-lg": "2.25rem",
  "--font-size-3x-lg": "3rem",
  "--font-size-4x-lg": "4.5rem",

  // spacing
  "--spacing-sm": "0.75rem",
  "--spacing-md": "1rem",
  "--spacing-lg": "1.25rem",
  "--spacing-x-lg": "1.75rem",
  "--spacing-2x-lg": "2.25rem",
  "--spacing-3x-lg": "3rem",
  "--spacing-4x-lg": "4.5rem",

  // size
  "--size-timer": "12rem",
} as const;

export const cssVariables = (function () {
  const cssVariables = {} as any;

  Object.keys(cssVariableStyles).forEach((cssVariableName) => {
    return (cssVariables[
      cssVariableName.slice(2).replace(/-/g, "_")
    ] = `var(${cssVariableName})`);
  });

  return cssVariables as Record<
    Replace<SliceBeginningDashes<keyof typeof cssVariableStyles>, "-", "_">,
    string
  >;
})();
// `cssVariables` and `cssVariableStyles`!!!

// `ViewLevel` !!!
export type ViewLevel = 1 | 2;
// `ViewLevel` !!!
