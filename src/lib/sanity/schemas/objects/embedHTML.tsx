import React from "react";

const HTMLpreview = ({ value }: { value: { html: any } }) => (
  <div dangerouslySetInnerHTML={{ __html: value?.html }} />
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "embedHTML",
  title: "Embed HTML",
  type: "object",
  components: {
    preview: HTMLpreview,
  },
  fields: [
    {
      name: "html",
      title: "HTML",
      type: "text",
      description:
        "You usually want to avoid storing freeform HTML, but for embed codes it can be useful.",
      options: {
        language: "html",
      },
    },
  ],
  preview: {
    select: {
      html: "html",
    },
  },
};
