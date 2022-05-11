import {
  REGISTER_USER,
  REQUEST_REGISTER,
  LOGIN_USER,
  REQUEST_LOGIN,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../types";

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    payload: user,
  };
}

export function requestRegister(fetchedUser) {
  return {
    type: REQUEST_REGISTER,
    payload: fetchedUser,
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}

export function requestLogin(fetchedUser) {
  return {
    type: REQUEST_LOGIN,
    payload: fetchedUser,
  };
}
