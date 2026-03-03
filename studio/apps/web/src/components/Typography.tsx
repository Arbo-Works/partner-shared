import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import { Box } from "@mui/material";
import { mergeSx } from "merge-sx";

// Only include props that are used in the Typography component
type TypographyBaseProps = Omit<MuiTypographyProps, "paragraph">;

type TypographyVariant =
  | "impact1"
  | "impact1Em"
  | "impact2"
  | "impact2Em"
  | "impact3"
  | "impact3Em"
  | "display1"
  | "display1Em"
  | "display2"
  | "display2Em"
  | "display3"
  | "display3Em"
  | "headline1"
  | "headline1Em"
  | "headline2"
  | "headline2Em"
  | "body1"
  | "body1Em"
  | "body2"
  | "body2Em"
  | "fine1"
  | "fine1Em"
  | "fine2"
  | "fine2Em"
  | "cappedLarge"
  | "cappedMedium"
  | "cappedSmall"
  | "inputTextLarge"
  | "inputTextMedium"
  | "inputTextSmall"
  | "inputNumericLarge"
  | "inputNumericMedium"
  | "inputNumericSmall"
  | "buttonLarge"
  | "buttonMedium"
  | "buttonSmall"
  | "inherit";

interface TypographyProps extends Omit<TypographyBaseProps, "variant"> {
  /**
   * Applies the theme typography styles.
   */
  variant?: TypographyVariant | ResponsiveTypographyProps["variant"];

  /**
   * Indents the text, adds 0.5rem to the left and right.
   */
  indent?: boolean;
}

const Typography = ({
  variant,
  indent = false,
  sx,
  ...rest
}: TypographyProps) => {
  const isResponsiveVariant = typeof variant === "object";
  const finalSx = mergeSx({ mx: indent ? "0.5rem" : 0 }, sx);
  if (isResponsiveVariant) {
    return <ResponsiveTypography variant={variant} sx={finalSx} {...rest} />;
  }
  return <MuiTypography variant={variant} sx={finalSx} {...rest} />;
};

interface ResponsiveTypographyProps extends Omit<
  TypographyBaseProps,
  "variant"
> {
  /**
   * Applies the theme typography styles.
   */
  variant: { "@": TypographyVariant } & {
    [breakpoint: `@${string}`]: TypographyVariant;
  };

  /**
   * Indents the text, adds 0.5rem to the left and right.
   */
  indent?: boolean;
}
// TODO: refactor and spread the typography properties
// ref: see description in https://github.com/Arbo-Works/dataworks/pull/61152
const ResponsiveTypography = ({
  variant,
  sx,
  ...rest
}: ResponsiveTypographyProps) => {
  const breakpoints = Object.keys(variant) as (keyof typeof variant)[];
  return (
    <Box sx={sx}>
      {breakpoints.map((breakpoint) => {
        return (
          <MuiTypography
            key={breakpoint}
            variant={variant[breakpoint]}
            sx={{
              display: breakpoints.reduce((acc, curr) => {
                return {
                  ...acc,
                  [curr]: curr === breakpoint ? "block" : "none",
                };
              }, {}),
            }}
            {...rest}
          />
        );
      })}
    </Box>
  );
};

export default Typography;
