// reference: https://mui.com/material-ui/customization/default-theme/?expand-path=$.zIndex

import type { ZIndex } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ZIndex {
    sideDrawer: number;
  }
}

const zIndex: Partial<ZIndex> = {};

export default zIndex;
