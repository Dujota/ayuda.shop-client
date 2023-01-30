import { useEffect, useState } from "react";

// Actions
import { updateMessages } from "@/lib/state-machine/mutations/conversations";
// Hooks
import { useStateMachine } from "little-state-machine";
// Components
import Message from "./message";
// Types
import type { UserAPI } from "@/types/auth";
import type {
  Conversation,
  Message as MessageType,
} from "@/types/conversations";
import type { Channel } from "@/types/actioncable";
import MessageHistory from "./message-history";

interface Props {
  conversation: Conversation;
  user?: UserAPI;
  history?: MessageType[];
  channel?: Channel;
}

const ChatRoom = ({ user, channel }: Props) => {
  const {
    state: {
      conversations: { messages },
    },
  } = useStateMachine();

  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    // TODO: keep send or do a network request?
    channel?.send({ message: currentMessage });
    setCurrentMessage("");
  };

  return (
    <div>
      <div>
        <MessageHistory messages={messages} user={user} />
      </div>
      <div>
        <input
          disabled={!channel}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
