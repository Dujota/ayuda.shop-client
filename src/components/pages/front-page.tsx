// Components
import Head from "next/head";
import Layout from "@/components/common/layout/layout";
import RenderSections from "@/components/common/sections/render-sections";
import PageLoader from "@/common/loaders/page-loader";

export default function FrontPage({
  page,
  settings,
  token,
  preview,
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
        <link href="/output.css" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Quicksand:wght@700&display=swap" rel="stylesheet"></link>
        <meta
          name="description"
          content="Find the help you need for a project!"
        />
      </Head>
      <Layout
        title={title}
        settings={settings}
        description={description}
        slug={slug}
        disallowRobots={url.disallowRobots}
        openGraphImage={openGraphImage}
      >
        <div>Home Page</div>
        {content && <RenderSections sections={content} />}
      </Layout>
    </>
  );
}
