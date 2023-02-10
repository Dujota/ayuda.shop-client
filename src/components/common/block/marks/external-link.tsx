import Link from "next/link";

const externalLink = ({ children, value }: any) => {
  let target;
  let rel;

  if (value.target) {
    target = "_blank";
  } else if ((value?.href || "").startsWith("http")) {
    target = "_blank";
  } else {
    target = "_self";
  }

  if (!value.href?.startsWith("/") || target === "_blank") {
    rel = "noreferrer noopener";
  }

  console.log(value);
  return (
    <Link href={value.href || "MISSING URL"} rel={rel} target={target}>
      {children}
    </Link>
  );
};

export default externalLink;
