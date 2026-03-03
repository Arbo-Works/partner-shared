import { useEffect, useRef } from "react";
import { ReceivedMessage } from "@livekit/components-react";

/**
 * Custom hook that automatically scrolls to the last user message when a new user message is added.
 * This is useful for keeping the chat focused on the most recent user interaction.
 */
export function useScrollToLastUserMessage(messages: ReceivedMessage[]) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastUserMessageRef = useRef<HTMLDivElement>(null);
  const previousUserMessageCountRef = useRef(0);

  useEffect(() => {
    if (!scrollContainerRef.current || messages.length === 0) return;

    // Count current user messages
    const currentUserMessageCount = messages.filter(
      (message) => message.from?.isLocal,
    ).length;

    // Only scroll if there's a new user message
    if (currentUserMessageCount <= previousUserMessageCountRef.current) {
      return;
    }

    // Update the ref for next comparison
    previousUserMessageCountRef.current = currentUserMessageCount;

    // Find the last user message
    const lastUserMessageId = messages.findLast(
      (message) => message.from?.isLocal,
    )?.id;
    if (!lastUserMessageId) return;

    lastUserMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, lastUserMessageRef]);

  return {
    scrollContainerRef,
    lastUserMessageRef,
  };
}
