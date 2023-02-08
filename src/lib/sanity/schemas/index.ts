// Document types
import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";
import settings from "./documents/settings"; // TODO: incorporate this into siteconfig

// Object types
import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";

// Landing page sections
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import mailchimp from "./objects/mailchimp";
import textSection from "./objects/textSection";

export const schemaTypes = [
  cta,
  embedHTML,
  figure,
  hero,
  imageSection,
  internalLink,
  link,
  mailchimp,
  page,
  portableText,
  route,
  simplePortableText,
  siteConfig,
  textSection,
  settings,
];
