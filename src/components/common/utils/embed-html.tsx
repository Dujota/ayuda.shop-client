interface EmbedHTMLProps {
  node: {
    html?: string;
  };
}

export default function EmbedHTML({ node }: EmbedHTMLProps) {
  const { html } = node;
  if (!html) {
    return undefined;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
