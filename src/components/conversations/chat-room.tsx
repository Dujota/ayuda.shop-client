import { useState } from "react";

// Hooks
import useActionCable from "@/lib/actioncable/hooks/useActionCable";

// Components
import Message from "./message";

// Types
import type { UserAPI } from "@/types/auth";
import type {
  Conversation,
  Message as MessageType,
} from "@/types/conversations";

interface Props {
  conversation: Conversation;
  user?: UserAPI;
  history?: MessageType[];
}

const ChatRoom = ({ conversation, user, history }: Props) => {
  const [messages, setMessages] = useState<MessageType[]>(history || []);
  const [currentMessage, setCurrentMessage] = useState("");

  const channel = useActionCable(
    {
      channel: "ConversationsChannel",
      conversation_id: conversation.id,
      sender_id: user?.id,
    },
    (data) => {
      handleReceivedData(data);
    }
  );

  const handleReceivedData = (msg: MessageType) => {
    setMessages((messages) => [...messages, msg]);
  };

  const handleSendMessage = () => {
    channel.send({ message: currentMessage });
    setCurrentMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} message={message} user={user} />
        ))}
      </div>
      <div>
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
