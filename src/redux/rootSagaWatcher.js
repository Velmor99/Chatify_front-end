import { all } from "redux-saga/effects";
import { registerWatcher } from "./auth/authSaga";
import { conversationsWatcher } from "./conversations/conversationsSaga";
import { messagesWatcher } from "./messages/messagesSaga";

export function* rootWatcher() {
  yield all([registerWatcher(), conversationsWatcher(), messagesWatcher()]);
}
