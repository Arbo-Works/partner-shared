"use client";

import { ReceivedMessage } from "@livekit/components-react";
import { IconButton, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import {
  IconCopy,
  IconShare,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { toast } from "sonner";

import Markdown from "@/components/Markdown";

export default function AssistantMessage({
  data,
  isFinal,
}: {
  data: ReceivedMessage;
  isFinal: boolean;
}) {
  const { id, message } = data;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Copied to clipboard");
    } catch (error) {
      console.error("Failed to copy markdown", error);
      toast.error("Failed to copy");
    }
  };

  return (
    <Box key={id} sx={{ width: "100%" }}>
      <Markdown
        data={message}
        sx={(theme) => ({
          ...theme.typography.body1,
        })}
      />

      {isFinal && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mt: "-0.5rem",
            ml: "-0.5rem",
          }}
        >
          <Stack direction="row" spacing="-0.25rem">
            <IconButton size="small" sx={{ color: "content.hint" }}>
              <IconThumbUp />
            </IconButton>
            <IconButton size="small" sx={{ color: "content.hint" }}>
              <IconThumbDown />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "content.hint" }}
              onClick={handleCopy}
              aria-label="Copy markdown"
            >
              <IconCopy />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "content.hint" }}
              aria-label="Share message"
            >
              <IconShare />
            </IconButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
