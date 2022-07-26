import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App-base";
// import App from "./App-useReducer";

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
