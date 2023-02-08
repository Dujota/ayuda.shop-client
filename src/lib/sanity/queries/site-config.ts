import { groq } from "next-sanity";

export const siteConfigQuery = groq`
  *[_id == "site-config"][0]
`;
