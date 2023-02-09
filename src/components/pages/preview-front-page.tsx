import { homePageQuery } from "@/lib/sanity/queries/pages/pages.groq";
import FrontPage from "./front-page";
import { usePreview } from "@/lib/sanity/sanity.preview";
import { siteConfigQuery } from "@/lib/sanity/queries/site-config/site-config.groq";

export default function PreviewFrontPage({ token }: { token: null | string }) {
  const page = usePreview(token, homePageQuery);
  const settings = usePreview(token, siteConfigQuery);

  return <FrontPage page={page} settings={settings} preview />;
}
