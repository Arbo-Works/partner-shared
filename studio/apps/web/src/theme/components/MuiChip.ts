import type { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Chip" {
  interface ChipOwnProps {
    selected?: boolean;
  }
  interface ChipPropsColorOverrides {
    primary: true;
    secondary: true;
    phantom: true;
    phantomSecondary: true;
    phantomInvert: true;
    permalight: true;
    permadark: true;
  }
}

const MuiChip: Components<Theme>["MuiChip"] = {
  defaultProps: {
    variant: "filled",
  },
  styleOverrides: {
    root: {
      borderRadius: "62.5rem",
      border: "1.5px solid transparent",
    },
    outlined: {
      border: "1.5px solid",
    },
    sizeSmall: ({ theme }) => {
      return {
        ...theme.typography.fine2,
        height: "1.5rem",
        padding: "0.5rem 0.375rem",
      };
    },
    sizeMedium: ({ theme }) => {
      return {
        ...theme.typography.fine1,
        height: "2rem",
        padding: "0.5rem 0.4375rem",
      };
    },
  },
  variants: [
    {
      props: { variant: "filled", color: "primary", selected: false },
      style: ({ theme }) => {
        return {
          ...theme.vars.palette.background.noise.surfaceEmphasis,
          "&:hover": {
            ...theme.vars.palette.background.noise.secondary,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "primary", selected: true },
      style: ({ theme }) => {
        return {
          background: theme.vars.palette.content.emphasis,
          color: theme.vars.palette.surface.default,
          "&:hover": {
            background: theme.vars.palette.content.emphasis,
            color: theme.vars.palette.surface.default,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "secondary" },
      style: ({ theme }) => {
        return {
          ...theme.vars.palette.background.noise.secondary,
          "&:hover": {
            ...theme.vars.palette.background.noise.secondaryAlt,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "phantom" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.phantom.emphasis,
          color: theme.vars.palette.opposite.phantom.default,
          "&:hover": {
            color: theme.vars.palette.opposite.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "phantomSecondary" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.phantom.surface,
          color: theme.vars.palette.phantom.default,
          "&:hover": {
            backgroundColor: theme.vars.palette.phantom.hint,
            color: theme.vars.palette.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "phantomInvert" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.opposite.phantom.emphasis,
          color: theme.vars.palette.phantom.default,
          "&:hover": {
            color: theme.vars.palette.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "permalight" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.permadark.phantom.emphasis,
          color: theme.vars.palette.permalight.phantom.default,
          "&:hover": {
            color: theme.vars.palette.permalight.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "filled", color: "permadark" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.vars.palette.permalight.phantom.emphasis,
          color: theme.vars.palette.permadark.phantom.default,
          "&:hover": {
            color: theme.vars.palette.permadark.phantom.emphasis,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.content.emphasis,
          borderColor: theme.vars.palette.content.emphasis,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.phantom.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.content.default,
          borderColor: theme.vars.palette.content.hint,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.phantom.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "phantom" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.phantom.emphasis,
          borderColor: theme.vars.palette.phantom.default,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.phantom.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "phantomInvert" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.opposite.phantom.emphasis,
          borderColor: theme.vars.palette.opposite.phantom.default,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.opposite.phantom.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "permalight" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.permadark.phantom.emphasis,
          borderColor: theme.vars.palette.permadark.phantom.default,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.permadark.phantom.surfaceAlt,
          },
        };
      },
    },
    {
      props: { variant: "outlined", color: "permadark" },
      style: ({ theme }) => {
        return {
          color: theme.vars.palette.permalight.phantom.emphasis,
          borderColor: theme.vars.palette.permalight.phantom.default,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.vars.palette.permalight.phantom.surfaceAlt,
          },
        };
      },
    },
  ],
};

export default MuiChip;
