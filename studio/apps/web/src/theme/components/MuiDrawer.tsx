import type { Components, Theme } from "@mui/material/styles";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    paper: ({ theme, ownerState }) => ({
      backgroundColor: theme.vars.palette.surface.canvas,
      ...(ownerState.anchor === "bottom" && {
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
      }),
    }),
  },
};

export default MuiDrawer;
