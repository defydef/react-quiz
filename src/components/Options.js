import { useState } from "react";
import Option from "./Option";

function Options({ question, onAnswer }) {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div className="options">
      {question.options.map((o, index) => (
        <Option
          key={index}
          isAnswered={isAnswered}
          option={o}
          index={index}
          correctOption={question.correctOption}
          onAnswer={onAnswer}
          onSetIsAnswered={setIsAnswered}
        />
      ))}
    </div>
  );
}

export default Options;
