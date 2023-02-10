import { LinkIcon } from "@sanity/icons";
import { defineField } from "sanity";

export default defineField({
  title: "Internal link to another document",
  name: "internalLink",
  type: "object",
  icon: LinkIcon,
  description: "Locate a document you want to link to",
  fields: [
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
        subtitle.push([`→ ${referenceTitle || reference?._id}`]);
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

// eslint-disable-next-line import/no-anonymous-default-export
// export default defineField({
//   icon: LinkIcon,
//   title: "Internal link to another document",
//   name: "internalLink",
//   type: "reference",
//   description: "Locate a document you want to link to",
//   to: [{ type: "page" }, { type: "route" }],
// });

// export default defineField({
//   title: "Internal Link",
//   name: "linkInternal",
//   type: "object",
//   icon: LinkIcon,
//   fields: [
//     // Title
//     {
//       title: "Title",
//       name: "title",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     },
//     // Reference
//     {
//       name: "reference",
//       type: "reference",
//       weak: true,
//       validation: (Rule) => Rule.required(),
//       to: PAGE_REFERENCES,
//     },
//   ],
//   preview: {
//     select: {
//       reference: "reference",
//       referenceProductTitle: "reference.store.title",
//       referenceProductPriceRange: "reference.store.priceRange",
//       referenceTitle: "reference.title",
//       referenceType: "reference._type",
//       title: "title",
//     },
//     prepare(selection) {
//       const {
//         reference,
//         referenceProductPriceRange,
//         referenceProductTitle,
//         referenceTitle,
//         referenceType,
//         title,
//       } = selection;

//       const subtitle = [];
//       if (reference) {
//         subtitle.push([
//           `→ ${referenceTitle || referenceProductTitle || reference?._id}`,
//         ]);
//         if (referenceType === "product" && referenceProductPriceRange) {
//           subtitle.push(`(${getPriceRange(referenceProductPriceRange)})`);
//         }
//       } else {
//         subtitle.push("(Nonexistent document reference)");
//       }

//       return {
//         // media: image,
//         subtitle: subtitle.join(" "),
//         title,
//       };
//     },
//   },
// });
