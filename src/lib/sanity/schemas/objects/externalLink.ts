import { defineField } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";

export default defineField({
  title: "External link (URL)",
  name: "externalLink",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation(Rule) {
        return Rule.required();
      },
    },
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
    {
      title: "Open in new tab",
      name: "blank",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      href: "href",
    },
    prepare(selection) {
      const { href } = selection;
      return {
        title: href,
      };
    },
  },
});
