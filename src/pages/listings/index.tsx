// Types
import type { Listing } from "@/types/listing";
import type { GetServerSideProps, NextPage } from "next";
// Service
import { getAllListings } from "@/lib/listings/queries";

// Components
import Title from "@/components/common/pages/title";
import Listings from "@/components/listings/listings";
import Link from "next/link";
import Layout from "@/components/common/layout/layout";

type Props = {
  listings?: Listing[];
};

const ListingsLandingPage: NextPage = ({ listings }: Props) => {
  return (
    <Layout>
      <div>
        <Title>Listings Landing Page</Title>
        <div className="buttons">
          <Link href="/listings/new-listing">
            <button
              style={{
                height: 60,
                width: 150,
                margin: 10,
                backgroundColor: "fuchsia",
                borderRadius: 16,
              }}
            >
              Create a Listing
            </button>
          </Link>
        </div>
        <Listings listings={listings} />
      </div>
    </Layout>
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
