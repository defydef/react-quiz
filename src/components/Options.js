import Option from "./Option";

function Options({ question, onAnswer, answer }) {
  return (
    <div className="options">
      {question.options.map((o, index) => (
        <Option
          key={index}
          answer={answer}
          option={o}
          index={index}
          correctOption={question.correctOption}
          onAnswer={onAnswer}
        />
      ))}
    </div>
  );
}

export default Options;
