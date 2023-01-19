// Message.tsx

import type { UserAPI } from "@/types/auth";
import React, { memo } from "react";

interface Props {
  message: {
    sender: number;
    senderName: string;
    content: string;
  };
  user?: UserAPI;
}

const Message = ({ message, user }: Props) => {
  return (
    <div>
      {message.sender === user?.id ? (
        <div>
          <p>You: {message.content}</p>
        </div>
      ) : (
        <div>
          <p>
            {message.senderName}: {message.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Message);
