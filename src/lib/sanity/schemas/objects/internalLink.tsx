import type { ReactNode } from "react";
import React from "react";

const InternalLinkRender = ({ children }: { children: ReactNode }) => (
  <span>{children} 🔗</span>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Internal link to another document",
  name: "internalLink",
  type: "reference",
  description: "Locate a document you want to link to",
  to: [{ type: "page" }, { type: "route" }],
  blockEditor: {
    icon: () => "🔗",
    render: InternalLinkRender,
  },
};
