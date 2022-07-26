import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ backgroundColor: "white", padding: "30px" }}>
      <h1>Compteur</h1>
      <p>Total : {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Incrementer
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrémenter
      </button>
    </div>
  );
}
