import * as React from "react";
import type { Components, Theme } from "@mui/material/styles";
import { IconSlash } from "@tabler/icons-react";

const MuiBreadcrumbs: Components<Theme>["MuiBreadcrumbs"] = {
  defaultProps: {
    separator: <IconSlash />,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        ...theme.typography.fine1,
        color: theme.vars.palette.accent.secondary,
      };
    },
    separator: ({ theme }) => {
      return {
        color: theme.vars.palette.accent.secondary,
        fontSize: "1.25rem",
      };
    },
    li: ({ theme }) => {
      return {
        ...theme.typography.fine1,
        color: theme.vars.palette.accent.secondary,
        "& a": {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: theme.vars.palette.content.default,
        },
        p: {
          ...theme.typography.fine1,
        },
        svg: {
          width: "1.25rem",
          height: "1.25rem",
        },
      };
    },
  },
};

export default MuiBreadcrumbs;
