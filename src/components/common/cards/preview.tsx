import type { CardProps } from "@/types/cards";
import Link from "next/link";

const Preview = ({ item }: CardProps) => {
  if (!item) return null;

  return (
    <div className="card preview-card">
      <h3 className="mb-3 text-xl leading-snug">
        <Link
          as={`/listings/${item.id}`}
          href="/listings/[slug]"
          className="hover:underline"
        >
          {item.title}
        </Link>
      </h3>
    </div>
  );
};

export default Preview;
