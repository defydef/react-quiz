import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, currQuestion } = useQuiz();
  return (
    <div>
      <h4>{questions[currQuestion].question}</h4>
      <Options />
    </div>
  );
}

export default Question;
