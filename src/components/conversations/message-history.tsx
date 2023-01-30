import { memo } from "react";

// Components
import Message from "./message";

// Types
import type { UserAPI } from "@/types/auth";
import type { Message as MessageType } from "@/types/actioncable";

interface Props {
  messages: MessageType[];
  user?: UserAPI;
}

const Messages = ({ messages, user }: Props) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} message={message} user={user} />
      ))}
    </div>
  );
};

export default memo(Messages);
