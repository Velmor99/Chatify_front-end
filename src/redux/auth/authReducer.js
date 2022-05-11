import { REGISTER_USER, SHOW_LOADER, HIDE_LOADER, LOGIN_USER } from "../types";

const initialState = {
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, user: action.payload.user };
    case LOGIN_USER:
      return { ...state, user: action.payload.user };

    default:
      return state;
  }
};
