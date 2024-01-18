import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import catReducer from "./catReducer";
import catsSaga from "./catsSaga";

// Create the saga middleware
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats:catReducer
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
});

// Then run the saga
saga.run(catsSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


