export enum PaletteKey {
  white = "white",
  cyan = "cyan",
  yellow = "yellow",
  purple = "purple",
  pink = "pink",
  orange = "orange",
  green = "green",
  background = "background",
  background_dark = "background_dark",
}

type ColorPalette = {
  [key in PaletteKey]: string;
};

export const Palette: ColorPalette = {
  white: "var(--white)",
  cyan: "var(--cyan)",
  yellow: "var(--yellow)",
  purple: "var(--purple)",
  pink: "var(--pink)",
  orange: "var(--orange)",
  green: "var(--green)",
  background: "var(--background)",
  background_dark: "var(--background_dark)",
};
