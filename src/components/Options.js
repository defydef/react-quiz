import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";

//question={questions[currQuestion]}

function Options() {
  const { questions, currQuestion } = useQuiz();
  return (
    <div className="options">
      {questions[currQuestion].options.map((o, index) => (
        <Option
          key={index}
          option={o}
          index={index}
          correctOption={questions[currQuestion].correctOption}
        />
      ))}
    </div>
  );
}

export default Options;
