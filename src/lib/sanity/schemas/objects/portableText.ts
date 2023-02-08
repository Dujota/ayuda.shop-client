import { defineArrayMember, defineType } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineType({
  title: "Portable Text",
  name: "portableText",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [{ type: "link" }, { type: "internalLink" }],
      },
    }),
    defineArrayMember({ type: "figure" }),
    defineArrayMember({ type: "embedHTML" }),
  ],
});
