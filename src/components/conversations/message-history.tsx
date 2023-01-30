import { memo } from "react";

// Components
import Message from "./message";

// Types
import type { UserAPI } from "@/types/auth";
import type { Message as MessageType } from "@/types/conversations";

interface Props {
  messages: MessageType[];
  user?: UserAPI;
}

const MessageHistory = ({ messages, user }: Props) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} message={message} user={user} />
      ))}
    </div>
  );
};

export default memo(MessageHistory);
