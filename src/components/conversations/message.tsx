// Message.tsx

import type { UserAPI } from "@/types/auth";
import React, { memo } from "react";
import { Message } from "@/types/conversations";

interface Props {
  message: Message;
  user?: UserAPI;
}

const Message = ({ message, user }: Props) => {
  return (
    <div>
      {message.sender_id === user?.id ? (
        <div className="sent message">
          <p>You: {message.content}</p>
        </div>
      ) : (
        <div>
          <p className="incoming message">
            {/*TODO: integrate user name (from) {message.senderName}: {message.content} */}
            Received:: {message.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(Message);
