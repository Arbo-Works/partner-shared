import type { Components, Theme } from "@mui/material/styles";

const MuiPickersCalendarHeader: Components<Theme>["MuiPickersCalendarHeader"] =
  {
    styleOverrides: {
      label: ({ theme }) => {
        return {
          ...theme.typography.headline1Em,
          color: theme.vars.palette.content.emphasis,
        };
      },
    },
  };

export default MuiPickersCalendarHeader;
