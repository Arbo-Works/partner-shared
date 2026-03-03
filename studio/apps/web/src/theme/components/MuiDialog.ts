import type { Components, Theme } from "@mui/material/styles";

const MuiDialog: Components<Theme>["MuiDialog"] = {
  defaultProps: {
    slotProps: {
      paper: {
        elevation: 0,
      },
    },
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.vars.palette.surface.canvas,
      borderRadius: "1.5rem",
      border: "0.75px solid",
      borderColor: theme.vars.palette.scrim[5],
    }),
  },
};

export default MuiDialog;
