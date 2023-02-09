import { groq } from "next-sanity";

export const baseSiteUrl = `*[_id == "site-config"][0].url`;
export const allRouteSlugsFilter = `_type == "route" &&
      !(_id in path("drafts.**")) &&
      includeInSitemap != false &&
      disallowRobots != true`;

export const sitemapQuery = groq`{
    // Get the slug of all routes that should be in the sitemap
    "allRoutesSlugs": *[
      ${allRouteSlugsFilter}
    ].slug.current,

    // And the base site URL
    "baseUrl": ${baseSiteUrl},
  }`;
