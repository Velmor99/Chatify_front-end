import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authReducer";
import { messageReducer } from "./messages/messagesReducer";
import { conversationsReducer } from "./conversations/conversationsReducer";

const authPersistConfig = {
  key: "user",
  storage,
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  messages: messageReducer,
  conversations: conversationsReducer,
});
