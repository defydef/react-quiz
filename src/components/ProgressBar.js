function ProgressBar({ currQuestion, numQuestions, score, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={currQuestion + Number(answer !== null)} // if answer is not null, value = currQuestion + 1 (progress bar updates as long as selecting an answer)
      ></progress>
      <p>
        Question <strong>{currQuestion + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{score}</strong> / {10 * numQuestions} points
      </p>
    </header>
  );
}

export default ProgressBar;
