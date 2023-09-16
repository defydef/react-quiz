function NextButton({ dispatch, currQuestion, numQuestions }) {
  function handleNext() {
    if (currQuestion < numQuestions - 1) {
      dispatch({ type: "nextQuestion" });
    } else {
      dispatch({ type: "finishQuiz" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={handleNext}>
      {currQuestion < numQuestions - 1 ? "Next" : "Finish Quiz"}
    </button>
  );
}

export default NextButton;
