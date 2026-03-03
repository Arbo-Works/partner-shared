import type { Components, Theme } from "@mui/material/styles";
import {
  IconCalendarDue,
  IconCaretDownFilled,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const MuiDatePicker: Components<Theme>["MuiDatePicker"] = {
  defaultProps: {
    slots: {
      openPickerIcon: () => <IconCalendarDue />,
      switchViewIcon: () => <IconCaretDownFilled />,
      leftArrowIcon: () => <IconChevronLeft />,
      rightArrowIcon: () => <IconChevronRight />,
    },
    slotProps: {
      popper: {
        sx: {
          borderRadius: "1rem",
          overflow: "hidden",
        },
      },
      mobilePaper: {
        variant: "canvas",
      },
      desktopPaper: {
        variant: "canvas",
      },
      openPickerButton: {
        disableRipple: true,
        color: "phantom",
        sx: {
          transition: "all 0.2s ease-out",
          "&:hover": {
            color: "content.action",
          },
        },
      },
    },
  },
};

export default MuiDatePicker;
