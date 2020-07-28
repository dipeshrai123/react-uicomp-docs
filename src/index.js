import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/Reducers";
import "./sass/main.scss";
import Prism from "prismjs";
import "../node_modules/prismjs/themes/prism-tomorrow.css";
import AppWithRouter from "./components/app/App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouter />
  </Provider>,
  document.querySelector("#root")
);
setTimeout(Prism.highlightAll(), 0);
