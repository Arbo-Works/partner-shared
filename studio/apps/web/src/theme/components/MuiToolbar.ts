import type { Components, Theme } from "@mui/material/styles";

const MuiToolbar: Components<Theme>["MuiToolbar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: "3.5rem",
      paddingLeft: "1rem",
      paddingRight: "0.5rem",
      [theme.breakpoints.up("sm")]: {
        minHeight: "3.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1rem",
      },
    }),
  },
};

export default MuiToolbar;
