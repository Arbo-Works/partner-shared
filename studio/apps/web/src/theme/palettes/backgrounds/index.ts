import border, { Border } from "@/theme/palettes/backgrounds/border";
import noise, { Noise } from "@/theme/palettes/backgrounds/noise";
import { darkSemantic, lightSemantic } from "@/theme/palettes/semantic";

declare module "@mui/material/styles" {
  interface TypeBackground {
    noise: Noise;
    border: Border;
  }
}

const lightBackground = {
  noise: noise.light,
  border: border.light,
  default: lightSemantic.surface.backdrop,
};

const darkBackground = {
  noise: noise.dark,
  border: border.dark,
  default: darkSemantic.surface.backdrop,
};

const backgrounds = {
  dark: darkBackground,
  light: lightBackground,
};

export default backgrounds;
