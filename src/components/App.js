import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  currQuestion: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.answer,
        score: action.payload.score,
      };
    default:
      throw new Error("Undefined action");
  }
}

export default function App() {
  const [{ questions, status, currQuestion, answer, score }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(function () {
    const controller = new AbortController();
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (data.Response === "False") throw new Error();
        dispatch({ type: "dataReceived", payload: data });
      } catch (e) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
    // cleanup function
    return function () {
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={questions.length} onStartQuiz={dispatch} />
        )}
        {status === "active" && (
          <Question
            question={questions[currQuestion]}
            onAnswer={dispatch}
            answer={answer}
            score={score}
          />
        )}
        {answer !== null && <button className="btn">Next</button>}
      </Main>
    </div>
  );
}
