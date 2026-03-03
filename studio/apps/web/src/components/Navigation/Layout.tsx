"use client";

import { useState } from "react";
import { Box, Stack } from "@mui/material";

import { Sidebar } from "@/components/Navigation/Sidebar";
import { Toolbar } from "@/components/Navigation/Toolbar";

export const NavigationLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Stack
      direction="row"
      sx={{
        height: "100%",
        overflowY: "hidden",
        p: {
          xs: 0,
          sm: "0 0.5rem 0.5rem 0",
        },
      }}
    >
      <Stack sx={{ display: "flex", flex: 1 }}>
        <Toolbar toggleSidebar={toggleSidebar} />

        <Stack sx={{ flex: 1 }} direction="row">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <Box sx={{ flex: 1 }}>{children}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
