import { useColorScheme } from "@mui/material/styles";
import { useDarkMode } from "usehooks-ts";

export const useFinalMode = (): "dark" | "light" => {
  const { mode } = useColorScheme();
  const { isDarkMode } = useDarkMode();
  const systemMode = isDarkMode ? "dark" : "light";

  const getFinalMode = (current: "dark" | "light" | "system" | undefined) => {
    if (!current) return systemMode;
    if (current === "system") return systemMode;
    return current;
  };

  return getFinalMode(mode);
};
