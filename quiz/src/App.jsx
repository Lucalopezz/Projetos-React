import { useContext } from "react";
import { QuizContext } from "./context/quiz";


import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
