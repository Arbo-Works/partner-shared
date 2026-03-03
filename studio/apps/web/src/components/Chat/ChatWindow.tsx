import { useCallback, useEffect } from "react";
import {
  useAgent,
  useSessionContext,
  useSessionMessages,
} from "@livekit/components-react";
import { Stack, SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import AssistantMessage from "@/components/Chat/AssistantMessage";
import { useScrollToLastUserMessage } from "@/components/Chat/hooks/useScrollToLastUserMessage";
import UserMessage from "@/components/Chat/UserMessage";
import RiveThinking from "@/components/RiveThinking";

const messagePaddingTop = "1.5rem";

type ChatWindowProps = {
  contentMaxWidth?: string;
  sx?: SxProps;
  persistScrollKey?: string;
};

export default function ChatWindow({
  contentMaxWidth,
  sx,
  persistScrollKey,
}: ChatWindowProps) {
  const session = useSessionContext();
  const agent = useAgent(session);
  const { messages } = useSessionMessages();
  const { scrollContainerRef, lastUserMessageRef } =
    useScrollToLastUserMessage(messages);

  const showThinkingIndicator = agent.state === "thinking";

  // Restore scroll position on mount
  useEffect(() => {
    if (!persistScrollKey) return;
    const element = scrollContainerRef.current;
    if (!element) return;
    const stored = sessionStorage.getItem(persistScrollKey);
    if (!stored) return;
    const y = parseInt(stored, 10);
    if (Number.isFinite(y)) {
      requestAnimationFrame(() => {
        element.scrollTop = y;
      });
    }
  }, [persistScrollKey, scrollContainerRef]);

  // Persist scroll position on scroll
  const handleScroll = useCallback(() => {
    if (!persistScrollKey) return;
    const element = scrollContainerRef.current;
    if (!element) return;
    sessionStorage.setItem(persistScrollKey, String(element.scrollTop));
  }, [persistScrollKey, scrollContainerRef]);

  return (
    <Box
      ref={scrollContainerRef}
      onScroll={handleScroll}
      sx={{
        flex: 1,
        overflow: "auto",
        containerName: "chat-window",
        containerType: "size",
        height: "100%",
        px: "1rem",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: contentMaxWidth,
          marginX: "auto",
          paddingBottom: "5rem",
        }}
      >
        <Stack sx={{ width: "100%" }}>
          {messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1;
            if (message.from?.isLocal) {
              return (
                <Box
                  ref={isLastMessage ? lastUserMessageRef : null}
                  key={message.id}
                  sx={{
                    pt: messagePaddingTop,
                    display: "flex",
                    justifyContent: "flex-end",
                    pl: {
                      "@": "4rem",
                      "@50.8": "8rem",
                    },
                    pr: "1rem",
                  }}
                >
                  <UserMessage data={message} />
                </Box>
              );
            }

            const shouldFillHeight = isLastMessage && !showThinkingIndicator;
            return (
              <Box
                key={message.id}
                sx={{
                  pt: messagePaddingTop,
                  pl: "1rem",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  overflowX: "auto",
                  pr: {
                    "@": "1rem",
                    "@50.8": "4.5rem",
                  },
                  minHeight: shouldFillHeight
                    ? "calc(100cqh - 0.5rem)"
                    : "auto",
                }}
              >
                <AssistantMessage data={message} isFinal={isLastMessage} />
              </Box>
            );
          })}
          {showThinkingIndicator && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                pt: messagePaddingTop,
                mt: "1rem",
                pl: "1rem",
                alignItems: "flex-start",
                height: "calc(100cqh - 2rem)",
              }}
            >
              <RiveThinking sx={{ width: "1.5rem", height: "1.5rem" }} />
            </Box>
          )}
          <Box
            sx={{
              minHeight: "calc(100cqh - 0.5rem)",
            }}
          ></Box>
        </Stack>
      </Box>
    </Box>
  );
}
