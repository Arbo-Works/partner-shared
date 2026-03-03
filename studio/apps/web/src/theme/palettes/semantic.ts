import * as z from "zod";

const STheme = z.enum([
  "red",
  "pink",
  "purple",
  "indigo",
  "cobalt",
  "cyan",
  "teal",
  "green",
  "lime",
  "gold",
  "orange",
  "brown",
]);

type STheme = z.infer<typeof STheme>;

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides
    extends
      Record<`stheme.${STheme}`, true>,
      Record<`stheme.${STheme}Alt`, true> {
    "accent.primary": true;
    "accent.primaryAlt": true;
    "accent.secondary": true;
    "accent.secondaryAlt": true;
    "accent.onAccent": true;

    "agnosticLight.default": true;
    "agnosticLight.emphasis": true;
    "agnosticLight.hint": true;
    "agnosticLight.surface": true;
    "agnosticLight.surfaceAlt": true;

    "agnosticDark.default": true;
    "agnosticDark.emphasis": true;
    "agnosticDark.hint": true;
    "agnosticDark.surface": true;
    "agnosticDark.surfaceAlt": true;

    "content.default": true;
    "content.emphasis": true;
    "content.hint": true;
    "content.action": true;
    "content.highlight": true;

    "phantom.default": true;
    "phantom.emphasis": true;
    "phantom.hint": true;
    "phantom.surface": true;
    "phantom.surfaceAlt": true;
    "phantom.edge": true;

    "scrim.1": true;
    "scrim.2": true;
    "scrim.5": true;
    "scrim.10": true;
    "scrim.20": true;
    "scrim.30": true;
    "scrim.40": true;
    "scrim.50": true;
    "scrim.60": true;
    "scrim.70": true;
    "scrim.80": true;
    "scrim.90": true;
    "scrim.100": true;

    "status.valid": true;
    "status.validAlt": true;
    "status.invalid": true;
    "status.invalidAlt": true;
    "status.attention": true;
    "status.attentionAlt": true;

    "surface.default": true;
    "surface.emphasis": true;
    "surface.canvas": true;
    "surface.backdrop": true;
  }
}

type AccentColors = {
  primary: string;
  primaryAlt: string;
  secondary: string;
  secondaryAlt: string;
  onAccent: string;
};

type AgnosticLightColors = {
  default: string;
  emphasis: string;
  hint: string;
  surface: string;
  surfaceAlt: string;
};

type AgnosticDarkColors = {
  default: string;
  emphasis: string;
  hint: string;
  surface: string;
  surfaceAlt: string;
};

type ContentColors = {
  default: string;
  emphasis: string;
  hint: string;
  highlight: string;
  action: string;
};

type PhantomColors = {
  default: string;
  emphasis: string;
  hint: string;
  surface: string;
  surfaceAlt: string;
  edge: string;
};

type ScrimColors = {
  1: string;
  2: string;
  5: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
};

type StatusColors = {
  valid: string;
  validAlt: string;
  invalid: string;
  invalidAlt: string;
  attention: string;
  attentionAlt: string;
};

type SurfaceColors = {
  default: string;
  emphasis: string;
  canvas: string;
  backdrop: string;
};

type SThemeColors = Record<STheme, string> & Record<`${STheme}Alt`, string>;

export type SemanticPalette = {
  accent: AccentColors;
  agnosticDark: AgnosticDarkColors;
  agnosticLight: AgnosticLightColors;
  content: ContentColors;
  phantom: PhantomColors;
  scrim: ScrimColors;
  status: StatusColors;
  surface: SurfaceColors;
  stheme: SThemeColors;
};

