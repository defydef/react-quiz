import { useQuiz } from "../contexts/QuizContext";

function ProgressBar() {
  const { questions, currQuestion, answer, score } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={currQuestion + Number(answer !== null)} // if answer is not null, value = currQuestion + 1 (progress bar updates as long as selecting an answer)
      ></progress>
      <p>
        Question <strong>{currQuestion + 1}</strong>/{questions.length}
      </p>
      <p>
        <strong>{score}</strong> / {10 * questions.length} points
      </p>
    </header>
  );
}

export default ProgressBar;
