// Types
import type { ReactNode } from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";
import { theme } from "@/styles/theme";

interface Props {
  children?: ReactNode;
}

export default function StyledComponentsProvider({ children }: Props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
