import { defineArrayMember, defineField } from "sanity";

// eslint-disable-next-line import/no-anonymous-default-export
export default defineField({
  title: "Simple Portable Text",
  name: "simplePortableText",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
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
        annotations: [
          { name: "link", type: "link" },
          { name: "internalLink", type: "internalLink" },
        ],
      },
    }),
    defineArrayMember({
      type: "embedHTML",
    }),
  ],
});
