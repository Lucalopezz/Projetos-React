import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Questions.css";

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  // console.log(quizState)
  return (
    <div id="question">
      <p>Pergunta de 0 a 10</p>
      <p>Pergunta atual</p>
      <div className="options-container">
        <p>opçoes</p>
      </div>
      <button>Continuar</button>
    </div>
  );
};

export default Questions;
