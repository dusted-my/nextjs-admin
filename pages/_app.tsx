import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../utils";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // NOTE: No need to declare ThemeProvider in every page
    <ThemeProvider theme={theme}>
      {/* NOTE: Same goes to CssBaseLine */}
      <CssBaseline />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
