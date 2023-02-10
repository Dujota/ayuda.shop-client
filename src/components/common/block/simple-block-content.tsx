import { PortableText } from "@portabletext/react";
import EmbedHTML from "../utils/embed-html";
import Figure from "@/common/images/figure";
import InternalLink from "@/common/block/marks/internal-link";
import externalLink from "@/common/block/marks/external-link";

interface SimpleBlockContentProps {
  blocks: any[];
}

const components: any = {
  types: {
    embedHTML: EmbedHTML,
    figure: Figure,
  },
  marks: {
    internalLink: InternalLink,
    link: externalLink,
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
