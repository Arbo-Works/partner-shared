"use client";

import React from "react";
import { useAgent, useSessionContext } from "@livekit/components-react";
import { CircularProgress, IconButton, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/system";
import {
  IconAlertSquareRoundedFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

import { useLivekitState } from "@/components/Chat/hooks/useLivekitState";

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
      <IconButton disableRipple>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

const Icon = () => {
  const { isLoading, isDisconnected } = useLivekitState();

  if (isLoading) {
    return <CircularProgress size="1.25rem" />;
  }

  if (isDisconnected) {
    return (
      <IconAlertSquareRoundedFilled
        size="1.25rem"
        style={{ color: "var(--mui-palette-status-invalid)" }}
      />
    );
  }

  return (
    <IconCircleCheckFilled
      size="1.25rem"
      style={{ color: "var(--mui-palette-content-hint)" }}
    />
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
