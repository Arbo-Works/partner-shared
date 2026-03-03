import React from "react";
import { Box, SxProps } from "@mui/material";

type StageProps = {
  visible?: boolean;
  children?: React.ReactNode;
  // Used for debugging
  visualizeStage?: boolean;
  disableTopPadding?: boolean;
  disableBottomPadding?: boolean;
  sx?: SxProps;
};

const stagePaddingTop = "4rem";

const stagePaddingBottom = "6rem";

export default function Stage({
  visible = false,
  visualizeStage = false,
  disableTopPadding = false,
  disableBottomPadding = false,
  children,
  sx,
}: StageProps) {
  return (
    <Box
      sx={{
        containerName: "stage",
        containerType: "inline-size",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          overflowY: "auto",
          scrollbarColor: "#80808080 transparent",
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          backgroundColor: visible ? "surface.canvas" : "transparent",
          borderRadius: visible ? "1rem" : "0",
          ...(visualizeStage && { border: "2px dotted #ff6b6b" }),
          paddingTop: disableTopPadding ? 0 : stagePaddingTop,
          paddingBottom: disableBottomPadding ? 0 : stagePaddingBottom,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
