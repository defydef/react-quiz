function Option({ option, index, correctOption, onAnswer, answer, score }) {
  return (
    <button
      className={`btn btn-option ${
        answer !== null ? (index === correctOption ? "correct" : "wrong") : ""
      } ${answer === index ? "answer" : ""}`}
      key={option}
      onClick={() =>
        onAnswer({
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
