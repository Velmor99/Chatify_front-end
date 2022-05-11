import { takeEvery, put, call } from "redux-saga/effects";
import {
  REGISTER_USER,
  REQUEST_REGISTER,
  REQUEST_LOGIN,
  LOGIN_USER,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../types";
import axios from "axios";

export function* registerWatcher() {
  yield takeEvery(REQUEST_REGISTER, registerWorker);
  yield takeEvery(REQUEST_LOGIN, loginWorker);
}

function* registerWorker(action) {
  try {
    const payload = yield call(() => registerUser(action.payload));
    // yield call(console.log(payload.user));
    yield put({ type: REGISTER_USER, payload });
  } catch (error) {
    // yield put();
    // yield put();
  }
}

function* loginWorker(action) {
  try {
    const payload = yield call(() => loginUser(action.payload));
    yield put({ type: LOGIN_USER, payload });
  } catch (error) {}
}

async function registerUser(user) {
  const response = await axios.post(`http://localhost:4040/api/auth/register`, {
    username: user.name,
    email: user.email,
    password: user.password,
  });
  return await response.data;
}

async function loginUser(user) {
  const response = await axios.put(
    `http://localhost:4040/api/auth/login`,
    {
      email: user.email,
      password: user.password
    }
  );
  return await response.data;
}
