import type { Session } from "next-auth";
import type { AppType } from "next/app";
import type { AppPropsWithLayout } from "@/types/pages";

// Providers
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import Layout from "@/components/common/layout/layout";
import { ActionCableProvider } from "@/lib/actioncable/provider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <ActionCableProvider>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ActionCableProvider>
    </SessionProvider>
  );
};

export default MyApp;