const lightSemantic: SemanticPalette = {
  accent: {
    primary: "#6C6CF5",
    primaryAlt: "#877FF5",
    secondary: "#EBE8E6",
    secondaryAlt: "#757273",
    onAccent: "#FFFFFF",
  },
  agnosticLight: {
    default: "rgba(255, 255, 255, 0.8)",
    emphasis: "rgba(255, 255, 255, 1)",
    hint: "rgba(255, 255, 255, 0.4)",
    surface: "rgba(255, 255, 255, 0.16)",
    surfaceAlt: "rgba(255, 255, 255, 0.08)",
  },
  agnosticDark: {
    default: "rgba(0, 0, 0, 0.8)",
    emphasis: "rgba(0, 0, 0, 1)",
    hint: "rgba(0, 0, 0, 0.4)",
    surface: "rgba(0, 0, 0, 0.24)",
    surfaceAlt: "rgba(0, 0, 0, 0.12)",
  },
  content: {
    default: "#332D2F",
    emphasis: "#292124",
    hint: "#8A8687",
    action: "#877FF5",
    highlight: "#F38460",
  },
  phantom: {
    default: "rgba(20, 19, 19, 0.8)",
    emphasis: "rgba(20, 19, 19, 1)",
    hint: "rgba(20, 19, 19, 0.48)",
    surface: "rgba(20, 19, 19, 0.32)",
    surfaceAlt: "rgba(20, 19, 19, 0.2)",
    edge: "rgba(20, 19, 19, 0.09)",
  },
  scrim: {
    1: "rgba(0, 0, 0, 0.01)",
    2: "rgba(0, 0, 0, 0.02)",
    5: "rgba(0, 0, 0, 0.05)",
    10: "rgba(0, 0, 0, 0.1)",
    20: "rgba(0, 0, 0, 0.2)",
    30: "rgba(0, 0, 0, 0.3)",
    40: "rgba(0, 0, 0, 0.4)",
    50: "rgba(0, 0, 0, 0.5)",
    60: "rgba(0, 0, 0, 0.6)",
    70: "rgba(0, 0, 0, 0.7)",
    80: "rgba(0, 0, 0, 0.8)",
    90: "rgba(0, 0, 0, 0.9)",
    100: "#000000",
  },
  status: {
    valid: "#259989",
    validAlt: "#3FB09D",
    invalid: "#DB5860",
    invalidAlt: "#F07383",
    attention: "#FA8F5A",
    attentionAlt: "#FFBC8F",
  },
  surface: {
    default: "#EDEBEC",
    emphasis: "#DBD7D7",
    canvas: "#FAFAFA",
    backdrop: "#F0F0F0",
  },
  stheme: {
    red: "#BD2A2A",
    redAlt: "#F55353",
    pink: "#CC3983",
    pinkAlt: "#F26BAE",
    purple: "#823AC2",
    purpleAlt: "#A95EEB",
    indigo: "#4253EB",
    indigoAlt: "#6271F5",
    cobalt: "#0476B0",
    cobaltAlt: "#38AFEB",
    cyan: "#007A87",
    cyanAlt: "#18B6C7",
    teal: "#068F7D",
    tealAlt: "#37AD9E",
    green: "#2F7536",
    greenAlt: "#5EBD67",
    lime: "#7C8A21",
    limeAlt: "#B1BD62",
    gold: "#8F711F",
    goldAlt: "#C7A548",
    orange: "#B8651D",
    orangeAlt: "#E09451",
    brown: "#805140",
    brownAlt: "#AD705A",
  },
};

const darkSemantic: SemanticPalette = {
  accent: {
    primary: "#877FF5",
    primaryAlt: "#A396FA",
    secondary: "#464A4F",
    secondaryAlt: "#53585E",
    onAccent: "#FFFFFF",
  },
  // agnostic colors are the same for light and dark
  agnosticLight: lightSemantic.agnosticLight,
  agnosticDark: lightSemantic.agnosticDark,
  content: {
    default: "#A5AFB8",
    emphasis: "#E6F0F5",
    hint: "#53585E",
    action: "#A396FA",
    highlight: "#FFE4AD",
  },
  phantom: {
    default: "rgba(240, 250, 255, 0.76)",
    emphasis: "rgba(240, 250, 255, 1)",
    hint: "rgba(240, 250, 255, 0.36)",
    surface: "rgba(240, 250, 255, 0.12)",
    surfaceAlt: "rgba(240, 250, 255, 0.06)",
    edge: "rgba(240, 250, 255, 0.03)",
  },
  scrim: {
    1: "rgba(255, 255, 255, 0.01)",
    2: "rgba(255, 255, 255, 0.02)",
    5: "rgba(255, 255, 255, 0.05)",
    10: "rgba(255, 255, 255, 0.1)",
    20: "rgba(255, 255, 255, 0.2)",
    30: "rgba(255, 255, 255, 0.3)",
    40: "rgba(255, 255, 255, 0.4)",
    50: "rgba(255, 255, 255, 0.5)",
    60: "rgba(255, 255, 255, 0.6)",
    70: "rgba(255, 255, 255, 0.7)",
    80: "rgba(255, 255, 255, 0.8)",
    90: "rgba(255, 255, 255, 0.9)",
    100: "#FFFFFF",
  },
  status: {
    valid: "#3BA395",
    validAlt: "#62BDAB",
    invalid: "#E05E67",
    invalidAlt: "#FA8C9B",
    attention: "#FFA070",
    attentionAlt: "#FCDEA2",
  },
  surface: {
    default: "#1D1F21",
    emphasis: "#303438",
    canvas: "#151617",
    backdrop: "#0A0A0A",
  },
  stheme: {
    red: "#D13636",
    redAlt: "#FF7070",
    pink: "#E04894",
    pinkAlt: "#FF80B2",
    purple: "#8E3CD6",
    purpleAlt: "#D788EB",
    indigo: "#4B59DB",
    indigoAlt: "#6B89FF",
    cobalt: "#088BCC",
    cobaltAlt: "#61BAFF",
    cyan: "#0094A3",
    cyanAlt: "#4ED1E5",
    teal: "#009985",
    tealAlt: "#40C7AC",
    green: "#31993B",
    greenAlt: "#77E586",
    lime: "#94A334",
    limeAlt: "#AED461",
    gold: "#AD8D34",
    goldAlt: "#DBCB60",
    orange: "#CC7931",
    orangeAlt: "#FFB56B",
    brown: "#855645",
    brownAlt: "#CC8A72",
  },
};

export { darkSemantic, lightSemantic };
