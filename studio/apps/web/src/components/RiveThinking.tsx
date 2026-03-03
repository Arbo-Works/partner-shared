"use client";

import { useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import * as Sentry from "@sentry/nextjs";

import { useFinalMode } from "@/hooks/useFinalMode";

type RiveThinkingProps = BoxProps & {
  /**
   * Whether to autoplay the thinking animation
   */
  autoplay?: boolean;
};

export default function RiveThinking({
  autoplay = true,
  sx,
  ...rest
}: RiveThinkingProps) {
  const { rive, RiveComponent } = useRive({
    src: "/rive/tars-thinking.riv",
    stateMachines: "states",
    artboard: "stage",
    autoplay,
  });

  const colorScheme = useFinalMode();

  // setting lightmode input state based on color scheme
  const lightmodeInput = useStateMachineInput(rive, "states", "lightmode");
  useEffect(() => {
    if (!lightmodeInput) return;
    try {
      // runtimeInput inside lightmodeInput can be null briefly, and a TypeError is thrown
      lightmodeInput.value = colorScheme === "light";
    } catch (e) {
      // ignore if Rive isn't ready yet; hook will rerun once it is
      if (e instanceof TypeError) return;
      Sentry.captureException(e);
    }
  }, [colorScheme, lightmodeInput]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        ...sx,
      }}
      {...rest}
    >
      <RiveComponent
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
