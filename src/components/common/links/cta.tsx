import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// import styles from "./Cta.module.css";

export interface CtaProps {
  title: string;
  route?: {
    slug: {
      current: string;
    };
  };
  link?: string;
  _key?: string;
}

function cta(props: CtaProps) {
  const { title, route, link } = props;

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: route.slug.current,
          query: { slug: route.slug.current },
        }}
        as={`/${route.slug.current}`}
      >
        {title}
      </Link>
    );
  }

  if (link) {
    return <Link href={link}>{title}</Link>;
  }

  return (
    <Link href="#" scroll={false}>
      {title}
    </Link>
  );
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

export default cta;
