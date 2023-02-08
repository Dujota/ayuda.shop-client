import { defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  title: "URL",
  name: "link",
  type: "object",
  fields: [
    defineField({
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
  ],
});
