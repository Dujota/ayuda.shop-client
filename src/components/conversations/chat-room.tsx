// ChatRoom.tsx

import { useState } from "react";
import useActionCable from "@/lib/actioncable/hooks/useActionCable";
import Message from "./message";
import type { UserAPI } from "@/types/auth";
import type { Message as MessageType } from "@/types/actioncable";

interface Props {
  conversation: {
    id: string;
  };
  user?: UserAPI;
}

const ChatRoom = ({ conversation, user }: Props) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const channel = useActionCable(
    "ConversationRoomChannel",
    conversation.id,
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
