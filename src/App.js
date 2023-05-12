import React, { useState } from "react";
import CardPicker from "./Components/card-picker";
import Gameover from "./Components/game-over";
import Header from "./Components/header";

const App = () => {
  const [round, setRound ] = useState(1);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState('');

  const handleRestart = () => {
    setRound(1);
    setScore(0);
    setOutcome('');
  }

  if(outcome === '') {
    return (
      <div>
      <Header
      round={round}
      score={score}
      />
      <CardPicker 
      round={round}
      setRound={setRound} 
      score={score}
      setScore={setScore}
      outcome={outcome}
      setOutcome={setOutcome}
      />
      </div>
    );
  }
  else {
    return(
      <Gameover 
      outcome={outcome}
      onRestart={handleRestart}
      />
    )
  }
}
export default App;