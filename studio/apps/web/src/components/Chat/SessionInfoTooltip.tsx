"use client";

import React from "react";
import {
  useAgent,
  UseAgentReturn,
  useSessionContext,
  UseSessionReturn,
} from "@livekit/components-react";
import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/system";
import {
  IconAlertSquareRoundedFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { ConnectionState } from "livekit-client";

const getIcon = (session: UseSessionReturn, agent: UseAgentReturn) => {
  const isSessionOrAgentDisconnected =
    session.connectionState === ConnectionState.Disconnected ||
    !agent.isConnected;

  const isLoading =
    session.connectionState === ConnectionState.Connecting ||
    agent.isPending ||
    agent.state === "pre-connect-buffering";

  if (isLoading) {
    return <CircularProgress size="1rem" />;
  }

  if (isSessionOrAgentDisconnected) {
    return (
      <IconAlertSquareRoundedFilled
        style={{ color: "var(--mui-palette-status-invalid)" }}
      />
    );
  }

  return (
    <IconCircleCheckFilled
      style={{ color: "var(--mui-palette-content-hint)" }}
    />
  );
};

export const SessionInfoTooltip = () => {
  const session = useSessionContext();
  const agent = useAgent(session);

  return (
    <Tooltip
      leaveDelay={1000}
      title={
        <Stack gap="0.5rem">
          <InfoItem
            label="Session connection state"
            value={session.connectionState}
          />

          <InfoItem
            label="E2EE Enabled"
            value={session.room.isE2EEEnabled ? "Yes" : "No"}
          />

          <InfoItem label="Room name" value={session.room.name} />

          <InfoItem
            label="Agent connection state"
            value={agent.isConnected ? "connected" : "disconnected"}
          />
          <InfoItem label="Agent state" value={agent.state} />

          <InfoItem label="Agent name" value={agent.name} />
          {!agent.isConnected && agent.failureReasons ? (
            <InfoItem
              label="Agent failure reasons"
              value={agent.failureReasons.join(", ")}
            />
          ) : null}
        </Stack>
      }
      placement="top"
      arrow
    >
      <Box sx={{ paddingX: "0.25rem" }}>{getIcon(session, agent)}</Box>
    </Tooltip>
  );
};

const InfoItem = ({ label, value }: { label: string; value?: string }) => {
  return (
    <Stack>
      <Typography variant="fine2" color="content.hint">
        {label}
      </Typography>
      <Typography variant="fine1">{value ? value : "--"}</Typography>
    </Stack>
  );
};
