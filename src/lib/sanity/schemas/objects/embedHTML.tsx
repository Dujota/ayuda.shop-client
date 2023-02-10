import React from "react";
import { defineField } from "sanity";

const HTMLpreview = (props: any) => (
  <div dangerouslySetInnerHTML={{ __html: props?.value?.html }} />
);

// eslint-disable-next-line import/no-anonymous-default-export
export default defineField({
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
    },
  ],
  preview: {
    select: {
      html: "html",
    },
  },
});
