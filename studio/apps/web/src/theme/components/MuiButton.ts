import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
    emphasis: true;
    secondary: true;
    phantom: true;
    phantomEmphasis: true;
    permalight: true;
    permadark: true;
  }
}

const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: "62.5rem",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    outlined: {
      border: "1.5px solid",
    },
    text: {
      minWidth: "auto",
      borderRadius: "0.5rem",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    textSizeMedium: { padding: "0.5rem" },
    sizeLarge: ({ theme }) => {
      return {
        ...theme.typography.buttonLarge,
        padding: "1rem 2rem",
        "& .MuiButton-icon": {
          "& svg": {
            width: "1.5rem",
            height: "1.5rem",
          },
          "& span": {
            width: "1.5rem",
            height: "1.5rem",
          },
        },
      };
    },
    sizeMedium: ({ theme }) => {
      return {
        ...theme.typography.buttonSmall,
        padding: "0.5rem 1rem",
        "& .MuiButton-startIcon": {
          marginLeft: "0",
        },
        "& .MuiButton-endIcon": {
          marginRight: "0",
        },
        "& .MuiButton-icon": {
          "& svg": {
            width: "1.25rem",
            height: "1.25rem",
          },
          "& span": {
            width: "1.25rem",
            height: "1.25rem",
          },
        },
      };
    },
    sizeSmall: ({ theme }) => {
      return {
        ...theme.typography.buttonSmall,
        padding: "0.4375rem 0.5rem",
        "& .MuiButton-icon": {
          "& svg": {
            width: "1.125rem",
            height: "1.125rem",
          },
          "& span": {
            width: "1.125rem",
            height: "1.125rem",
          },
        },
      };
    },
  },
  variants: [
    {
      props: { variant: "contained", color: "primary" },
      style: ({ theme }) => {
        return {
          ...theme.vars.palette.background.noise.primary,
          color: theme.vars.palette.accent.onAccent,
          "&:hover": {
            ...theme.vars.palette.background.noise.primaryAlt,
          },
          "&.Mui-disabled": {
            ...theme.vars.palette.background.noise.surfaceEmphasis,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "emphasis" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.content.emphasis,
          color: theme.vars.palette.surface.default,
          "&:hover": {
            backgroundColor: theme.vars.palette.scrim[100],
          },
          "&.Mui-disabled": {
            ...theme.vars.palette.background.noise.surfaceEmphasis,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "secondary" },
      style: ({ theme }) => {
        return {
          ...theme.vars.palette.background.noise.secondary,
          color: theme.vars.palette.content.emphasis,
          "&:hover": {
            ...theme.vars.palette.background.noise.secondaryAlt,
            color: theme.vars.palette.phantom.emphasis,
          },
          "&.Mui-disabled": {
            ...theme.vars.palette.background.noise.surfaceEmphasis,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "phantom" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.phantom.surface,
          color: theme.vars.palette.phantom.default,
          "&:hover": {
            color: theme.vars.palette.phantom.emphasis,
            backgroundColor: theme.vars.palette.phantom.hint,
          },
          "&.Mui-disabled": {
            ...theme.vars.palette.background.noise.phantomSurfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "phantomEmphasis" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.phantom.emphasis,
          color: theme.vars.palette.surface.backdrop,
          "&:hover": {
            backgroundColor: theme.vars.palette.scrim[100],
          },
          "&.Mui-disabled": {
            ...theme.vars.palette.background.noise.phantomSurfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "permalight" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.agnosticLight.emphasis,
          color: theme.vars.palette.agnosticDark.default,
          "&:hover": {
            color: theme.vars.palette.agnosticDark.emphasis,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.vars.palette.agnosticLight.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "contained", color: "permadark" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.agnosticDark.emphasis,
          color: theme.vars.palette.agnosticLight.default,
          "&:hover": {
            color: theme.vars.palette.agnosticLight.emphasis,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.vars.palette.agnosticDark.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.content.default,
          borderColor: theme.vars.palette.content.default,
          "&:hover": {
            color: theme.vars.palette.surface.default,
            borderColor: theme.vars.palette.content.emphasis,
            backgroundColor: theme.vars.palette.content.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "phantom" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.phantom.emphasis,
          borderColor: theme.vars.palette.phantom.emphasis,
          "&:hover": {
            color: theme.vars.palette.surface.backdrop,
            borderColor: theme.vars.palette.scrim[100],
            backgroundColor: theme.vars.palette.scrim[100],
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "permalight" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.agnosticLight.emphasis,
          borderColor: theme.vars.palette.agnosticLight.emphasis,
          "&:hover": {
            color: theme.vars.palette.agnosticDark.default,
            backgroundColor: theme.vars.palette.agnosticLight.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "permadark" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.agnosticDark.emphasis,
          borderColor: theme.vars.palette.agnosticDark.emphasis,
          "&:hover": {
            color: theme.vars.palette.agnosticLight.default,
            backgroundColor: theme.vars.palette.agnosticDark.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "primary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.accent.primary,
          "&:hover": {
            color: theme.vars.palette.content.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "secondary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.content.default,
          "&:hover": {
            color: theme.vars.palette.content.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "phantom" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.phantom.default,
          "&:hover": {
            color: theme.vars.palette.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "permalight" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.agnosticLight.default,
          "&:hover": {
            color: theme.vars.palette.agnosticLight.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "text", color: "permadark" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.agnosticDark.default,
          "&:hover": {
            color: theme.vars.palette.agnosticDark.emphasis,
          },
        };
      },
    },
  ],
};

export default MuiButton;
