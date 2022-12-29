// Types
import type { Listing } from "@/types/listing";
import type { GetStaticProps, NextPage } from "next";
// Service
import { getAllListings } from "@/lib/listings/queries";

// Components
import Title from "@/components/common/pages/Title";

const ListingsLandingPage: NextPage = (pageProps) => {
  return (
    <div>
      <Title>Listings Landing Page</Title>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const listings: Listing[] = await getAllListings();

  return { props: { listings } };
};

export default ListingsLandingPage;
