"use client";

import { useEffect } from "react";
import { Box, BoxProps } from "@mui/material";
import { useRive, useViewModelInstanceColor } from "@rive-app/react-canvas";
import Color from "color";

import { usePalette } from "@/hooks/usePalette";

type RiveLoaderProps = BoxProps & {
  /**
   * Whether to autoplay the loader animation
   */
  autoplay?: boolean;
};

export default function RiveLoader({
  autoplay = true,
  sx,
  ...rest
}: RiveLoaderProps) {
  const { rive, RiveComponent } = useRive({
    src: "/rive/tars-loading.riv",
    stateMachines: "states",
    autoplay,
    autoBind: true,
  });

  const palette = usePalette();

  // setting colorFill (phantom.emphasis)
  const boundInstance = rive?.viewModelInstance;
  const { setRgba: setColorFill } = useViewModelInstanceColor(
    "colorFill",
    boundInstance,
  );
  useEffect(() => {
    if (palette.phantom.emphasis) {
      const [r, g, b] = Color(palette.phantom.emphasis).array();
      const a = Color(palette.phantom.emphasis).alpha();
      if (r && g && b) {
        setColorFill(r, g, b, a * 255);
      }
    }
  }, [palette.phantom.emphasis, setColorFill]);

  // setting colorAccent (accent.primary)
  const { setRgba: setColorAccent } = useViewModelInstanceColor(
    "colorAccent",
    boundInstance,
  );
  useEffect(() => {
    if (palette.accent.primary) {
      const [r, g, b] = Color(palette.accent.primary).array();
      const a = Color(palette.accent.primary).alpha();
      if (r && g && b) {
        setColorAccent(r, g, b, a * 255);
      }
    }
  }, [palette.accent.primary, setColorAccent]);

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
