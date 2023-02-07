// eslint-disable-next-line import/no-anonymous-default-export
export default {
  type: "object",
  name: "textSection",
  title: "Text",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "text",
      type: "portableText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare({ heading }: any) {
      return {
        title: `${heading}`,
        subtitle: "Text section",
      };
    },
  },
};
