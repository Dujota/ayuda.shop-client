import type { Session } from "next-auth";
import type { AppType } from "next/app";
import type { AppPropsWithLayout } from "@/types/pages";

// Providers
import { SessionProvider } from "next-auth/react";
import { ActionCableProvider } from "@/lib/actioncable/provider";
import LSMProvider from "@/components/providers/state-machine";
import StyledComponentsProvider from "@/components/providers/styled-components";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <LSMProvider>
        <ActionCableProvider>
          <StyledComponentsProvider>
            {getLayout(<Component {...pageProps} />)}
          </StyledComponentsProvider>
        </ActionCableProvider>
      </LSMProvider>
    </SessionProvider>
  );
};

export default MyApp;
