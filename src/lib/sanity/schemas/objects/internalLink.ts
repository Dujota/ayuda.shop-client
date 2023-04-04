import { LinkIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  icon: LinkIcon,
  description: "Locate a document you want to link to",
  fields: [
    // Title
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    // Reference
    {
      name: "reference",
      type: "reference",
      weak: true,
      validation: (Rule: any) => Rule.required(),
      to: [{ type: "page" }, { type: "route" }],
    },
  ],
  preview: {
    select: {
      reference: "reference",
      referenceTitle: "reference.title",
      referenceType: "reference._type",
      title: "title",
    },
    prepare(selection: any) {
      const { reference, referenceTitle, referenceType, title } = selection;

      const subtitle = [];
      if (reference) {
        subtitle.push([
          `→ ${referenceTitle || reference?._id} (${referenceType})`,
        ]);
      } else {
        subtitle.push("(Nonexistent document reference)");
      }

      return {
        // media: image,
        subtitle: subtitle.join(" "),
        title,
      };
    },
  },
});
