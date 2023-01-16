export interface Conversation {
  id: number;
  listing_id: number;
  recipient_id: number;
  sender_id: number;
  created_at: string;
  updated_at: string;
}

export type ConversationIndexProps = {
  conversations?: Conversation[];
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
