import { defineArrayMember, defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "tagline",
      type: "simplePortableText",
      title: "Tagline",
    }),
    defineField({
      name: "backgroundImage",
      type: "image",
      title: "Background image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctas",
      type: "array",
      title: "Call to actions",
      of: [
        defineArrayMember({
          title: "Call to action",
          type: "cta",
        }),
      ],
    }),
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
