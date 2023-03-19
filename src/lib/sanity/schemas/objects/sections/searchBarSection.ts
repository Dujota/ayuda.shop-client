import { defineArrayMember, defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "searchBarSection",
  title: "Search Bar Section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subtext",
      type: "string",
      title: "Sub text",
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "searchPlaceholder",
      type: "string",
      title: "Search Placeholder",
    },
    {
      name: "postalPlaceholder",
      type: "string",
      title: "Postal Placeholder",
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
    prepare({ title, media }: any) {
      return {
        title,
        subtitle: "Search Bar Section",
        media,
      };
    },
  },
});
