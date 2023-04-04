import annotateLinkEmail from "../annotations/linkEmail";

export const annotations = [
  { title: "External Link", name: "link", type: "externalLink" },
  { title: "Internal Link", name: "internalLink", type: "internalLink" },
  // { title: "Email", name: "annotationLinkEmail", type: "annotationLinkEmail" },
  annotateLinkEmail,
];
