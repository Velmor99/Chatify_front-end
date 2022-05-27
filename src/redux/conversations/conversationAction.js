import { GET_ALL_CONVERSATIONS_REQUEST, GET_ALL_CONVERSATIONS } from "../types";

export function getAllConversationsRequest(email) {
  return {
    type: GET_ALL_CONVERSATIONS_REQUEST,
    payload: email,
  };
}

export function getAllConversations(conversations) {
  return {
    type: GET_ALL_CONVERSATIONS,
    payload: conversations,
  };
}
