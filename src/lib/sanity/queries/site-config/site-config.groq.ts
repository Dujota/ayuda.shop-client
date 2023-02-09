import { groq } from "next-sanity";

export const siteConfigBaseQuery = groq`
  *[_id == "site-config"][0]
`;

export const siteConfigQuery = `
  *[_id == "site-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `;
