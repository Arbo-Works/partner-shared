import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/system/InitColorSchemeScript";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";

import RedirectToLogin from "@/app/redirectToLogin";
import TransportProvider from "@/lib/network/TransportProvider";
import theme from "@/theme";
import { rotunda } from "@/theme/typography";

export const metadata: Metadata = {
  title: "Arta Studio",
  description: "",
  icons: {
    icon: [
      {
        url: "/favicon_light.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // Suppress hydration warning since the "dark" or "light" mode is only applied on the client.
      // The theme mode isn't set during server-side rendering.
      suppressHydrationWarning
      className={rotunda.variable}
      style={{ height: "100%", overflow: "hidden" }}
    >
      <body style={{ height: "100%", overflow: "hidden", margin: "0" }}>
        <NextIntlClientProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <InitColorSchemeScript attribute="class" defaultMode="dark" />
            <ThemeProvider theme={theme} defaultMode="dark">
              <RedirectToLogin />
              <CssBaseline />
              <Toaster />
              <TransportProvider>{children}</TransportProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
