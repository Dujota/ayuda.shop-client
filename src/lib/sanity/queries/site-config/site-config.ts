import { client } from "../../sanity.client";
import { siteConfigBaseQuery, siteConfigQuery } from "./site-config.groq";

interface SiteConfig {
  _id: string;
  title: string;
  description: string;
  keywords: string;
  logo: any;
  mainNavigation: any;
  footerNavigation: any;
}

export async function getSiteConfig(): Promise<SiteConfig | object> {
  if (client) {
    return (await client.fetch(siteConfigQuery)) || {};
  }
  return {};
}

export async function getBaseSiteConfig(): Promise<SiteConfig | object> {
  if (client) {
    return (await client.fetch(siteConfigBaseQuery)) || {};
  }
  return {};
}
