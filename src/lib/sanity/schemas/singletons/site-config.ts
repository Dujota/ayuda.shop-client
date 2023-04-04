import * as bcp47 from "bcp-47";
import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  name: "site-config",
  type: "document",
  title: "Site configuration",
  icon: CogIcon,
  fieldsets: [{ name: "footer", title: "Footer" }],
  preview: { select: { title: "title", subtitle: "description" } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Site title",
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    }),
    defineField({
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
    }),
    defineField({
      title: "Site language",
      description:
        "Should be a valid bcp47 language code like en, en-US, no or nb-NO",
      name: "lang",
      type: "string",
      validation: (Rule: any) =>
        Rule.custom((lang: string) =>
          bcp47.parse(lang) ? true : "Please use a valid bcp47 code"
        ),
    }),
    defineField({
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        }),
      ],
    }),
    defineField({
      title: "Main navigation",
      name: "mainNavigation",
      description: "Select pages for the top menu",
      validation: (Rule: any) => [
        Rule.max(5).warning("Are you sure you want more than 5 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "route" }],
        }),
      ],
    }),
    defineField({
      title: "Footer navigation items",
      name: "footerNavigation",
      type: "array",
      validation: (Rule: any) => [
        Rule.max(10).warning("Are you sure you want more than 10 items?"),
        Rule.unique().error("You have duplicate menu items"),
      ],
      fieldset: "footer",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "route" }],
        }),
      ],
    }),
    defineField({
      name: "footerText",
      type: "simplePortableText",
      fieldset: "footer",
    }),
  ],
});
