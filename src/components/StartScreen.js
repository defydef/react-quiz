import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { dispatch, questions } = useQuiz();

  function handleStartQuiz() {
    dispatch({ type: "startQuiz" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions.length} questions to test your React Mastery</h3>
      <button className="btn" onClick={handleStartQuiz}>
        Let's start{" "}
      </button>
    </div>
  );
}

export default StartScreen;
