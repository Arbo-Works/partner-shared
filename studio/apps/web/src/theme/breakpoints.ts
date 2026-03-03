import { createBreakpoints } from "@mui/system";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    md: false; // removes `md` as it is not in the design system
  }
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 48,
    lg: 75,
    xl: 96,
  },
  unit: "rem",
};

export default createBreakpoints(breakpoints);
