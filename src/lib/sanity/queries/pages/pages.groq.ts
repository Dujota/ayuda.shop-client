import { groq } from "next-sanity";

export const internalLinkFragment = groq`
  text[]{
      ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "internalPage": @.reference->url->slug.current,
        "internalRoute": @.reference->slug.current
      }
    }
  }
`;

const pageCtaFragment = groq`
 cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  }
`;

export const pageContentFragment = groq`
  content[] {
    ...,
    ${pageCtaFragment},
    ${internalLinkFragment}
  }
`;

export const pageUrlFragment = groq`
 url -> {
    disallowRobots,
    includeInSitemap,
    slug{
      current
    },
  }
`;

export const pageFragment = groq`
  ...,
  ${pageUrlFragment},
  ${pageContentFragment},
`;

export const homePageQuery = groq`
  *[_id == "site-config"][0]{
    frontpage -> {
      ${pageFragment}
    }
  }
`;

// Get the route document with one of the possible slugs for the given requested path
export const pageBySlugQuery = groq`
  *[_type == "route" && slug.current in $possibleSlugs][0]{
    page-> {
      ${pageFragment}
    }
  }
`;
