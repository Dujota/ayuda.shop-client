import type { Listing as ListingType } from "@/types/listing";
type ListingProps = {
  listing: ListingType;
};

const Listing = ({ listing: { title, description } }: ListingProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Listing;
