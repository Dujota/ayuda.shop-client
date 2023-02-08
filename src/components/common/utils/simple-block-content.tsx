import type { PortableTextReactComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import EmbedHTML from "./embed-html";
import Figure from "@/common/images/figure";

interface SimpleBlockContentProps {
  blocks: any[];
}

const components: PortableTextReactComponents = {
  types: {
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
