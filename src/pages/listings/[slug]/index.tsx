// Services
import Listing from "@/components/listings/listing";
import { getOne } from "@/lib/listings/queries";

// Types
import type { Listing as ListingType } from "@/types/listing";
import type { NextPage, GetServerSideProps } from "next";

type Props = {
  listing?: ListingType;
};

const ListingDetailPage: NextPage = ({ listing }: Props) => {
  if (!listing) return null;

  return (
    <section>
      <Listing listing={listing} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  if (!slug || typeof slug !== "string") return { props: { listing: null } };

  if (slug) {
    const listing: ListingType = await getOne(slug);
    return { props: { listing } };
  }

  return { props: { listing: null } };
};

export default ListingDetailPage;
