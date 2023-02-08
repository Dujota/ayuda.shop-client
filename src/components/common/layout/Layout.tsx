import type { ReactNode } from "react";
import { urlForImage } from "@/lib/sanity/sanity.image";
import Header from "./header";
import Footer from "./footer";
import { NextSeo } from "next-seo";

interface Props {
  children: ReactNode;
  title: string;
  config: {
    title: string;
    url: string;
  };
  openGraphImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  slug: string;
  description: string;
  disallowRobots: boolean;
}

export default function Layout({
  children,
  title,
  config,
  description,
  slug,
  disallowRobots,
  openGraphImage,
}: Props) {
  const openGraphImages = openGraphImage
    ? [
      {
        url: urlForImage(openGraphImage).width(800).height(600).url(),
        width: 800,
        height: 600,
        alt: title,
      },
      {
        // Facebook recommended size
        url: urlForImage(openGraphImage).width(1200).height(630).url(),
        width: 1200,
        height: 630,
        alt: title,
      },
      {
        // Square 1:1
        url: urlForImage(openGraphImage).width(600).height(600).url(),
        width: 600,
        height: 600,
        alt: title,
      },
    ]
    : [];

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
