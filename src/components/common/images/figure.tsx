// import styles from "./Figure.module.css"; TODO: check the styles module and add the tailwind classes or make a styled component
import { urlForImage } from "@/lib/sanity/sanity.image";
import Image from "next/image";

interface FigureProps {
  node?: {
    alt?: string;
    caption?: string;
    asset?: {
      _ref: string;
    };
  };
}

export default function Figure({ node }: FigureProps) {
  const { alt, caption, asset } = node || {};

  if (!asset?._ref) return undefined;

  const imageUrl = urlForImage(node).width(2000).url();

  return (
    <figure className="figure-content">
      <Image
        src={imageUrl}
        className="figure-image"
        alt={alt || "fiure image"}
      />
      {caption && (
        <figcaption>
          <div className="figure-caption}">
            <div className="figure-captionBox}">
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}
