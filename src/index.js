import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import {store , persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
