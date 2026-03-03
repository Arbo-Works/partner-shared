import localFont from "next/font/local";

const rotunda = localFont({
  src: [
    {
      path: "../../public/fonts/1A-Rotunda-Hairline.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/1B-Rotunda-Hairline-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/2A-Rotunda-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/2B-Rotunda-Thin-Italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/3A-Rotunda-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/3B-Rotunda-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/4A-Rotunda-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/4B-Rotunda-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/5A-Rotunda-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/5B-Rotunda-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/6A-Rotunda-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/6B-Rotunda-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/7A-Rotunda-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/7B-Rotunda-ExtraBold-Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/8A-Rotunda-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/8B-Rotunda-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-rotunda",
});

const typography = {
  fontFamily: rotunda.style.fontFamily,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  button: undefined,
  overline: undefined,
  caption: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  impact1: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "5.5rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "6rem",
    letterSpacing: "-0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  impact1Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "5.5rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "6rem",
    letterSpacing: "0.03125rem",
    fontVariantNumeric: "tabular-nums",
  },
  impact2: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "4.125rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "6rem",
    letterSpacing: "0.03125rem",
    fontVariantNumeric: "tabular-nums",
  },
  impact2Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "4.125rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "4.5rem",
    fontVariantNumeric: "tabular-nums",
  },
  impact3: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "3.25rem",
    letterSpacing: "0.0125rem",
    fontVariantNumeric: "tabular-nums",
  },
  impact3Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "3.25rem",
    letterSpacing: "0.0125rem",
    fontVariantNumeric: "tabular-nums",
  },
  display1: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "2.75rem",
    letterSpacing: "0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  display1Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.75rem",
    letterSpacing: "0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  display2: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.75rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "2.25rem",
    letterSpacing: "0.05rem",
    fontVariantNumeric: "tabular-nums",
  },
  display2Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.75rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "2.25rem",
    letterSpacing: "0.05rem",
    fontVariantNumeric: "tabular-nums",
  },
  display3: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.75rem",
    letterSpacing: "0.0625rem",
    fontVariantNumeric: "tabular-nums",
  },
  display3Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1.75rem",
    letterSpacing: "0.0625rem",
    fontVariantNumeric: "tabular-nums",
  },
  headline1: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
    letterSpacing: "0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  headline1Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.25rem",
    letterSpacing: "0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  headline2: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.125rem",
    letterSpacing: "0.04375rem",
    fontVariantNumeric: "tabular-nums",
  },
  headline2Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.125rem",
    letterSpacing: "0.04375rem",
    fontVariantNumeric: "tabular-nums",
  },
  body1: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.5rem",
    letterSpacing: "0.01rem",
    fontVariantNumeric: "tabular-nums",
  },
  body1Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.5rem",
    letterSpacing: "0.01rem",
    fontVariantNumeric: "tabular-nums",
  },
  body2: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    fontVariantNumeric: "tabular-nums",
  },
  body2Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    fontVariantNumeric: "tabular-nums",
  },
  fine1: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.125rem",
    letterSpacing: "0.025rem",
    fontVariantNumeric: "tabular-nums",
  },
  fine1Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1.125rem",
    letterSpacing: "0.025rem",
    fontVariantNumeric: "tabular-nums",
  },
  fine2: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1rem",
    letterSpacing: "0.025rem",
    fontVariantNumeric: "tabular-nums",
  },
  fine2Em: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1rem",
    letterSpacing: "0.025rem",
    fontVariantNumeric: "tabular-nums",
  },
  cappedLarge: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.5rem",
    letterSpacing: "0.35rem",
    textTransform: "uppercase" as const,
    fontVariantNumeric: "tabular-nums",
  },
  cappedMedium: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1.125rem",
    letterSpacing: "0.25rem",
    textTransform: "uppercase" as const,
    fontVariantNumeric: "tabular-nums",
  },
  cappedSmall: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "0.875rem",
    letterSpacing: "0.15rem",
    textTransform: "uppercase" as const,
    fontVariantNumeric: "tabular-nums",
  },
  inputTextLarge: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.375rem",
    letterSpacing: "0.0375rem",
    fontVariantNumeric: "tabular-nums",
  },
  inputTextMedium: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
    letterSpacing: "0.05rem",
    fontVariantNumeric: "tabular-nums",
  },
  inputTextSmall: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.125rem",
    letterSpacing: "0.0625rem",
    fontVariantNumeric: "tabular-nums",
  },
  inputNumericLarge: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.75rem",
    letterSpacing: "0.35rem",
    fontVariantNumeric: "tabular-nums",
  },
  inputNumericMedium: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.375rem",
    letterSpacing: "0.3rem",
    fontVariantNumeric: "tabular-nums",
  },
  inputNumericSmall: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.125rem",
    letterSpacing: "0.225rem",
    fontVariantNumeric: "tabular-nums",
  },
  buttonLarge: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1.1875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.5rem",
    letterSpacing: "0.1rem",
    fontVariantNumeric: "tabular-nums",
  },
  buttonMedium: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1.25rem",
    letterSpacing: "0.075rem",
    fontVariantNumeric: "tabular-nums",
  },
  buttonSmall: {
    fontFamily: rotunda.style.fontFamily,
    fontSize: "0.8125rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "1rem",
    letterSpacing: "0.0625rem",
    fontVariantNumeric: "tabular-nums",
  },
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    impact1: React.CSSProperties;
    impact1Em: React.CSSProperties;
    impact2: React.CSSProperties;
    impact2Em: React.CSSProperties;
    impact3: React.CSSProperties;
    impact3Em: React.CSSProperties;
    display1: React.CSSProperties;
    display1Em: React.CSSProperties;
    display2: React.CSSProperties;
    display2Em: React.CSSProperties;
    display3: React.CSSProperties;
    display3Em: React.CSSProperties;
    headline1: React.CSSProperties;
    headline1Em: React.CSSProperties;
    headline2: React.CSSProperties;
    headline2Em: React.CSSProperties;
    body1: React.CSSProperties;
    body1Em: React.CSSProperties;
    body2: React.CSSProperties;
    body2Em: React.CSSProperties;
    fine1: React.CSSProperties;
    fine1Em: React.CSSProperties;
    fine2: React.CSSProperties;
    fine2Em: React.CSSProperties;
    cappedLarge: React.CSSProperties;
    cappedMedium: React.CSSProperties;
    cappedSmall: React.CSSProperties;
    inputTextLarge: React.CSSProperties;
    inputTextMedium: React.CSSProperties;
    inputTextSmall: React.CSSProperties;
    inputNumericLarge: React.CSSProperties;
    inputNumericMedium: React.CSSProperties;
    inputNumericSmall: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    buttonMedium: React.CSSProperties;
    buttonSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    impact1?: React.CSSProperties;
    impact1Em?: React.CSSProperties;
    impact2?: React.CSSProperties;
    impact2Em?: React.CSSProperties;
    impact3?: React.CSSProperties;
    impact3Em?: React.CSSProperties;
    display1?: React.CSSProperties;
    display1Em?: React.CSSProperties;
    display2?: React.CSSProperties;
    display2Em?: React.CSSProperties;
    display3?: React.CSSProperties;
    display3Em?: React.CSSProperties;
    headline1?: React.CSSProperties;
    headline1Em?: React.CSSProperties;
    headline2?: React.CSSProperties;
    headline2Em?: React.CSSProperties;
    body1?: React.CSSProperties;
    body1Em?: React.CSSProperties;
    body2?: React.CSSProperties;
    body2Em?: React.CSSProperties;
    fine1?: React.CSSProperties;
    fine1Em?: React.CSSProperties;
    fine2?: React.CSSProperties;
    fine2Em?: React.CSSProperties;
    cappedLarge?: React.CSSProperties;
    cappedMedium?: React.CSSProperties;
    cappedSmall?: React.CSSProperties;
    inputTextLarge?: React.CSSProperties;
    inputTextMedium?: React.CSSProperties;
    inputTextSmall?: React.CSSProperties;
    inputNumericLarge?: React.CSSProperties;
    inputNumericMedium?: React.CSSProperties;
    inputNumericSmall?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    buttonMedium?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // turn off default variants
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    button: false;
    overline: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
    // turn on custom variants
    impact1: true;
    impact1Em: true;
    impact2: true;
    impact2Em: true;
    impact3: true;
    impact3Em: true;
    display1: true;
    display1Em: true;
    display2: true;
    display2Em: true;
    display3: true;
    display3Em: true;
    headline1: true;
    headline1Em: true;
    headline2: true;
    headline2Em: true;
    body1: true;
    body1Em: true;
    body2: true;
    body2Em: true;
    fine1: true;
    fine1Em: true;
    fine2: true;
    fine2Em: true;
    cappedLarge: true;
    cappedMedium: true;
    cappedSmall: true;
    inputTextLarge: true;
    inputTextMedium: true;
    inputTextSmall: true;
    inputNumericLarge: true;
    inputNumericMedium: true;
    inputNumericSmall: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
  }
}
export { rotunda };
export default typography;
