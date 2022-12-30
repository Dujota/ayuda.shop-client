// Components
import PageLoader from "@/components/common/loaders/page-loader";
import GuestSignin from "@/components/common/pages/guest-signin";
import { getAllTypes } from "@/lib/types/queries";
// Types
import type { ListingType } from "@/types/listing";
import type { GetServerSideProps, NextPage } from "next";

// Hooks
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/common/get-server-auth-session";

type Props = {
  types?: ListingType[];
};

const NewListing: NextPage = ({ types }: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated") {
    return <GuestSignin />;
  }
  return <div>NewListing</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const session = await getServerAuthSession({ req, res });
  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    return {
      redirect: {
        destination: "/listings",
        permanent: false,
      },
    };
  }
  const types: ListingType[] = await getAllTypes(accessToken);

  return { props: { types } };
};

export default NewListing;
