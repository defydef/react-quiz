function Option({ option, index, correctOption, onAnswer, answer }) {
  return (
    <button
      className={`btn btn-option ${
        answer ? (index === correctOption ? "correct" : "wrong") : ""
      } ${answer === index ? "answer" : ""}`}
      key={option}
      onClick={() => onAnswer({ type: "newAnswer", payload: index })}
    >
      {option}
    </button>
  );
}

export default Option;
