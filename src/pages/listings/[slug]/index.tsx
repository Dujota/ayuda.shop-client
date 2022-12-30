// Services
import Listing from "@/components/listings/listing";
import { getOne } from "@/lib/listings/queries";

// Types
import type { Listing as ListingType } from "@/types/listing";
import type { NextPage, GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "src/server/common/get-server-auth-session";

type Props = {
  listing?: ListingType;
};

const ListingDetailPage: NextPage = ({ listing }: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  if (!listing) return null;

  return (
    <section>
      <Listing listing={listing} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}) => {
  const session = await getServerAuthSession({ req, res });
  const accessToken = session?.user?.accessToken;

  // TODO: Setup some logic to view the public listing page
  // Sol
  if (!accessToken) {
    return {
      redirect: {
        destination: "/listings",
        permanent: false,
      },
    };
  }

  const slug = params?.slug;
  if (!slug || typeof slug !== "string") return { props: { listing: null } };

  if (slug) {
    const listing: ListingType = await getOne(slug);
    return { props: { listing } };
  }

  return { props: { listing: null } };
};

export default ListingDetailPage;
