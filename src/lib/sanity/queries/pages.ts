import { groq } from "next-sanity";

export const pageFragment = groq`
  ...,
  content[] {
    ...,
    cta {
      ...,
      route->
    },
    ctas[] {
      ...,
      route->
    }
  }
`;

export const homePageQuery = groq`
  *[_id == "global-config"][0]{
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
