// import styles from "./ImageSection.module.css";
import { urlForImage } from "@/lib/sanity/sanity.image";

import Cta from "@/common/links/cta";
import RenderImage from "@/common/images/render-image";
import SimpleBlockContent from "@/common/block/simple-block-content";

interface ImageSectionProps {
  heading: string;
  label: string;
  text?: object[];
  image?: {
    asset: {
      _ref: string;
    };
  };
  cta?: {
    title: string;
    route?: {
      slug: {
        current: string;
      };
    };
    link?: string;
  };
  backgroundImage?: string;
  tagline?: string;
}

const imageOptions = {
  width: 500,
  height: 200,
};

function ImageSection(props: ImageSectionProps) {
  const { heading, label, text, image, cta } = props;

  if (!image) {
    return null;
  }

  const imageUrl = urlForImage(image).auto("format").width(2000).url();

  return (
    <div className="image-section-container">
      <figure className="image-section-content">
        <RenderImage
          src={imageUrl}
          options={imageOptions}
          className="image-section-image"
        />
        <figcaption>
          <div className="image-section-caption">
            <div className="image-section-captionbox">
              <div className="image-section-label">{label}</div>
              <h2 className="image-section-title">{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default ImageSection;
