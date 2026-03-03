"use client";

import {
  Box,
  Icon,
  IconButton,
  Stack,
  Toolbar as MuiToolbar,
  useMediaQuery,
} from "@mui/material";
import { IconMenuDeep } from "@tabler/icons-react";

import theme from "@/theme";

export function Toolbar(props: { toggleSidebar: () => void }) {
  const { toggleSidebar } = props;
  const showSidebarToggle = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MuiToolbar component="header">
      <Stack direction="row" width="100%" alignItems="center">
        {showSidebarToggle && (
          <IconButton
            sx={{ transition: "all 0.3s ease-in-out" }}
            onClick={toggleSidebar}
          >
            <Icon component={IconMenuDeep} sx={{ transform: "scaleX(-1)" }} />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
    </MuiToolbar>
  );
}
