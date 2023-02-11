import Link from "next/link";

const InternalLink = ({ children, value }: any) => {
  let rel;
  if (
    (value.internalPage && !value.internalPage?.startsWith("/")) ||
    (value.internalRoute && !value.internalRoute?.startsWith("/"))
  ) {
    rel = "noreferrer noopener";
  }

  const href = value.internalPage || value.internalRoute || "#MISSING URL";

  return (
    <Link title={value.title} href={href} rel={rel}>
      {children}
    </Link>
  );
};

export default InternalLink;
