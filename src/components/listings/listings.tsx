import type { Listing as ListingType } from "@/types/listing";
import Preview from "@/components/common/cards/preview";

interface ListingsProps {
  listings?: ListingType[];
}

const Listings = ({ listings }: ListingsProps) => {
  if (!listings) return null;

  return (
    <section>
      {listings.map((listing, idx) => (
        <Preview key={idx} item={listing} />
      ))}
    </section>
  );
};

export default Listings;
