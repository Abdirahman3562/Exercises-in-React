import { useReducer } from "react";

const initialState = { countA: 0, countB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, countA: state.countA + 1 };

    case "decrementA":
      return state.countA > 0 ? { ...state, countA: state.countA - 1 } : state;

    case "incrementB":
      return { ...state, countB: state.countB + 1 };

    case "decrementB":
      return state.countB > 0 ? { ...state, countB: state.countB - 1 } : state;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>
      <h2>Counter A: {state.countA}</h2>
      <button
        onClick={() => dispatch({ type: "decrementA" })}
        disabled={state.countA === 0}
      >
        A-
      </button>
      <button onClick={() => dispatch({ type: "incrementA" })}>A+</button>

      {/* counter B */}

      <h2>Counter B: {state.countB}</h2>
      <button
        onClick={() => dispatch({ type: "decrementB" })}
        disabled={state.countB === 0}
      >
        A-
      </button>
      <button onClick={() => dispatch({ type: "incrementB" })}>A+</button>
      <br />
      <br />

      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
    </div>
  );
};

export default CounterWithReducer;
