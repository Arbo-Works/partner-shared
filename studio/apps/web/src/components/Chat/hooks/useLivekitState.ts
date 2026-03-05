"use client";

import { useAgent, useSessionContext } from "@livekit/components-react";
import { ConnectionState } from "livekit-client";

export const useLivekitState = () => {
  const session = useSessionContext();
  const agent = useAgent(session);

  const isDisconnected =
    session.connectionState === ConnectionState.Disconnected ||
    !agent.isConnected;

  const isLoading =
    session.connectionState === ConnectionState.Connecting ||
    session.connectionState === ConnectionState.Reconnecting ||
    agent.isPending ||
    agent.state === "pre-connect-buffering";

  return {
    isLoading,
    isDisconnected,
  };
};
