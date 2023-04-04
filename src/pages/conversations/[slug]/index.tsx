// Services
import PageLoader from "@/components/common/loaders/page-loader";
import GuestSignin from "@/components/common/pages/guest-signin";

// Queries
import { getOne } from "@/lib/conversations/queries";
import { getServerAuthSession } from "@/server/common/get-server-auth-session";

// Actions
import {
  addMessage,
  updateMessages,
} from "@/lib/state-machine/mutations/conversations";

// Hooks
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useStateMachine } from "little-state-machine";
import useActionCable from "@/lib/actioncable/hooks/useActionCable";

// Types
import type { NextPage, GetServerSideProps } from "next";
import type { ConversationResponse, Message } from "@/types/conversations";

// Components
import ChatRoom from "@/components/conversations/chat-room";
import Layout from "@/components/common/layout/layout";

const ConversationDetailPage: NextPage = ({
  conversation,
  messages,
}: ConversationResponse) => {
  const { data: session, status } = useSession();
  const { actions } = useStateMachine({ addMessage, updateMessages });
  const channel = useActionCable(
    {
      channel: "ConversationsChannel",
      conversation_id: conversation?.id,
      sender_id: session?.user?.id,
    },
    (data) => {
      handleReceivedData(data);
    }
  );

  useEffect(() => {
    if (actions) {
      actions.updateMessages(messages);
    }
  }, []);

  const handleReceivedData = ({ message }: { message: Message }) => {
    actions.addMessage(message);
  };

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <GuestSignin />
      </Layout>
    );
  }

  if (!conversation) return null;

  return (
    <Layout>
      <section>
        <ChatRoom
          channel={channel}
          conversation={conversation}
          history={messages}
          user={session?.user}
        />
      </section>
    </Layout>
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

  return { props: { conversation: null, messages: [] } };
};

export default ConversationDetailPage;
