import type { Components, Theme } from "@mui/material/styles";

const MuiPickersDay: Components<Theme>["MuiPickersDay"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        ...theme.typography.fine1,
      };
    },
  },
};

export default MuiPickersDay;
