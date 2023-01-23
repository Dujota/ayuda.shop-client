export interface Conversation {
  id: number;
  listing_id: number;
  recipient_id: number;
  sender_id: number;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: number;
  conversation_id: number;
  user_id: number; // sender
  // TODO: we may need to track the sender and recipient separately
  // sender_id: number;
  // recipient_id: number;
  content: string;
  created_at: string;
  updated_at: string;
}

export type ConversationResponse = {
  conversation?: Conversation;
  messages?: Message[];
};

export type ConversationIndexProps = {
  conversations?: Conversation[];
};

export type ConversationFormProps = {
  listing_id: string;
  recipient_id: string;
  sender_id: string;
};

export type NewConversationFormValues = {
  listing_id: string;
  recipient_id: string;
  sender_id: string;
};

export type NewConversationRequest = {
  listing_id: string | number;
  recipient_id: string | number;
  sender_id: string | number;
};
