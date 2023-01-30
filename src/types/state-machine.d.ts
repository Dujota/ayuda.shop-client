import "little-state-machine";
import type { Conversation, Message } from "./conversations";

declare module "little-state-machine" {
  interface GlobalState {
    conversations: {
      conversations: Conversation[];
      currentConversation: Conversation | object;
      messages: Message[];
      newConversation: {
        listing_id: string;
        recipient_id: string;
        sender_id: string;
      };
    };
  }
}
