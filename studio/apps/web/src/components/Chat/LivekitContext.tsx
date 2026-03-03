"use client";

import * as React from "react";
import { useEffect, useMemo } from "react";
import {
  GetRtcAccessTokenResponse,
  StudioService,
} from "@arta/studio-proto/gen/studio_pb";
import { useQuery } from "@connectrpc/connect-query";
import { SessionProvider, useSession } from "@livekit/components-react";
import { Box } from "@mui/material";
import { ExternalE2EEKeyProvider, Room, TokenSource } from "livekit-client";

import RiveLoader from "@/components/RiveLoader";

export const LivekitContext = ({ children }: { children: React.ReactNode }) => {
  const { data, isPending } = useQuery(StudioService.method.getRtcAccessToken, {
    forceEncryption: process.env.NEXT_PUBLIC_FORCE_LIVEKIT_E2EE === "true",
  });

  if (isPending) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <RiveLoader sx={{ width: "5rem", height: "5rem" }} />
      </Box>
    );
  }

  if (!data) {
    return null;
  }

  return <Provider token={data}>{children}</Provider>;
};

type LivekitContextProps = {
  children: React.ReactNode;
  token: GetRtcAccessTokenResponse;
};

const Provider = (props: LivekitContextProps) => {
  const { children, token } = props;

  const room = useMemo(() => {
    let encryptionOptions = undefined;

    if (
      typeof token.e2eEncryptionKey === "string" &&
      token.e2eEncryptionKey.length > 0
    ) {
      const provider = new ExternalE2EEKeyProvider();
      // Decode the base64-encoded string
      const stringKey = atob(token.e2eEncryptionKey);
      provider.setKey(stringKey);

      encryptionOptions = {
        keyProvider: provider,
        worker: new Worker(
          new URL("livekit-client/e2ee-worker", import.meta.url),
        ),
      };
    } else if (
      token.e2eEncryptionKey &&
      (token.e2eEncryptionKey as unknown as { length: number }).length > 0
    ) {
      // Fallback for Uint8Array if it still exists at runtime despite TS type
      const provider = new ExternalE2EEKeyProvider();
      const stringKey = new TextDecoder().decode(
        token.e2eEncryptionKey as unknown as Uint8Array,
      );
      provider.setKey(stringKey);

      encryptionOptions = {
        keyProvider: provider,
        worker: new Worker(
          new URL("livekit-client/e2ee-worker", import.meta.url),
        ),
      };
    }

    return new Room({
      ...(typeof window !== "undefined" && encryptionOptions
        ? {
            encryption: encryptionOptions,
          }
        : {}),
    });
  }, [token]);

  const session = useSession(
    TokenSource.literal({
      serverUrl: token.signalingServerUrl,
      participantToken: token.accessToken,
    }),
    { room: room },
  );

  useEffect(() => {
    session.start({
      tracks: {
        // Join the room without microphone enabled
        // This is only relevant if the user has granted microphone permissions, otherwise the track won't be published anyway
        microphone: {
          enabled: false,
        },
      },
    });
    return () => {
      session.end();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SessionProvider session={session}>{children}</SessionProvider>;
};
