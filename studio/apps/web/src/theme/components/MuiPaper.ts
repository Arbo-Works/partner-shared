import type { Components, Theme } from "@mui/material/styles";
import * as z from "zod";

const PaperVariant = z.enum([
  "primary",
  "primaryAlt",
  "secondary",
  "secondaryAlt",
  "canvas",
  "surface",
  "surfaceEmphasis",
  "phantomSurface",
  "phantomSurfaceAlt",

  "edgeDefault",
  "edgeStrong",
  "edgeSubtle",

  "bezelDefault",
  "bezelSubtle",

  "rimDefault",

  "valid",
  "invalid",
]);

type PaperVariant = z.infer<typeof PaperVariant>;

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    primary: true;
    primaryAlt: true;
    secondary: true;
    secondaryAlt: true;
    canvas: true;
    surface: true;
    surfaceEmphasis: true;
    phantomSurface: true;
    phantomSurfaceAlt: true;

    edgeDefault: true;
    edgeStrong: true;
    edgeSubtle: true;

    bezelDefault: true;
    bezelSubtle: true;

    rimDefault: true;

    valid: true;
    invalid: true;
  }
}

const MuiPaper: Components<Theme>["MuiPaper"] = {
  defaultProps: {
    elevation: 0,
  },
  variants: [
    {
      props: { variant: PaperVariant.enum.primary },
      style: ({ theme }) => theme.vars.palette.background.noise.primary,
    },
    {
      props: { variant: PaperVariant.enum.primaryAlt },
      style: ({ theme }) => theme.vars.palette.background.noise.primaryAlt,
    },
    {
      props: { variant: PaperVariant.enum.secondary },
      style: ({ theme }) => theme.vars.palette.background.noise.secondary,
    },
    {
      props: { variant: PaperVariant.enum.secondaryAlt },
      style: ({ theme }) => theme.vars.palette.background.noise.secondaryAlt,
    },
    {
      props: { variant: PaperVariant.enum.canvas },
      style: ({ theme }) => theme.vars.palette.background.noise.canvas,
    },
    {
      props: { variant: PaperVariant.enum.surface },
      style: ({ theme }) => theme.vars.palette.background.noise.surface,
    },
    {
      props: { variant: PaperVariant.enum.surfaceEmphasis },
      style: ({ theme }) => theme.vars.palette.background.noise.surfaceEmphasis,
    },
    {
      props: { variant: PaperVariant.enum.phantomSurface },
      style: ({ theme }) => theme.vars.palette.background.noise.phantomSurface,
    },
    {
      props: { variant: PaperVariant.enum.phantomSurfaceAlt },
      style: ({ theme }) =>
        theme.vars.palette.background.noise.phantomSurfaceAlt,
    },
    {
      props: { variant: PaperVariant.enum.edgeDefault },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.edge.default,
      }),
    },
    {
      props: { variant: PaperVariant.enum.edgeStrong },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.edge.strong,
      }),
    },
    {
      props: { variant: PaperVariant.enum.edgeSubtle },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.edge.subtle,
      }),
    },
    {
      props: { variant: PaperVariant.enum.bezelDefault },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.bezel.default,
      }),
    },
    {
      props: { variant: PaperVariant.enum.bezelSubtle },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.bezel.subtle,
      }),
    },
    {
      props: { variant: PaperVariant.enum.rimDefault },
      style: ({ theme }) => ({
        backgroundImage: theme.vars.palette.background.border.rim.default,
      }),
    },
    {
      props: { variant: PaperVariant.enum.valid },
      style: ({ theme }) => theme.vars.palette.background.noise.valid,
    },
    {
      props: { variant: PaperVariant.enum.invalid },
      style: ({ theme }) => theme.vars.palette.background.noise.invalid,
    },
  ],
};

export default MuiPaper;
