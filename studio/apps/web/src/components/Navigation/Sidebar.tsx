"use client";

import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
} from "@mui/material";
import { IconAsterisk, IconDatabase, IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Logo } from "@/components/Logo";
import { History } from "@/components/Navigation/History";
import Typography from "@/components/Typography";

export function Sidebar(props: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  const { sidebarOpen, toggleSidebar } = props;
  const t = useTranslations("components.Navigation.Sidebar");
  const menuItems = [
    {
      icon: <IconAsterisk />,
      label: t("agent"),
      href: "/agent",
    },

    {
      icon: <IconDatabase />,
      label: t("dataSources"),
      href: "/data-sources",
    },
    {
      icon: <IconSettings />,
      label: t("settings"),
      href: "/settings",
    },
  ];

  const drawerContent = (
    <Stack sx={{ flex: 1 }} spacing="1.5rem">
      <Stack direction="column" spacing="2.5rem" sx={{ flex: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo sx={{ px: "2.5rem" }} />
        </Stack>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                sx={{ p: "0.75rem 2.5rem" }}
              >
                <ListItemIcon
                  sx={(theme) => ({
                    color: theme.vars.palette.content.hint,
                    "& svg": {
                      width: "1.25rem",
                      height: "1.25rem",
                    },
                    minWidth: "2rem",
                  })}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography variant="buttonSmall" color="content.hint">
                  {item.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <History />
      </Stack>
    </Stack>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        component="aside"
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": drawerPaperStyle,
        }}
        slotProps={{
          root: { keepMounted: true }, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        component="aside"
        anchor="left"
        sx={{
          width: "14rem",
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": drawerPaperStyle,
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

const drawerPaperStyle = {
  width: "inherit",
  overflowX: "hidden",
  boxSizing: "border-box",
  borderRight: "none",
  backgroundColor: "surface.backdrop",
  py: "3.5rem",
};
