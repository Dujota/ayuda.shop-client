import PageLoader from "@/common/loaders/page-loader";
import Head from "next/head";
import Layout from "../common/layout/layout";
import RenderSections from "../sanity/render-sections";

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
  const { title, description, slug, disallowRobots, openGraphImage, content } =
    page;
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
        title={page.title}
        settings={settings}
        description={page.description}
        slug={page.slug}
        disallowRobots={disallowRobots}
        openGraphImage={openGraphImage}
      >
        <div>Home Page</div>
        {content && <RenderSections sections={content} />}
      </Layout>
    </>
  );
}
