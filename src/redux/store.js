import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";
import { rootWatcher } from "./rootSagaWatcher";

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, composedEnhancer);
export const persistor = persistStore(store)

sagaMiddleware.run(rootWatcher);
