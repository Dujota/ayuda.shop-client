import { defineArrayMember, defineField } from "sanity";
import { annotations } from ".";

export default defineField({
  title: "Portable Text",
  name: "portableText",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations,
      },
      // Paragraphs
      type: "block",
    }),
    // Custom blocks
    defineArrayMember({ name: "figure", type: "figure" }),
    defineArrayMember({ name: "embedHTML", type: "embedHTML" }),
    defineArrayMember({ name: "callout", type: "callout" }),
  ],
});
