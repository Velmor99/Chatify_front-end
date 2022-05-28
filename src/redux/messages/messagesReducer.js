import { SAVE_MESSAGE, GET_ALL_MESSAGES_FROM_CONVERSATION } from "../types";

const initialState = [];

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE:
      return [...state, action.payload];
    case GET_ALL_MESSAGES_FROM_CONVERSATION:
      return [...action.payload];
    default:
      return state;
  }
};
