interface SVGProps {
  data: string;
  style: React.CSSProperties;
}

export default function SVG({ data, style }: SVGProps) {
  return (
    <object
      type="image/svg+xml"
      data={data}
      style={{
        ...style,
        minHeight: "200px",
      }}
    ></object>
  );
}
