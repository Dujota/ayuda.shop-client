// Types
import type { Listing } from "@/types/listing";
import type { GetServerSideProps, NextPage } from "next";

// Service
import { getMyConversations } from "@/lib/conversations/queries";

// Components
import Title from "@/components/common/pages/title";
import Listings from "@/components/listings/listings";
import Link from "next/link";

type Props = {
  listings?: Listing[];
};

const ConversationsDashboard: NextPage = ({ listings }: Props) => {
  return (
    <div>
      <Title>Conversations Landing Page</Title>
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

export default ConversationsDashboard;
