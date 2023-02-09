import BlogLandingPage from "@/components/pages/blog-landing-page";
import type { Post } from "@/lib/sanity/queries/posts/posts.groq";
import { PreviewSuspense } from "next-sanity/preview";

interface Query {
  [key: string]: string;
}

interface PreviewData {
  token?: string;
}

interface PageProps {
  posts: Post[];
  page: any;
  settings: any;
  preview: boolean;
  token: null | string;
}

const Blog = (props: PageProps) => {
  const { posts, settings, preview, token } = props;

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <BlogLandingPage loading preview posts={posts} settings={settings} />
        }
      >
        <BlogLandingPage token={token} />
      </PreviewSuspense>
    );
  }
  return <BlogLandingPage {...props} />;
};

export default BlogLandingPage;
