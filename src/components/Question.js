import Options from "./Options";

function Question({ question, onAnswer, answer, score }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div class="result">
        <span>{score}/10</span>
      </div>
      <Options
        question={question}
        onAnswer={onAnswer}
        answer={answer}
        score={score}
      />
    </div>
  );
}

export default Question;
