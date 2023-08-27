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
      Next
    </button>
  );
}

export default NextButton;
