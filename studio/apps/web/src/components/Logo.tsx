"use client";

import { Box, BoxProps, SvgIcon } from "@mui/material";
import NextLink from "next/link";

import LogoLong from "@/assets/images/logo-long.svg";

export const Logo = (props: BoxProps) => {
  const { sx, ...rest } = props;
  return (
    <Box
      component={NextLink}
      prefetch
      href="/"
      aria-label="Go to home page"
      sx={{
        color: "content.default",
        alignSelf: "start",
        px: "2.125rem",
        height: "2.75rem",
        position: "relative",
        ...sx,
      }}
      {...rest}
    >
      <SvgIcon
        component={LogoLong}
        inheritViewBox
        sx={{
          width: "7rem",
          height: "2.75rem",
        }}
      />
    </Box>
  );
};
