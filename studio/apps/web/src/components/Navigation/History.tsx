"use client";

import * as React from "react";
import { List, ListItem, ListItemButton, Stack } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Typography from "@/components/Typography";

const dummyData = [
  {
    label: "Portfolio Recap",
    href: "/history/1",
  },
  {
    label: "SP Calculation Guide",
    href: "/history/2",
  },
  {
    label: "NAV consultation",
    href: "/history/3",
  },
  {
    label: "Investment planner",
    href: "/history/4",
  },
];

export const History = () => {
  const t = useTranslations("components.Navigation.History");

  return (
    <Stack>
      <Typography
        variant="cappedSmall"
        color="phantom.surface"
        sx={{ px: "2.5rem" }}
      >
        {t("title")}
      </Typography>
      <List>
        {dummyData.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ p: "0.75rem 2.5rem" }}
            >
              <Typography
                variant="buttonSmall"
                color="content.hint"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {item.label}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
