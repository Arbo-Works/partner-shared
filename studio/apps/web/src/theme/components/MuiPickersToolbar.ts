import type { Components, Theme } from "@mui/material/styles";

const MuiPickersToolbar: Components<Theme>["MuiPickersToolbar"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        ...theme.typography.cappedMedium,
      };
    },
    content: ({ theme }) => {
      return {
        ...theme.typography.body1,
      };
    },
  },
};

export default MuiPickersToolbar;
