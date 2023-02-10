interface EmbedHTMLProps {
  node?: {
    html?: string;
  };
}

export default function EmbedHTML({ node }: EmbedHTMLProps) {
  if (!node?.html) {
    return undefined;
  }
  return <div dangerouslySetInnerHTML={{ __html: node.html }} />;
}
