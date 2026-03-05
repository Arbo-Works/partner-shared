"use client";

import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  Toolbar as MuiToolbar,
  useMediaQuery,
} from "@mui/material";
import { IconMenuDeep } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import theme from "@/theme";

export function Toolbar(props: { toggleSidebar: () => void }) {
  const t = useTranslations("components.Navigation.Toolbar");
  const router = useRouter();
  const { toggleSidebar } = props;
  const showSidebarToggle = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogout = () => {
    sessionStorage.removeItem("jwt_token");
    router.push("/");
  };

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
        <Button
          onClick={handleLogout}
          sx={{
            color: "content.default",
            typography: "buttonSmall",
          }}
        >
          {t("logout")}
        </Button>
      </Stack>
    </MuiToolbar>
  );
}
