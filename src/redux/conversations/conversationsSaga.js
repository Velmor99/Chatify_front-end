import { takeEvery, put, call } from "redux-saga/effects";
import { GET_ALL_CONVERSATIONS, GET_ALL_CONVERSATIONS_REQUEST } from "../types";
import axios from "axios";

export function* conversationsWatcher() {
  yield takeEvery(GET_ALL_CONVERSATIONS_REQUEST, getConversationsWorker);
}

function* getConversationsWorker(action) {
  try {
    const payload = yield call(() => getAllConversations(action.payload));
    yield put({ type: GET_ALL_CONVERSATIONS, payload });
  } catch (error) {
    // yield put();
    // yield put();
  }
}

async function getAllConversations(email) {
  const response = await axios.get(
    `http://localhost:4040/api/conversation/${email}`,
  );
  return await response.data;
}
