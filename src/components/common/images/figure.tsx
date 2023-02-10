// import styles from "./Figure.module.css"; TODO: check the styles module and add the tailwind classes or make a styled component
import { urlForImage } from "@/lib/sanity/sanity.image";
import RenderImage from "./render-image";

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

const imageOptions = {
  width: 500,
  height: 200,
};

export default function Figure({ value }: FigureProps) {
  const { alt, caption, asset } = value || {};

  if (!asset?._ref) return undefined;

  const imageUrl = urlForImage(value).width(500).url();

  return (
    <figure className="figure-content">
      <RenderImage
        src={imageUrl}
        alt={alt || "figure image"}
        options={imageOptions}
        className="figure-image"
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
