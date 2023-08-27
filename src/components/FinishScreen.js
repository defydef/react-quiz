function FinishScreen({ score, maxPossiblePoints }) {
  const percentage = Math.round((score / maxPossiblePoints) * 100);

  return (
    <p className="result">
      You scored <strong>{score}</strong> out of {maxPossiblePoints} (
      {percentage}%)
    </p>
  );
}

export default FinishScreen;
