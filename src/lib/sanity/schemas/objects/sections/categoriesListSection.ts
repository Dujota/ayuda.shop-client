import { defineArrayMember, defineField, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  type: "object",
  name: "categoriesListSection",
  title: "Categories List Section",
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
      name: 'categoriesList',
      type: 'array',
      of: [{
            type: "object",
            name: "inline",
            fields: [
              { type: "string", name: "title" },
              { type: "image", name: "image" },
              { type: "string", name: "url" },
            ]
          }],
      title: 'Categories List',
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
      {
      name: "buttonURL",
      type: "string",
      title: "Button URL",
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
        subtitle: "Categories List Section",
        media,
      };
    },
  },
});
