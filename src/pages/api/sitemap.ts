import { sitemapQuery } from "@/lib/sanity/queries/sitemap/sitemap.groq";
import { client } from "@/lib/sanity/sanity.client";
import { slugToAbsUrl } from "@/lib/utils/urls";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { allRoutesSlugs, baseUrl } = await client?.fetch(sitemapQuery);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutesSlugs
      .map(
        (slug: string) => `
    <url>
      <loc>${slugToAbsUrl(slug, baseUrl)}</loc>
    </url>
    `
      )
      .join("\n")}
  </urlset>`;

  res.status(200).send(sitemap);
}
