// Services
import PageLoader from "@/components/common/loaders/page-loader";
import GuestSignin from "@/components/common/pages/guest-signin";

// Queries
import { getOne } from "@/lib/conversations/queries";
import { getServerAuthSession } from "@/server/common/get-server-auth-session";

// Hooks
import { useSession } from "next-auth/react";

// Types
import type { NextPage, GetServerSideProps } from "next";
import type { Conversation, ConversationResponse } from "@/types/conversations";
import ChatRoom from "@/components/conversations/chat-room";

const ConversationDetailPage: NextPage = ({
  conversation,
  messages,
}: ConversationResponse) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated") {
    return <GuestSignin />;
  }

  if (!conversation) return null;

  return (
    <section>
      <ChatRoom conversation={conversation} user={session?.user} />
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
  // TODO: Make this condition a util for all routes.
  if (!accessToken) {
    return {
      redirect: {
        destination: "/listings",
        permanent: false,
      },
    };
  }

  const slug = params?.slug;
  if (!slug || typeof slug !== "string")
    return { props: { conversation: null } };

  if (slug) {
    const { conversation, messages }: ConversationResponse = await getOne({
      slug,
      accessToken,
    });
    return { props: { conversation, messages } };
  }

  return { props: { conversation: null } };
};

export default ConversationDetailPage;
