import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authReducer";

const authPersistConfig = {
  key: "user",
  storage,
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});