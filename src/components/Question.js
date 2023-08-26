import Options from "./Options";

function Question({ question, onAnswer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} onAnswer={onAnswer} />
    </div>
  );
}

export default Question;
