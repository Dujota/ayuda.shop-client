import { pageBySlugQuery } from "@/lib/sanity/queries/pages/pages.groq";
import { usePreview } from "@/lib/sanity/sanity.preview";
import { siteConfigQuery } from "@/lib/sanity/queries/site-config/site-config.groq";
import { allPostsQuery } from "@/lib/sanity/queries/posts/posts.groq";
import BlogLandingPage from "./blog-landing-page";

export default function PreviewBlogLandingPage({
  token,
}: {
  token: null | string;
}) {
  const page = usePreview(token, pageBySlugQuery, { slug: "/blog" });
  const settings = usePreview(token, siteConfigQuery);
  const posts = usePreview(token, allPostsQuery);

  return (
    <BlogLandingPage page={page} settings={settings} posts={posts} preview />
  );
}
