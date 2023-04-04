interface SVGProps {
  data: string;
  style: React.CSSProperties;
  className: string;
}

export default function SVG({ data, style, className }: SVGProps) {
  return (
    <object
      className={className || "image"}
      type="image/svg+xml"
      data={data}
      style={{
        ...style,
        minHeight: "200px",
      }}
    ></object>
  );
}
