/* eslint-disable prettier/prettier */
import SimpleBlockContent from "@/common/block/simple-block-content";

import { urlForImage } from "@/lib/sanity/sanity.image";
import Cta from "@/common/links/cta";
import type { CtaProps } from "@/common/links/cta";

interface HeroProps {
  heading: string;
  backgroundImage?: {
    asset: {
      _ref: string;
    };
  };
  tagline?: object[];
  ctas?: CtaProps[];
}

export default function Hero(props: HeroProps) {
  const { heading, backgroundImage, tagline, ctas } = props;

  const style = backgroundImage ? {
    height: "100vh", //TODO: add the properties for images to the sanity schema
    backgroundImage: `url("${urlForImage(backgroundImage)
      .width(2000)
      .height(1000)
      .auto("format")
      .url()}")`,
  }
    : {};

  return (
    <div className="hero-section-container" style={style}>
      <div className="hero-section-content">
        <h1 className="hero-section-title">{heading}</h1>
        <div className="hero-section-tagline">
          {tagline && <SimpleBlockContent blocks={tagline} />}
        </div>
        {ctas && (
          <div className="hero-section-cta-list">
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}