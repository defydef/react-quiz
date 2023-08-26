import { useState } from "react";

function Option({
  isAnswered,
  option,
  index,
  correctOption,
  onAnswer,
  onSetIsAnswered,
}) {
  const [isSelected, setIsSelected] = useState(false);
  function handleAnswer(index) {
    onSetIsAnswered(true);
    onAnswer({ type: "newAnswer", payload: index });
    setIsSelected(true);
  }
  return (
    <button
      className={`btn btn-option ${
        isAnswered ? (index === correctOption ? "correct" : "wrong") : ""
      } ${isSelected ? "answer" : ""}`}
      key={option}
      onClick={() => handleAnswer(index)}
    >
      {option}
    </button>
  );
}

export default Option;
