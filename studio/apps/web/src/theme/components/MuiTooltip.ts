import type { Components, Theme } from "@mui/material/styles";

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      ...theme.typography.fine1,
      backgroundColor: theme.vars.palette.surface.default,
      color: theme.vars.palette.content.default,
      borderRadius: "0.5rem",
      padding: "0.5rem",
    }),
    arrow: ({ theme }) => ({
      color: theme.vars.palette.surface.default,
    }),
  },
};

export default MuiTooltip;
