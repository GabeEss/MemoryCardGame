import React, { useState } from "react";
import CardPicker from "./Components/card-picker";

const App = () => {
  const [round, setRound ] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div>
      <div id="header">
          <h1>Memory Card Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
          <div>Score: {score}</div>
          <div>Round: {round}</div>
      </div>
    <CardPicker 
    round={round}
    setRound={setRound} 
    score={score}
    setScore={setScore} 
    />
    </div>
  );
}

export default App;