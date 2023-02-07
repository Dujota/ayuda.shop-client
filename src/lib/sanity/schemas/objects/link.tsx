import type { ReactNode } from "react";
import React from "react";

const LinkRender = ({ children }: { children: ReactNode }) => (
  <span>{children} 🌍</span>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "URL",
  name: "link",
  type: "object",
  fields: [
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
  blockEditor: {
    icon: () => "🌍",
    render: LinkRender,
  },
};
