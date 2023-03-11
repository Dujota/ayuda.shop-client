import { MasterDetailIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: MasterDetailIcon,
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    defineField({
      name: "url",
      title: "Route Path for this page",
      type: "reference",
      to: { type: "route" },
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        defineArrayMember({ type: "hero" }),
        defineArrayMember({ type: "imageSection" }),
        defineArrayMember({ type: "mailchimp" }),
        defineArrayMember({ type: "textSection" }),
        defineArrayMember({ type: "searchBarSection" }),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    }),
    defineField({
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
});
