import {
  SAVE_MESSAGE,
  GET_ALL_MESSAGES_FROM_CONVERSATION,
  GET_ALL_MESSAGES_FROM_CONVERSATION_REQUEST,
} from "../types";

export function saveMessage(message) {
  return {
    type: SAVE_MESSAGE,
    payload: message,
  };
}

export function getAllMessagesRequest(conversationId) {
  return {
    type: GET_ALL_MESSAGES_FROM_CONVERSATION_REQUEST,
    payload: conversationId,
  };
}

export function getAllMessages(messages) {
  return {
    type: GET_ALL_MESSAGES_FROM_CONVERSATION,
    payload: messages,
  };
}
