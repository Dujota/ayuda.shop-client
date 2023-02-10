// import styles from "./Figure.module.css"; TODO: check the styles module and add the tailwind classes or make a styled component
import { urlForImage } from "@/lib/sanity/sanity.image";
import Image from "next/image";
import SVG from "./svg";

interface FigureProps {
  value?: {
    alt?: string;
    caption?: string;
    asset?: {
      _ref: string;
    };
  };
  index?: number;
  isInline?: boolean;
}

export default function Figure({ value }: FigureProps) {
  const { alt, caption, asset } = value || {};

  if (!asset?._ref) return undefined;

  const imageUrl = urlForImage(value).width(500).url();

  return (
    <figure className="figure-content">
      {imageUrl.includes("svg") ? (
        <SVG data={imageUrl} style={{ width: 500, heigh: 200 }} />
      ) : (
        <Image
          src={imageUrl}
          className="figure-image"
          alt={alt || "fiure image"}
          width={500}
          height={100}
        />
      )}
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
