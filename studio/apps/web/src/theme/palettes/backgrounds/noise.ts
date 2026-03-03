import { darkSemantic, lightSemantic } from "@/theme/palettes/semantic";

type NoiseProperties = {
  backgroundColor: string;
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
};

export type Noise = {
  primary: NoiseProperties;
  primaryAlt: NoiseProperties;
  secondary: NoiseProperties;
  secondaryAlt: NoiseProperties;
  valid: NoiseProperties;
  invalid: NoiseProperties;
  attention: NoiseProperties;
  surface: NoiseProperties;
  surfaceEmphasis: NoiseProperties;
  canvas: NoiseProperties;
  phantomSurface: NoiseProperties;
  phantomSurfaceAlt: NoiseProperties;
};

const lightNoise: Noise = {
  primary: {
    backgroundColor: lightSemantic.accent.primary,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  primaryAlt: {
    backgroundColor: lightSemantic.accent.primaryAlt,
    backgroundImage: "url(/images/textures/noise_diffuse256_W20-80.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  secondary: {
    backgroundColor: lightSemantic.accent.secondary,
    backgroundImage: "url(/images/textures/noise_diffuse256_W20-56.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  secondaryAlt: {
    backgroundColor: lightSemantic.accent.secondaryAlt,
    backgroundImage: "url(/images/textures/noise_diffuse256_W20-80.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  valid: {
    backgroundColor: lightSemantic.status.valid,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  invalid: {
    backgroundColor: lightSemantic.status.invalid,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  attention: {
    backgroundColor: lightSemantic.status.attention,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  surface: {
    backgroundColor: lightSemantic.surface.default,
    backgroundImage: "url(/images/textures/strong100-10.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  surfaceEmphasis: {
    backgroundColor: lightSemantic.surface.emphasis,
    backgroundImage: "url(/images/textures/strong100-72.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  canvas: {
    backgroundColor: lightSemantic.surface.canvas,
    backgroundImage: "url(/images/textures/strong100-12.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  phantomSurface: {
    backgroundColor: lightSemantic.phantom.surface,
    backgroundImage: "url(/images/textures/strong100-18.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  phantomSurfaceAlt: {
    backgroundColor: lightSemantic.phantom.surfaceAlt,
    backgroundImage: "url(/images/textures/strong100-12.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
};

const darkNoise: Noise = {
  primary: {
    backgroundColor: darkSemantic.accent.primary,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  primaryAlt: {
    backgroundColor: darkSemantic.accent.primaryAlt,
    backgroundImage: "url(/images/textures/strong100-60.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  secondary: {
    backgroundColor: darkSemantic.accent.secondary,
    backgroundImage: "url(/images/textures/strong100-20.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  secondaryAlt: {
    backgroundColor: darkSemantic.accent.secondaryAlt,
    backgroundImage: "url(/images/textures/strong100-25.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  valid: {
    backgroundColor: darkSemantic.status.valid,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  invalid: {
    backgroundColor: darkSemantic.status.invalid,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  attention: {
    backgroundColor: darkSemantic.status.attention,
    backgroundImage: "url(/images/textures/strong100-45.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  surface: {
    backgroundColor: darkSemantic.surface.default,
    backgroundImage: "url(/images/textures/strong100-10.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  surfaceEmphasis: {
    backgroundColor: darkSemantic.surface.emphasis,
    backgroundImage: "url(/images/textures/strong100-10.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  canvas: {
    backgroundColor: darkSemantic.surface.canvas,
    backgroundImage: "url(/images/textures/strong100-15.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  phantomSurface: {
    backgroundColor: darkSemantic.phantom.surface,
    backgroundImage: "url(/images/textures/strong100-18.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
  phantomSurfaceAlt: {
    backgroundColor: darkSemantic.phantom.surfaceAlt,
    backgroundImage: "url(/images/textures/strong100-12.png)",
    backgroundSize: "80px 80px",
    backgroundPosition: "0% 0%",
    backgroundRepeat: "repeat",
  },
};

const noise = {
  dark: darkNoise,
  light: lightNoise,
};

export default noise;
