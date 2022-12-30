import PageLoader from "@/components/common/loaders/page-loader";
import GuestSignin from "@/components/common/pages/guest-signin";
import { useSession } from "next-auth/react";

const NewListing = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated") {
    return <GuestSignin />;
  }
  return <div>NewListing</div>;
};

export default NewListing;
