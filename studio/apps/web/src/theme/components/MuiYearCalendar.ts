import type { Components, Theme } from "@mui/material/styles";

const MuiYearCalendar: Components<Theme>["MuiYearCalendar"] = {
  styleOverrides: {
    button: ({ theme }) => {
      return {
        ...theme.typography.fine1,
      };
    },
  },
};

export default MuiYearCalendar;
