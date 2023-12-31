import Options from "./Options";

function Question({
  question,
  onAnswer,
  answer,
  score,
  numQuestions,
  currQuestion,
}) {
  return (
    <div>
      <h4>{question.question}</h4>
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
