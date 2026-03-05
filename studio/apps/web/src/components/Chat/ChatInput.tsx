"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@livekit/components-react/hooks";
import { Box, IconButton, Stack, TextField } from "@mui/material";

import { useLivekitState } from "@/components/Chat/hooks/useLivekitState";
import { MicrophoneToggle } from "@/components/Chat/MicrophoneToggle";
import { SessionInfoTooltip } from "@/components/Chat/SessionInfoTooltip";
import { SpeakerToggle } from "@/components/Chat/SpeakerToggle";
import RiveSendIcon, { RiveSendIconRef } from "@/components/RiveSendIcon";
import Typography from "@/components/Typography";
import { usePalette } from "@/hooks/usePalette";
import theme from "@/theme";

type ChatInputProps = {
  placeholder?: string;
};

export default function ChatInput({
  placeholder = "Type a question or request",
}: ChatInputProps) {
  const { send } = useChat();
  const { isLoading, isDisconnected } = useLivekitState();
  const disabled = isDisconnected;

  const palette = usePalette();
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const riveSendIconRef = useRef<RiveSendIconRef | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      send?.(message.trim());
      setMessage("");
      riveSendIconRef.current?.send();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const el = inputRef.current as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null;
    const hasSelection = !!el && el.selectionStart !== el.selectionEnd;
    const isEmpty = message.trim().length === 0;

    if (e.key === "Backspace" && isEmpty && !hasSelection) {
      e.preventDefault();
      return;
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Focus on mount and whenever the input becomes enabled again
  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const isInputEmpty = message.trim() === "";

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        ...theme.vars.palette.background.noise.phantomSurfaceAlt,
        borderRadius: "2rem",
        padding: "0.75rem 1rem",
        borderStyle: "solid",
        borderWidth: "1.5px",
        borderColor: "phantom.edge",
        backgroundColor: "treatment.chatBubble",
      }}
    >
      <Stack direction="row" gap="0.25rem" alignItems="center">
        <SessionInfoTooltip />

        {isLoading ? (
          <Typography
            sx={{
              width: "100%",
              fontStyle: "italic",
              color: "content.hint",
            }}
          >
            Connecting
          </Typography>
        ) : (
          <TextField
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            inputRef={inputRef}
            multiline
            maxRows={3}
            variant="standard"
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: isInputEmpty ? "content.default" : "content.emphasis",
                typography: "body1",
              },
            }}
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />
        )}

        <Stack direction="row" spacing="0.25rem" alignItems="center">
          <MicrophoneToggle />
          <SpeakerToggle />
          <IconButton
            size="medium"
            variant={isInputEmpty ? "text" : "contained"}
            color="primary"
            disabled={disabled}
            onClick={handleSubmit}
          >
            <RiveSendIcon
              ref={riveSendIconRef}
              color={
                isInputEmpty ? palette.content.hint : palette.content.emphasis
              }
              sx={{
                width: "1.25rem",
                height: "1.25rem",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
