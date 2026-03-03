import { PaletteMode, PaletteOptions, ThemeVars } from "@mui/material/styles";

import backgrounds from "@/theme/palettes/backgrounds";
import basePalette, { BasePalette } from "@/theme/palettes/base";
import { darkPrimary, lightPrimary } from "@/theme/palettes/primary";
import { darkSecondary, lightSecondary } from "@/theme/palettes/secondary";
import {
  darkSemantic,
  lightSemantic,
  SemanticPalette,
} from "@/theme/palettes/semantic";
import { darkText, lightText } from "@/theme/palettes/text";

declare module "@mui/material/styles" {
  interface Palette extends BasePalette, SemanticPalette {
    // palette used in the opposite theme mode — dark palette in light mode, light palette in dark mode
    opposite: SemanticPalette;
    // permanent light theme palette, independent of the current mode
    permalight: SemanticPalette;
    // permanent dark theme palette, independent of the current mode
    permadark: SemanticPalette;
  }
  interface PaletteOptions extends BasePalette, SemanticPalette {
    opposite: SemanticPalette;
    permalight: SemanticPalette;
    permadark: SemanticPalette;
  }
  interface Theme {
    vars: ThemeVars;
  }
}

const lightPalette: PaletteOptions = {
  mode: "light" as PaletteMode,
  ...basePalette,
  ...lightSemantic,
  text: lightText,
  opposite: darkSemantic,
  permalight: lightSemantic,
  permadark: darkSemantic,
  primary: lightPrimary,
  secondary: lightSecondary,
  background: backgrounds.light,
};

const darkPalette: PaletteOptions = {
  mode: "dark" as PaletteMode,
  ...basePalette,
  ...darkSemantic,
  text: darkText,
  opposite: lightSemantic,
  permalight: lightSemantic,
  permadark: darkSemantic,
  primary: darkPrimary,
  secondary: darkSecondary,
  background: backgrounds.dark,
};

const palettes = {
  light: lightPalette,
  dark: darkPalette,
};
export default palettes;
