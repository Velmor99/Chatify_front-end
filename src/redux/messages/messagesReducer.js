import { SAVE_MESSAGE } from "../types";

const initialState = [];

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};