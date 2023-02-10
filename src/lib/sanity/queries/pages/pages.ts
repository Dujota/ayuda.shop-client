import { getSlugVariations, slugParamToPath } from "@/lib/utils/urls";
import { client } from "../../sanity.client";
import { homePageQuery, pageBySlugQuery } from "./pages.groq";

export async function getFrontPage(): Promise<any> {
  if (client) {
    const res = await client.fetch(homePageQuery);

    return res?.frontpage ? { ...res.frontpage, slug: "" } : null;
  }

  return null;
}

export async function getPageBySlug(slug: string): Promise<any> {
  if (client) {
    const path = slugParamToPath(slug);
    console.log(getSlugVariations(path));
    const res = await client.fetch(pageBySlugQuery, {
      possibleSlugs: getSlugVariations(path),
    });

    return res?.page ? { ...res.page, slug } : null;
  }

  return null;
}
