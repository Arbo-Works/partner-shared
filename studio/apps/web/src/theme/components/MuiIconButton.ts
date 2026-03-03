import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: "contained" | "outlined" | "text";
  }
  interface IconButtonPropsColorOverrides {
    primary: true;
    emphasis: true;
    secondary: true;
    phantom: true;
    phantomEmphasis: true;
    permalight: true;
    permadark: true;
  }
}

const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    sizeLarge: {
      padding: "0.75rem",
      "& svg": {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
    sizeMedium: {
      padding: "0.625rem",
      "& svg": {
        width: "1.25rem",
        height: "1.25rem",
      },
    },
    sizeSmall: {
      padding: "0.5rem",
      "& svg": {
        width: "1rem",
        height: "1rem",
      },
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
        };
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.surface.emphasis,
          borderColor: theme.vars.palette.surface.emphasis,
          borderWidth: "1.5px",
          borderStyle: "solid",
          "&:hover": {
            color: theme.vars.palette.phantom.default,
            borderColor: theme.vars.palette.phantom.default,
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
          borderWidth: "1.5px",
          borderStyle: "solid",
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
          borderWidth: "1.5px",
          borderStyle: "solid",
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
          borderWidth: "1.5px",
          borderStyle: "solid",
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

export default MuiIconButton;
