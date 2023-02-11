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
import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import externalLink from "./objects/externalLink";

const object = [cta, embedHTML, figure, internalLink, externalLink];

// Landing page sections
import hero from "./objects/modules/hero";
import imageSection from "./objects/modules/imageSection";
import mailchimp from "./objects/modules/mailchimp";
import textSection from "./objects/modules/textSection";

const sections = [hero, imageSection, mailchimp, textSection];

export const schemaTypes = [
  ...documents,
  ...sections,
  ...object,
  ...blocks,
  ...singletons,
];
