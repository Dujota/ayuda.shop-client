// Types
import type { GetServerSideProps, NextPage } from "next";
import type {
  Conversation,
  ConversationIndexProps,
} from "@/types/conversations";

// Service
import { getServerAuthSession } from "@/server/common/get-server-auth-session";
import { getMyConversations } from "@/lib/conversations/queries";

// Hooks
import { useSession } from "next-auth/react";

// Components
import Link from "next/link";
import Layout from "@/components/common/layout/layout";
import Title from "@/components/common/pages/title";
import PageLoader from "@/components/common/loaders/page-loader";
import GuestSignin from "@/components/common/pages/guest-signin";

const ConversationsDashboard: NextPage = ({
  conversations,
}: ConversationIndexProps) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <PageLoader />;

  if (!conversations)
    return (
      <div>
        <h1>NO CONVERSATIONS</h1>
      </div>
    );

  if (status === "unauthenticated") {
    return (
      <Layout>
        <GuestSignin />;
      </Layout>
    );
  }
  return (
    <Layout>
      <div>
        <Title>All My Conversations</Title>
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <Link href={`/conversations/${conversation.id}`}>
                Link to Conversation # {conversation.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}) => {
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

  const conversations: Conversation[] = await getMyConversations({
    accessToken,
  });

  return { props: { conversations } };
};

export default ConversationsDashboard;
