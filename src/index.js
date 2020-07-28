import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/Reducers";
import Prism from "prismjs";
import AppWithRouter from "./components/app/App";
import "../node_modules/prismjs/themes/prism-tomorrow.css";
import "./sass/main.scss";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouter />
  </Provider>,
  document.querySelector("#root")
);
setTimeout(Prism.highlightAll(), 0);
