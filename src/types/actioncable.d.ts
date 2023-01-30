export interface Channel {
  send: (data: any) => void;
  unsubscribe: () => void;
}

export interface Chat {
  id: number;
}

export interface CurrentUser {
  id: number;
}

export interface Message {
  sender: number;
  senderName: string;
  content: string;
}

export interface Props {
  chat: Chat;
  currentUser: CurrentUser;
}
