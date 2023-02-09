import BlogLandingPage from "@/components/pages/blog-landing-page";
import type { Post } from "@/lib/sanity/queries/posts/posts.groq";
import { PreviewSuspense } from "next-sanity/preview";
import type { GetStaticProps } from "next";
import { getSiteConfig } from "@/lib/sanity/queries/site-config/site-config";
import { getAllPosts } from "@/lib/sanity/queries/posts/posts";
import { getPageBySlug } from "@/lib/sanity/queries/pages/pages";
import { lazy } from "react";

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

interface PageProps {
  // posts: Post[];
  // posts: any;
  page: any;
  settings: any;
  preview: boolean;
  token: null | string;
}

const PreviewBlogLandingPage = lazy(
  () => import("@/components/pages/preview-blog-landing-page")
);

const Blog = (props: PageProps) => {
  const { posts, settings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <BlogLandingPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewBlogLandingPage token={token} />
      </PreviewSuspense>
    );
  }
  return <BlogLandingPage {...props} />;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx;

  const [page, settings] = await Promise.all([
    getPageBySlug("/blog"),
    getSiteConfig(),
    // getAllPosts,
  ]);

  return {
    props: {
      page,
      // posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  };
};

export default Blog;
