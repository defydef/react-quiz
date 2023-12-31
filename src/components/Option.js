import { useQuiz } from "../contexts/QuizContext";

function Option({ option, index, correctOption }) {
  const { answer, score, dispatch } = useQuiz();
  return (
    <button
      className={`btn btn-option ${
        answer !== null ? (index === correctOption ? "correct" : "wrong") : ""
      } ${answer === index ? "answer" : ""}`}
      key={option}
      onClick={() =>
        dispatch({
          type: "newAnswer",
          payload: {
            answer: index,
            score: index === correctOption ? score + 10 : score,
          },
        })
      }
      disabled={answer !== null}
    >
      {option}
    </button>
  );
}

export default Option;
