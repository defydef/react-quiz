import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  function handleNext() {
    if (currQuestion < questions.length - 1) {
      dispatch({ type: "nextQuestion" });
    } else {
      dispatch({ type: "finishQuiz" });
    }
  }

  const { dispatch, currQuestion, questions } = useQuiz();

  return (
    <button className="btn btn-ui" onClick={handleNext}>
      {currQuestion < questions.length - 1 ? "Next" : "Finish Quiz"}
    </button>
  );
}

export default NextButton;
