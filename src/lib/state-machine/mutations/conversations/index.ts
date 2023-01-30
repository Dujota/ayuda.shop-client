import type { GlobalState } from "little-state-machine";

// TODO: setup types for the payloads

export function updateConversations(state: GlobalState, payload: any) {
  return {
    ...state,
    conversations: {
      ...state.conversations,
      ...payload,
    },
  };
}

// TODO: explore a flexible way to update a key in a store
// export function updateKey(store = "", key = "") {
//   return function (state, payload) {
//     const mutation = {
//       ...state[store],
//       ...payload,
//     };

//     return {
//       ...state,
//       [store]: mutation,
//     };
//   };
// }

export function updateConversationsList(state: GlobalState, payload: any) {
  return {
    ...state,
    conversations: {
      ...state.conversations,
      conversations: [...payload],
    },
  };
}

export function updateCurrentConversation(state: GlobalState, payload: any) {
  return {
    ...state,
    conversations: {
      ...state.conversations,
      currentConversation: {
        ...state.conversations.currentConversation,
        ...payload,
      },
    },
  };
}

export function updateMessages(state: GlobalState, payload: any) {
  return {
    ...state,
    conversations: {
      ...state.conversations,
      messages: [...payload],
    },
  };
}

export function addMessage(state: GlobalState, payload: any) {
  return {
    ...state,
    conversations: {
      ...state.conversations,
      messages: [...state.conversations.messages, payload],
    },
  };
}
