import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = [
  {
    question: "",
    options: [],
    // loading, error, ready, active, finished
    status: "loading",
  },
];

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "dataReceived":
      return action.payload;
    default:
      throw new Error("Undefined action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(function () {
    async function fetchQuestions() {
      const res = await fetch("http://localhost:8000/questions");
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.Response === "False") throw new Error(data.Error);
      dispatch({ type: "dataReceived", payload: data });
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>{state[0].question}</p>
      </Main>
    </div>
  );
}
