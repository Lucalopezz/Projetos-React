import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";


import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import GameOver from "./components/GameOver";
import "./App.css";
import PickCategory from "./components/PickCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  // useEffect(() =>{
  //   //embaralha as perguntas
  //   dispatch({type: "REORDER_QUESTIONS"})
  // }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  );
}

export default App;
