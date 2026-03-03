"use client";

import { forwardRef, useEffect, useImperativeHandle } from "react";
import { Box, BoxProps } from "@mui/material";
import {
  useRive,
  useStateMachineInput,
  useViewModelInstanceColor,
} from "@rive-app/react-canvas";
import Color from "color";

type RiveSendIconProps = BoxProps & {
  color?: string;
  size?: string;
};

export type RiveSendIconRef = {
  fill: () => void;
  unfill: () => void;
  send: () => void;
};

const RiveSendIcon = forwardRef<RiveSendIconRef, RiveSendIconProps>(
  ({ color, size, sx, ...rest }, ref) => {
    const { rive, RiveComponent } = useRive({
      src: "/rive/iconpack-composer.riv",
      stateMachines: "states",
      artboard: "iconText",
      autoplay: true,
      autoBind: true,
    });

    // Setting color
    const boundInstance = rive?.viewModelInstance;
    const { setRgba } = useViewModelInstanceColor("iconColor", boundInstance);
    useEffect(() => {
      if (color) {
        const [r, g, b] = Color(color).array();
        const a = Color(color).alpha();
        if (r && g && b) {
          setRgba(r, g, b, a * 255);
        }
      }
    }, [color, setRgba]);

    const fillTrigger = useStateMachineInput(rive, "states", "fill");
    const unfillTrigger = useStateMachineInput(rive, "states", "unfill");
    const sendTrigger = useStateMachineInput(rive, "states", "send");

    useImperativeHandle(
      ref,
      () => ({
        fill: () => {
          fillTrigger?.fire();
        },
        unfill: () => {
          unfillTrigger?.fire();
        },
        send: () => {
          sendTrigger?.fire();
        },
      }),
      [fillTrigger, unfillTrigger, sendTrigger],
    );

    return (
      <Box
        sx={{
          width: size,
          height: size,
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
  },
);

RiveSendIcon.displayName = "RiveSendIcon";

export default RiveSendIcon;
