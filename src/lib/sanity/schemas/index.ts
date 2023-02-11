// Rich text annotations used in the block content editor
import annotationLinkEmail from "./annotations/linkEmail";
// import annotationLinkExternal from "./annotations/linkExternal";
// import annotationLinkInternal from "./annotations/linkInternal";

const annotations = [
  annotationLinkEmail,
  // annotationLinkExternal,
  // annotationLinkInternal,
];

// Document types
import page from "./documents/page";
import route from "./documents/route";

const documents = [page, route];

// Singletons
import siteConfig from "./singletons/site-config";
import settings from "./singletons/settings"; // TODO: incorporate this into siteconfig

const singletons = [siteConfig, settings];

// Blocks
import portableText from "./blocks/portableText";
import simplePortableText from "./blocks/simplePortableText";

const blocks = [portableText, simplePortableText];

// Object types
import callout from "./objects/modules/callout";
import cta from "./objects/modules/cta";
import embedHTML from "./objects/modules/embedHTML";
import figure from "./objects/modules/figure";
import internalLink from "./objects/internalLink";
import externalLink from "./objects/externalLink";

const object = [callout, cta, embedHTML, figure, internalLink, externalLink];

// Page Sections
import hero from "./objects/sections/hero";
import imageSection from "./objects/sections/imageSection";
import mailchimp from "./objects/sections/mailchimp";
import textSection from "./objects/sections/textSection";

const sections = [hero, imageSection, mailchimp, textSection];

export const schemaTypes = [
  ...documents,
  ...sections,
  ...object,
  ...blocks,
  ...singletons,
  ...annotations,
];
