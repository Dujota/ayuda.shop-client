import { defineArrayMember, defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        defineArrayMember({
          title: "Call to action",
          type: "cta",
        }),
      ],
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
        subtitle: "Hero section",
        media,
      };
    },
  },
});
