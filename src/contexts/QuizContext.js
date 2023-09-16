import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:8000";
const SECONDS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  currQuestion: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondsRemaining: null,
};

// 1) Create a new Context component
const QuizContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.answer,
        score: action.payload.score,
      };
    case "nextQuestion":
      return {
        ...state,
        currQuestion: state.currQuestion + 1,
        answer: null,
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.highscore < state.score ? state.score : state.highscore,
      };
    case "restartQuiz":
      return {
        ...state,
        status: "ready",
        currQuestion: 0,
        answer: null,
        score: 0,
        secondsRemaining: 10,
      };
    case "executeTimer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Undefined action");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      currQuestion,
      answer,
      score,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    const controller = new AbortController();
    async function fetchQuestions() {
      try {
        const res = await fetch(`${BASE_URL}/questions`);
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
    <QuizContext.Provider
      value={{
        questions,
        status,
        currQuestion,
        answer,
        score,
        highscore,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error(
      "useQuiz is undefined because it is defined inside the children component of App"
    );
  return context;
}

export { QuizProvider, useQuiz };
