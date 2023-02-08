import { defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  name: "figure",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: "Caption",
      name: "caption",
      type: "string",
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
    }),
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
});
