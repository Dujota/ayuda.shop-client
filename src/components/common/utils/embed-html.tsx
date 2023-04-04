interface EmbedHTMLProps {
  value?: {
    html?: string;
  };
}

export default function EmbedHTML({ value }: EmbedHTMLProps) {
  if (!value?.html) {
    return undefined;
  }
  return <div dangerouslySetInnerHTML={{ __html: value.html }} />;
}
