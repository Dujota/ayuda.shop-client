import { defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "textSection",
  title: "Text",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "text",
      type: "portableText",
      title: "Text",
    }),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }: any) {
      return {
        title: `${heading}`,
        subtitle: "Text section",
      };
    },
  },
});
