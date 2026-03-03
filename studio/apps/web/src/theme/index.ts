"use client";

import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-date-pickers/themeAugmentation";

import breakpoints from "@/theme/breakpoints";
import components from "@/theme/components";
import palettes from "@/theme/palettes";
import typography from "@/theme/typography";
import zIndex from "@/theme/zIndex";

const baseOptions = {
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints,
  typography,
  palette: palettes.light,
  colorSchemes: {
    light: true,
    dark: {
      palette: palettes.dark,
    },
  },
  components,
  zIndex,
};

const theme = createTheme(baseOptions);

export default theme;
