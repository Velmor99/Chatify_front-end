import "./index.scss";
import React from "react";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App tab="home" />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
