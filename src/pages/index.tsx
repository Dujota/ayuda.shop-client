import { lazy } from "react";
import type { GetStaticProps } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import FrontPage from "@/components/pages/front-page";
import { getFrontPage } from "@/lib/sanity/queries/pages/pages";
import { getSiteConfig } from "@/lib/sanity/queries/site-config/site-config";

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

interface PageProps {
  page: any;
  settings: any;
  preview: boolean;
  token: null | string;
}

const PreviewFrontPage = lazy(
  () => import("@/components/pages/preview-front-page")
);

const Home = (props: PageProps) => {
  const { preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense fallback={<FrontPage loading {...props} />}>
        <PreviewFrontPage token={token} />
      </PreviewSuspense>
    );
  }

  return <FrontPage {...props} />;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx;

  const [page, settings] = await Promise.all([getFrontPage(), getSiteConfig()]);

  return {
    props: {
      page,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};

export default Home;
