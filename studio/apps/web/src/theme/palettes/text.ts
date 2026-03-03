import type { TypeText } from "@mui/material/styles";

import { darkSemantic, lightSemantic } from "@/theme/palettes/semantic";

const lightText: Partial<TypeText> = {
  primary: lightSemantic.content.default,
};

const darkText: Partial<TypeText> = {
  primary: darkSemantic.content.default,
};

export { darkText, lightText };
