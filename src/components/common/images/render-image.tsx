import SVG from "./svg";
import Image from "next/image";

interface RenderImageProps {
  src: string;
  alt?: string;
  className: string;
  options: { width?: number; height?: number };
}

export default function RenderImage({
  src,
  alt,
  className,
  options,
}: RenderImageProps) {
  if (src.includes("svg")) {
    return <SVG className={className} data={src} style={options} />;
  }

  return (
    <Image
      src={src}
      className={className || "image"}
      alt={alt || "fiure image"}
      {...options}
    />
  );
}
