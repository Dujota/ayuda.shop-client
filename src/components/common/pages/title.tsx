import type { ReactNode } from "react";

interface TitleProps {
  title?: string;
  children?: ReactNode;
}

const Title = ({ title, children }: TitleProps) => {
  return <h1>{title || children}</h1>;
};

export default Title;
