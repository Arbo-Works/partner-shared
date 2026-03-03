import type { PaletteColor } from "@mui/material/styles";

import basePalette from "@/theme/palettes/base";
import { darkSemantic, lightSemantic } from "@/theme/palettes/semantic";

const lightSecondary: PaletteColor = {
  main: basePalette.coldstone[800],
  light: basePalette.coldstone[700],
  dark: basePalette.coldstone[900],
  contrastText: lightSemantic.accent.onAccent,
};

const darkSecondary: PaletteColor = {
  main: basePalette.coldstone[800],
  light: basePalette.coldstone[600],
  dark: basePalette.coldstone[900],
  contrastText: darkSemantic.content.emphasis,
};

export { darkSecondary, lightSecondary };
