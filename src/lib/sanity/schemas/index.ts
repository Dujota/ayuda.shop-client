// Document types
import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/site-config";
import settings from "./documents/settings"; // TODO: incorporate this into siteconfig

const documents = [page, route, siteConfig, settings];

// Blocks
import portableText from "./blocks/portableText";
import simplePortableText from "./blocks/simplePortableText";

const blocks = [portableText, simplePortableText];

// Object types
import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";

const object = [cta, embedHTML, figure, internalLink, link];

// Landing page sections
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import mailchimp from "./objects/mailchimp";
import textSection from "./objects/textSection";

const sections = [hero, imageSection, mailchimp, textSection];

export const schemaTypes = [...documents, ...sections, ...object, ...blocks];
