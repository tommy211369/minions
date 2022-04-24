import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import minionsReducer from "./store/reducers/minions";
import saveReducer from "./store/reducers/save";

// Combiner les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
