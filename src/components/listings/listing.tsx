import type { Listing as ListingType } from "@/types/listing";
import DateFormatter from "@/components/common/utils/date-formatter";
type ListingProps = {
  listing: ListingType;
};

const Listing = ({
  listing: { title, description, created_at },
}: ListingProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <p>{description}</p>
      <br />
      <DateFormatter dateString={created_at} />
    </div>
  );
};

export default Listing;
