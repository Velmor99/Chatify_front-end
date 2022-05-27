import { all } from "redux-saga/effects";
import { registerWatcher } from "./auth/authSaga";
import { conversationsWather } from "./conversations/conversationsSaga";

export function* rootWatcher() {
  yield all([registerWatcher(), conversationsWather()]);
}
