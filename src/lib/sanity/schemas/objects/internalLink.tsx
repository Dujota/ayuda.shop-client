import { defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  title: "Internal link to another document",
  name: "internalLink",
  type: "reference",
  description: "Locate a document you want to link to",
  to: [{ type: "page" }, { type: "route" }],
});
