import { takeEvery, put, call } from "redux-saga/effects";
import {
  GET_ALL_MESSAGES_FROM_CONVERSATION,
  GET_ALL_MESSAGES_FROM_CONVERSATION_REQUEST,
} from "../types";
import axios from "axios";

export function* messagesWatcher() {
  yield takeEvery(
    GET_ALL_MESSAGES_FROM_CONVERSATION_REQUEST,
    getMessagesWorker
  );
}

function* getMessagesWorker(action) {
  try {
    const payload = yield call(() => getAllMessages(action.payload));
    yield put({ type: GET_ALL_MESSAGES_FROM_CONVERSATION, payload });
  } catch (error) {
    // yield put();
    // yield put();
  }
}

async function getAllMessages(conversationId) {
  const response = await axios.get(
    `http://localhost:4040/api/message/${conversationId}`
  );
  return await response.data;
}
