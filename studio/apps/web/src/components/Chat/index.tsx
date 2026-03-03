"use client";

import { Box } from "@mui/material";
import { useTranslations } from "next-intl";

import ChatInput from "@/components/Chat/ChatInput";
import ChatWindow from "@/components/Chat/ChatWindow";
import { LivekitContext } from "@/components/Chat/LivekitContext";

export default function Chat() {
  const t = useTranslations("pages.home.HomeContent");

  return (
    <LivekitContext>
      <ChatWindow
        // persistScrollKey={`home-chat:${sessionId}`}
        sx={{
          maxWidth: "56rem",
          marginX: "auto",
          scrollbarColor: "transparent transparent",
        }}
      />
      <Box
        sx={{
          position: "sticky",
          bottom: "0rem",
          width: "100%",
          maxWidth: "56rem",
          marginX: "auto",
          px: "1rem",
          pb: "1rem",
          backgroundColor: "surface.canvas",
        }}
      >
        <ChatInput placeholder={t("inputPlaceholder")} />
      </Box>
    </LivekitContext>
  );
}
