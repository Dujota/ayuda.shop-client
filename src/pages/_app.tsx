import type { Session } from "next-auth";
import type { AppType } from "next/app";
import type { AppPropsWithLayout } from "@/types/pages";

// Providers
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import Layout from "@/components/common/layout/layout";
import { ActionCableProvider } from "@/lib/actioncable/provider";
import { StateMachineProvider, createStore } from "little-state-machine";
import LSMProvider from "@/components/providers/state-machine";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <LSMProvider>
        <ActionCableProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </ActionCableProvider>
      </LSMProvider>
    </SessionProvider>
  );
};

export default MyApp;
