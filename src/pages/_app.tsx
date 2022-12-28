import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { SessionProvider } from "next-auth/react";
import type { AppPropsWithLayout } from "@/types/pages";

import "../styles/globals.css";
import Layout from "@/components/common/layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </SessionProvider>
  );
};

export default MyApp;
