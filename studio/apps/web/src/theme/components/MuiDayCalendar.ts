import type { Components, Theme } from "@mui/material/styles";

const MuiDayCalendar: Components<Theme>["MuiDayCalendar"] = {
  styleOverrides: {
    weekDayLabel: ({ theme }) => {
      return {
        ...theme.typography.fine1Em,
      };
    },
  },
};

export default MuiDayCalendar;
