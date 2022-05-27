import { GET_ALL_CONVERSATIONS } from "../types";

const initialState = [];

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONVERSATIONS:
      return [...action.payload];
    default:
      return state;
  }
};
