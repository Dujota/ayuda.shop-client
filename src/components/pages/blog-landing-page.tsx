import PageLoader from "@/common/loaders/page-loader";
import Head from "next/head";
import Layout from "../common/layout/layout";
import RenderSections from "../common/sections/render-sections";

export default function BlogLandingPage({
  posts,
  settings,
  preview,
  token,
  page,
  loading,
}: any) {
  if (loading) {
    return <PageLoader />;
  }
  const { title, description, slug, url, openGraphImage, content } = page;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Find the help you need for a project!"
        />
      </Head>
      <Layout
        title={title}
        settings={settings}
        description={description}
        slug={url.slug.current || "/blog"}
        disallowRobots={url.disallowRobots}
        openGraphImage={openGraphImage}
      >
        <div>Blog Landing Page</div>
        {content && <RenderSections sections={content} />}
      </Layout>
    </>
  );
}
