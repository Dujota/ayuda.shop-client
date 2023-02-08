import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import EmbedHTML from "./embed-html";
import Figure from "./Figure";

interface SimpleBlockContentProps {
  blocks: any[];
}

const components: PortableTextComponents = {
  types: {
    // @ts-ignore TODO: look into this type issue
    embedHTML: EmbedHTML,
    figure: Figure,
  },
};

function SimpleBlockContent(props: SimpleBlockContentProps) {
  const { blocks } = props;

  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return <PortableText value={blocks} components={components} />;
}

export default SimpleBlockContent;
