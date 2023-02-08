import { defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "mailchimp",
  title: "Mailchimp newsletter signup",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subheading",
    }),
    defineField({
      name: "actionUrl",
      type: "url",
      title: "URL to Mailchimp signup",
      description:
        "URL for the Mailchimp signup form. Remember to add your domain in your mailchimp settings to avoid CORS errors.",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }: any) {
      return {
        title,
        subtitle: "Mailchimp newsletter signup section",
      };
    },
  },
});
