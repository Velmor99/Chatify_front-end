import { all } from "redux-saga/effects";
import { registerWatcher } from "./auth/authSaga";

export function* rootWatcher() {
  yield all([registerWatcher()]);
}
