import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { questions, score, highscore, dispatch } = useQuiz();
  const maxPossiblePoints = questions.length * 10;
  const percentage = Math.round((score / maxPossiblePoints) * 100);
  let emoji;

  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage < 100 && percentage >= 80) {
    emoji = "🎉";
  } else if (percentage < 80 && percentage >= 50) {
    emoji = "🙃";
  } else if (percentage < 50 && percentage >= 0) {
    emoji = "🤨";
  } else {
    emoji = "🤦🏻‍♀️";
  }
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{score}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">Highscore : {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "restartQuiz",
          })
        }
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
