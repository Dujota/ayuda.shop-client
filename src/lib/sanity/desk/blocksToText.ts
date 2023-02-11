const defaults = { nonTextBehavior: "remove" };
// import type { Block } from "sanity"; // TODO: find type for Block in sanity

// eslint-disable-next-line import/no-anonymous-default-export
export default function (blocks: any, opts = {}) {
  if (typeof blocks === "string") {
    return blocks;
  }

  const options = Object.assign({}, defaults, opts);
  return blocks
    .map((block: any) => {
      if (block._type !== "block" || !block.children) {
        return options.nonTextBehavior === "remove"
          ? ""
          : `[${block._type} block]`;
      }

      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
}
