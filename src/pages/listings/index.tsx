// Types
import type { Listing } from "@/types/listing";
import type { GetServerSideProps, NextPage } from "next";
// Service
import { getAllListings } from "@/lib/listings/queries";

// Components
import Title from "@/components/common/pages/title";
import Listings from "@/components/listings/listings";

type Props = {
  listings?: Listing[];
};

const ListingsLandingPage: NextPage = ({ listings }: Props) => {
  return (
    <div>
      <Title>Listings Landing Page</Title>
      <Listings listings={listings} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const listings: Listing[] = await getAllListings();

  return { props: { listings } };
};

export default ListingsLandingPage;
