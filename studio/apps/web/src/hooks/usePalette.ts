import { useTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

import { useFinalMode } from "@/hooks/useFinalMode";

export const usePalette = () => {
  const theme = useTheme();
  const mode = useFinalMode();

  return theme.colorSchemes[mode]?.palette ?? theme.palette;
};
