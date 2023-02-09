import type { ReactNode } from "react";
import { urlForImage } from "@/lib/sanity/sanity.image";
import Header from "./header";
import Footer from "./footer";
import { LogoJsonLd, NextSeo } from "next-seo";

interface Props {
  children: ReactNode;
  title: string;
  settings: {
    title: string;
    url: string;
    mainNavigation: {
      title: string;
      slug: {
        current: string;
      };
    };
    footerNavigation: {
      title: string;
      slug: {
        current: string;
      };
    };
    footerText: string;
    logo?: {
      asset: {
        extension: string;
        url: string;
      };
    };
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
  settings,
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

  const { mainNavigation, footerNavigation, footerText, logo, url } = settings;
  const logoUrl = logo && logo.asset && logo.asset.url;

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${settings.title}`}
        description={description}
        canonical={url && `${url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      <Header />
      <main>{children}</main>
      <Footer />
      {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
    </>
  );
}
